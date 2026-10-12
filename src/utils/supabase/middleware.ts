import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // refresca el token de autenticación si es necesario
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Solo se consulta el rol si hace falta (ruta de admin, o ya hay sesión en /admin/login)
  let isAdmin = false
  if (user && (request.nextUrl.pathname.startsWith('/admin'))) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    isAdmin = profile?.role === 'admin'
  }

  // Proteger la ruta de admin, excepto la página de login
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (!user) {
      // Redirigir al login si no hay usuario
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }

    // Verificar que el usuario autenticado tiene rol de admin (no cualquier cliente registrado)
    if (!isAdmin) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      url.searchParams.set('error', 'NotAuthorized')
      return NextResponse.redirect(url)
    }
  }

  // Si el usuario está autenticado como admin y trata de ir a login, redirigir al dashboard
  if (request.nextUrl.pathname === '/admin/login' && user && isAdmin) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/orders'
    return NextResponse.redirect(url)
  }

  // Proteger la ruta de cuenta de cliente, excepto login y registro
  if (
    request.nextUrl.pathname.startsWith('/cuenta') &&
    !request.nextUrl.pathname.startsWith('/cuenta/login') &&
    !request.nextUrl.pathname.startsWith('/cuenta/registro')
  ) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/cuenta/login'
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
