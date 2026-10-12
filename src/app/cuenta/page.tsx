import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Clock, Hammer, Truck, CheckCircle2, PackageSearch } from 'lucide-react'

const statusConfig = {
  pending: { label: 'Pendiente', icon: Clock, color: 'bg-orange-50 text-orange-700 border-orange-200' },
  manufacturing: { label: 'En Taller', icon: Hammer, color: 'bg-blue-50 text-blue-700 border-blue-200' },
  shipped: { label: 'Enviado', icon: Truck, color: 'bg-purple-50 text-purple-700 border-purple-200' },
  delivered: { label: 'Entregado', icon: CheckCircle2, color: 'bg-green-50 text-green-700 border-green-200' },
} as const

export default async function CuentaPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/cuenta/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, phone')
    .eq('id', user.id)
    .single()

  // RLS ya restringe esta consulta a los pedidos cuyo telefono coincide con el del perfil
  const { data: orders } = await supabase
    .from('orders')
    .select('id, created_at, status, customization_details, products(name, price)')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
            Hola, <span className="text-primary italic font-light">{profile?.full_name || 'de nuevo'}</span>
          </h1>
          <p className="text-foreground/60 font-light">
            {profile?.phone
              ? `Pedidos asociados al teléfono ${profile.phone}`
              : 'Añade tu teléfono desde el registro para ver tus pedidos aquí.'}
          </p>
        </div>

        <div className="space-y-4">
          {orders && orders.length > 0 ? (
            orders.map((order) => {
              const status = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.pending
              const Icon = status.icon
              const product = Array.isArray(order.products) ? order.products[0] : order.products

              return (
                <div
                  key={order.id}
                  className="bg-surface p-6 rounded-[2rem] shadow-xl shadow-foreground/5 border border-foreground/5"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">
                        {product ? product.name : 'Producto personalizado'}
                      </h3>
                      <p className="text-xs text-foreground/40 mt-1">
                        {new Date(order.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border shrink-0 ${status.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {status.label}
                    </span>
                  </div>

                  {order.customization_details && (
                    <p className="text-sm text-foreground/60 font-light whitespace-pre-wrap">
                      {order.customization_details}
                    </p>
                  )}

                  {product?.price && (
                    <p className="text-sm font-serif font-bold text-foreground mt-3">
                      {Number(product.price).toFixed(0)}€
                    </p>
                  )}
                </div>
              )
            })
          ) : (
            <div className="bg-surface rounded-[2rem] border border-foreground/5 p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-6">
                <PackageSearch className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Aún no tienes pedidos</h3>
              <p className="text-foreground/50 font-light text-sm">
                Cuando hagas un pedido con este mismo teléfono, aparecerá aquí.
              </p>
            </div>
          )}
        </div>

        <form action="/auth/logout" method="post" className="mt-12">
          <input type="hidden" name="redirect_to" value="/cuenta/login" />
          <button
            type="submit"
            className="text-sm font-semibold text-foreground/40 hover:text-red-600 transition-colors"
          >
            Cerrar sesión
          </button>
        </form>
      </div>
    </div>
  )
}
