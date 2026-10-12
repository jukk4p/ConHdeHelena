import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const fullName = String(formData.get('full_name') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const password = String(formData.get('password') || '')

  if (!fullName || !phone || !email || !password) {
    return NextResponse.redirect(`${requestUrl.origin}/cuenta/registro?error=MissingFields`, {
      status: 301,
    })
  }

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        phone,
      },
    },
  })

  if (error) {
    const code = error.message.includes('already registered') ? 'EmailTaken' : 'SignupFailed'
    return NextResponse.redirect(`${requestUrl.origin}/cuenta/registro?error=${code}`, {
      status: 301,
    })
  }

  // Si el proyecto exige confirmación de email, no habrá sesión activa todavía
  if (!data.session) {
    return NextResponse.redirect(`${requestUrl.origin}/cuenta/login?info=ConfirmEmail`, {
      status: 301,
    })
  }

  return NextResponse.redirect(`${requestUrl.origin}/cuenta`, {
    status: 301,
  })
}
