'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Inbox, PackageSearch, LogOut, Sparkles } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { name: 'Pedidos', href: '/admin/orders', icon: LayoutDashboard },
  { name: 'Mensajes', href: '/admin/messages', icon: Inbox },
  { name: 'Catálogo', href: '/admin/catalog', icon: PackageSearch },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-surface/90 backdrop-blur-md border-b border-foreground/5 flex items-center justify-between px-6 z-30 shadow-sm">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-bold text-foreground leading-none">
              ConhdeHelena
            </span>
            <span className="text-[8px] font-bold text-primary tracking-widest uppercase mt-0.5">
              Panel
            </span>
          </div>
        </Link>
        <form action="/auth/logout" method="post">
          <button 
            type="submit"
            className="p-2 text-red-500 hover:bg-red-500/10 hover:text-red-600 rounded-xl transition-all duration-300 cursor-pointer"
            aria-label="Cerrar sesión"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </form>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[4.5rem] pb-2 pt-1 bg-surface/90 backdrop-blur-md border-t border-foreground/5 flex items-center justify-around z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname.startsWith(item.href)
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex flex-col items-center justify-center flex-1 h-full gap-0.5 text-[10px] font-bold transition-all duration-200 relative",
                isActive 
                  ? "text-primary" 
                  : "text-foreground/50 hover:text-foreground"
              )}
            >
              <Icon className={clsx("w-5 h-5 transition-transform duration-200", isActive ? "text-primary scale-110" : "text-foreground/45")} />
              <span className="mt-0.5">{item.name}</span>
              {isActive && (
                <span className="absolute bottom-0 w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Sidebar - Aesthetic Glass/Surface (Hidden on Mobile) */}
      <aside className="hidden md:flex w-72 bg-surface/95 backdrop-blur-sm border-r border-foreground/5 flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20">
        <div className="h-24 flex items-center px-8 border-b border-foreground/5 relative overflow-hidden bg-background/30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 pointer-events-none" />
          <Link href="/admin" className="relative z-10 flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground leading-tight tracking-wide">
                ConhdeHelena
              </span>
              <span className="text-[9px] font-bold text-primary tracking-widest uppercase mt-0.5">
                Panel de Control
              </span>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2">
          <div className="px-4 mb-4 text-[10px] font-bold text-foreground/35 uppercase tracking-widest">
            Gestión principal
          </div>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname.startsWith(item.href)
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 group relative overflow-hidden",
                  isActive 
                    ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover" 
                    : "text-foreground/75 hover:bg-primary/5 hover:text-primary"
                )}
              >
                <Icon className={clsx("w-5 h-5 transition-transform duration-300 group-hover:scale-105", isActive ? "text-white" : "text-primary/70")} />
                <span className="relative z-10">{item.name}</span>
                {!isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-8 rounded-r transition-all duration-300" />
                )}
              </Link>
            )
          })}
        </nav>
        
        <div className="p-6 border-t border-foreground/5">
          <form action="/auth/logout" method="post">
            <button 
              type="submit"
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold text-red-500 hover:bg-red-500/10 hover:text-red-600 w-full transition-all duration-300 cursor-pointer"
            >
              <LogOut className="w-5 h-5" />
              Cerrar sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background relative pt-0 pb-0">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />
        
        <div className="flex-1 overflow-auto pt-20 pb-24 px-4 md:p-8 lg:p-12 relative z-10">
          {children}
        </div>
      </main>
    </div>
  )
}
