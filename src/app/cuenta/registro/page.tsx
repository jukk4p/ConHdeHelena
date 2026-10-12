import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { UserPlus, Sparkles } from 'lucide-react'

export default async function RegistroPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/cuenta')
  }

  const errorMessages: Record<string, string> = {
    MissingFields: 'Completa todos los campos para crear tu cuenta.',
    EmailTaken: 'Ya existe una cuenta con ese correo electrónico.',
    SignupFailed: 'No se pudo crear la cuenta. Inténtalo de nuevo.',
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/headers/contact.webp"
          alt="Fondo Taller"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-surface/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-foreground/10 overflow-hidden p-6 sm:p-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
            Crear cuenta
          </h2>
          <p className="text-foreground/60 font-light mb-10">
            Regístrate para seguir tus pedidos.
          </p>

          {error && (
            <div className="mb-6 px-4 py-3 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-semibold">
              {errorMessages[error] || 'Ha ocurrido un error. Inténtalo de nuevo.'}
            </div>
          )}

          <form action="/auth/signup" method="post" className="space-y-5 text-left">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 ml-2">Nombre</label>
              <input
                name="full_name"
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full px-5 py-4 rounded-2xl border border-foreground/10 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 ml-2">Teléfono</label>
              <input
                name="phone"
                type="tel"
                placeholder="600 000 000"
                required
                className="w-full px-5 py-4 rounded-2xl border border-foreground/10 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              />
              <p className="text-xs text-foreground/40 ml-2">Usa el mismo teléfono que diste al hacer tus pedidos, para poder verlos aquí.</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 ml-2">Correo electrónico</label>
              <input
                name="email"
                type="email"
                placeholder="tucorreo@email.com"
                required
                className="w-full px-5 py-4 rounded-2xl border border-foreground/10 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 ml-2">Contraseña</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full px-5 py-4 rounded-2xl border border-foreground/10 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-foreground hover:bg-primary text-background hover:text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-foreground/10 flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Crear cuenta
              </button>
            </div>
          </form>

          <p className="text-sm text-foreground/50 mt-8">
            ¿Ya tienes cuenta?{' '}
            <Link href="/cuenta/login" className="text-primary font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
