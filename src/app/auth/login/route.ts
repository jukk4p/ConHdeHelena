import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

const ALLOWED_REDIRECTS = ['/admin/orders', '/cuenta']

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const requestedRedirect = String(formData.get('redirect_to') || '/admin/orders')
  const redirectTo = ALLOWED_REDIRECTS.includes(requestedRedirect) ? requestedRedirect : '/admin/orders'
  const loginPath = redirectTo.startsWith('/cuenta') ? '/cuenta/login' : '/admin/login'
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return NextResponse.redirect(`${requestUrl.origin}${loginPath}?error=InvalidCredentials`, {
      status: 301,
    })
  }

  // Si se pide entrar al panel de admin, comprobar que el usuario tiene ese rol
  if (redirectTo.startsWith('/admin')) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single()

    if (profile?.role !== 'admin') {
      await supabase.auth.signOut()
      return NextResponse.redirect(`${requestUrl.origin}/admin/login?error=NotAuthorized`, {
        status: 301,
      })
    }
  }

  return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`, {
    status: 301,
  })
}
