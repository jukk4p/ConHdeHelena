import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { LogIn, Sparkles } from 'lucide-react'

export default async function CuentaLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; info?: string }>
}) {
  const { error, info } = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/cuenta')
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
            Mi cuenta
          </h2>
          <p className="text-foreground/60 font-light mb-10">
            Inicia sesión para ver tus pedidos.
          </p>

          {info === 'ConfirmEmail' && (
            <div className="mb-6 px-4 py-3 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-sm font-semibold">
              Revisa tu correo para confirmar la cuenta antes de iniciar sesión.
            </div>
          )}

          {error && (
            <div className="mb-6 px-4 py-3 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-semibold">
              Correo o contraseña incorrectos.
            </div>
          )}

          <form action="/auth/login" method="post" className="space-y-5 text-left">
            <input type="hidden" name="redirect_to" value="/cuenta" />
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
                className="w-full px-5 py-4 rounded-2xl border border-foreground/10 bg-background text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-foreground hover:bg-primary text-background hover:text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-foreground/10 flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Entrar
              </button>
            </div>
          </form>

          <p className="text-sm text-foreground/50 mt-8">
            ¿Aún no tienes cuenta?{' '}
            <Link href="/cuenta/registro" className="text-primary font-semibold hover:underline">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
