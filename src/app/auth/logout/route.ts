import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

const ALLOWED_REDIRECTS = ['/admin/login', '/cuenta/login']

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const requestedRedirect = String(formData.get('redirect_to') || '/admin/login')
  const redirectTo = ALLOWED_REDIRECTS.includes(requestedRedirect) ? requestedRedirect : '/admin/login'
  const supabase = await createClient()

  await supabase.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`, {
    status: 301,
  })
}
