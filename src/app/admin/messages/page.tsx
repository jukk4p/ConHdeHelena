import { createClient } from '@/utils/supabase/server'
import { Mail, Phone, CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import { markAsRead } from './actions'
import DeleteMessageButton from './DeleteMessageButton'

export const revalidate = 0

export default async function MessagesPage() {
  const supabase = await createClient()

  const { data: messages, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Bandeja de Entrada</h1>
        <p className="text-foreground/60 font-light text-sm md:text-base">Comunicaciones directas desde la web</p>
      </div>

      <div className="bg-surface rounded-[2.5rem] shadow-2xl shadow-foreground/5 border border-foreground/5 overflow-hidden">
        {error ? (
          <div className="p-8 text-red-500">Error cargando mensajes: {error.message}</div>
        ) : messages?.length === 0 ? (
          <div className="p-16 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Bandeja Vacía</h3>
            <p className="text-foreground/50 font-light">No hay mensajes nuevos por el momento.</p>
          </div>
        ) : (
          <div className="divide-y divide-foreground/5">
            {messages?.map((msg) => (
              <div 
                key={msg.id} 
                className={`p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 transition-all hover:bg-background/50 ${msg.is_read ? 'opacity-70 bg-background' : 'bg-surface'}`}
              >
                <div className="flex-1 space-y-4 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-3">
                      {msg.is_read ? (
                        <CheckCircle2 className="w-5 h-5 text-foreground/20 shrink-0" />
                      ) : (
                        <div className="relative shrink-0">
                          <Circle className="w-5 h-5 text-primary fill-primary/10" />
                          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        </div>
                      )}
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground truncate max-w-[240px] sm:max-w-none">{msg.name}</h3>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground/40 bg-background px-3 py-1 rounded-full border border-foreground/5 self-start sm:self-auto shrink-0">
                      {new Date(msg.created_at).toLocaleString('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-foreground/60">
                    <span className="flex items-center gap-2 truncate"><Mail className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">{msg.email}</span></span>
                    {msg.phone && (
                      <span className="flex items-center gap-2 shrink-0"><Phone className="w-4 h-4 text-primary shrink-0" /> {msg.phone}</span>
                    )}
                  </div>
                  
                  <div className="bg-background p-5 md:p-6 rounded-3xl border border-foreground/5 mt-4">
                    <p className="text-foreground/80 font-light text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
                      {msg.message}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 w-full md:w-56 shrink-0 pt-4 md:pt-2 border-t md:border-t-0 border-foreground/5 items-center md:items-end">
                  {msg.phone && (
                    <a 
                      href={`https://wa.me/${msg.phone.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(msg.name)},%20te%20escribo%20desde%20ConhdeHelena...`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs sm:text-sm font-bold rounded-full text-center transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] touch-manipulation"
                    >
                      Responder
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  {/* Mark as Read Button using Server Action */}
                  {!msg.is_read && (
                    <form 
                      action={async () => {
                        'use server'
                        await markAsRead(msg.id)
                      }}
                      className="w-full"
                    >
                      <button 
                        type="submit" 
                        className="w-full py-3.5 px-6 bg-background hover:bg-foreground/5 border border-foreground/10 text-foreground font-semibold text-xs sm:text-sm rounded-full text-center transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                      >
                        Marcar Leído
                      </button>
                    </form>
                  )}
                  {/* Delete Button Client Component */}
                  <DeleteMessageButton id={msg.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
