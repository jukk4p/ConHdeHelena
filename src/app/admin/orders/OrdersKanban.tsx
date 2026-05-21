'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Clock, Hammer, Truck, CheckCircle2, Phone, Sparkles, ChevronDown, Plus } from 'lucide-react'
import OrderFormModal from './OrderFormModal'

const statusConfig = {
  pending: { 
    label: 'Pendiente', 
    icon: Clock,
    color: 'bg-orange-50 text-orange-700 border-orange-200',
    indicator: 'bg-orange-500'
  },
  manufacturing: { 
    label: 'En Taller', 
    icon: Hammer,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    indicator: 'bg-blue-500'
  },
  shipped: { 
    label: 'Enviado', 
    icon: Truck,
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    indicator: 'bg-purple-500'
  },
  delivered: { 
    label: 'Entregado', 
    icon: CheckCircle2,
    color: 'bg-green-50 text-green-700 border-green-200',
    indicator: 'bg-green-500'
  }
}

interface Order {
  id: string
  created_at: string
  customer_name: string
  customer_phone: string | null
  status: 'pending' | 'manufacturing' | 'shipped' | 'delivered'
  customization_details: string | null
  products: {
    name: string
    price: number
  } | null
}

interface OrdersKanbanProps {
  initialOrders: Order[]
  products: {
    id: string
    name: string
    price: number
  }[]
}

const columns = ['pending', 'manufacturing', 'shipped', 'delivered'] as const

export default function OrdersKanban({ initialOrders, products }: OrdersKanbanProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [activeTab, setActiveTab] = useState<typeof columns[number]>('pending')
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  // Sync state with props when Server Component updates
  useEffect(() => {
    setOrders(initialOrders)
  }, [initialOrders])

  const handleStatusChange = async (orderId: string, newStatus: typeof columns[number]) => {
    // Optimistic update
    const previousOrders = [...orders]
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o))
    setUpdatingId(orderId)

    const supabase = createClient()
    const { error } = await supabase
      .from('orders')
      .update({ status: newStatus })
      .eq('id', orderId)

    setUpdatingId(null)

    if (error) {
      console.error('Error updating status:', error)
      alert('Error al actualizar el estado en el servidor. Inténtalo de nuevo.')
      setOrders(previousOrders)
    }
  }

  const handleModalSuccess = () => {
    router.refresh()
  }

  const groupedOrders = {
    pending: orders.filter(o => o.status === 'pending'),
    manufacturing: orders.filter(o => o.status === 'manufacturing'),
    shipped: orders.filter(o => o.status === 'shipped'),
    delivered: orders.filter(o => o.status === 'delivered'),
  }

  return (
    <div className="space-y-6 flex flex-col h-full">
      {/* Page Header (Rendered inside client component for button interactivity) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Panel de Pedidos</h1>
          <p className="text-foreground/60 font-light text-sm md:text-base">Gestiona el flujo de trabajo de tu taller</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background hover:bg-primary hover:text-white rounded-full font-bold transition-all duration-300 shadow-xl shadow-foreground/10 w-full sm:w-auto text-sm cursor-pointer min-h-[44px] touch-manipulation"
        >
          <Plus className="w-5 h-5" />
          Nuevo Pedido
        </button>
      </div>

      {/* Mobile Column Navigation Tabs (Hidden on Desktop) */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x -mx-4 px-4">
        {columns.map(status => {
          const config = statusConfig[status]
          const Icon = config.icon
          const isActive = activeTab === status
          const count = groupedOrders[status].length

          return (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-bold transition-all duration-300 shrink-0 min-h-[48px] touch-manipulation snap-center cursor-pointer ${
                isActive 
                  ? 'bg-foreground text-background border-foreground shadow-md' 
                  : 'bg-surface text-foreground/60 border-foreground/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{config.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                isActive ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Desktop Board Layout / Mobile Active Column View */}
      <div className="flex-1">
        {/* Mobile View: Renders only the active column */}
        <div className="md:hidden space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${statusConfig[activeTab].color}`}>
                {(() => {
                  const Icon = statusConfig[activeTab].icon
                  return <Icon className="w-4 h-4" />
                })()}
              </div>
              <h2 className="font-bold text-foreground text-lg">{statusConfig[activeTab].label}</h2>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-surface border border-foreground/10 text-foreground/60 shadow-sm">
              {groupedOrders[activeTab].length} pedidos
            </span>
          </div>

          <div className="space-y-4">
            {groupedOrders[activeTab].map(order => (
              <OrderCard 
                key={order.id} 
                order={order} 
                updating={updatingId === order.id}
                onStatusChange={handleStatusChange} 
              />
            ))}
            {groupedOrders[activeTab].length === 0 && (
              <EmptyColumnState status={activeTab} />
            )}
          </div>
        </div>

        {/* Desktop View: Renders all columns horizontally */}
        <div className="hidden md:flex gap-6 h-full items-start">
          {columns.map(status => {
            const config = statusConfig[status]
            const Icon = config.icon

            return (
              <div key={status} className="w-[300px] xl:w-[340px] shrink-0 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${config.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h2 className="font-bold text-foreground tracking-wide">{config.label}</h2>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-surface border border-foreground/10 text-foreground/60 shadow-sm">
                    {groupedOrders[status].length}
                  </span>
                </div>

                <div className="space-y-4 flex-1 overflow-y-auto max-h-[calc(100vh-280px)] px-1 pb-4">
                  {groupedOrders[status].map(order => (
                    <OrderCard 
                      key={order.id} 
                      order={order} 
                      updating={updatingId === order.id}
                      onStatusChange={handleStatusChange} 
                    />
                  ))}
                  {groupedOrders[status].length === 0 && (
                    <EmptyColumnState status={status} />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Order Creation Modal */}
      <OrderFormModal
        products={products}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  )
}

function OrderCard({ 
  order, 
  updating, 
  onStatusChange 
}: { 
  order: Order
  updating: boolean
  onStatusChange: (id: string, status: typeof columns[number]) => void 
}) {
  const config = statusConfig[order.status]

  return (
    <div className={`bg-surface p-6 rounded-[2rem] shadow-xl shadow-foreground/5 border border-foreground/5 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-foreground/10 transition-all duration-300 relative overflow-hidden group ${updating ? 'opacity-50 pointer-events-none' : ''}`}>
      {/* Left indicator line */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${config.indicator} opacity-60 group-hover:opacity-100 transition-opacity`} />
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-foreground truncate max-w-[150px] sm:max-w-none">{order.customer_name}</h3>
        <span className="text-xs font-medium text-foreground/40 bg-background px-2.5 py-1 rounded-md border border-foreground/5">
          {new Date(order.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
        </span>
      </div>
      
      <p className="text-xs font-bold text-primary mb-4 truncate bg-primary/5 inline-block px-3 py-1 rounded-full border border-primary/10">
        {order.products ? order.products.name : 'Producto Personalizado'}
      </p>

      <div className="text-xs text-foreground/60 line-clamp-3 mb-5 leading-relaxed font-light whitespace-pre-wrap">
        {order.customization_details || "Sin detalles adicionales."}
      </div>
      
      <div className="flex flex-col gap-4 pt-4 border-t border-foreground/5">
        {/* Pricing & WhatsApp Actions */}
        <div className="flex items-center justify-between">
          <span className="font-serif font-extrabold text-lg text-foreground">
            {order.products?.price ? `${order.products.price}€` : 'Personalizado'}
          </span>
          {order.customer_phone && (
            <a 
              href={`https://wa.me/${order.customer_phone.replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2.5 rounded-full font-bold transition-all min-h-[44px] touch-manipulation cursor-pointer border border-green-200"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          )}
        </div>

        {/* Responsive Native Status Picker */}
        <div className="relative w-full">
          <select
            value={order.status}
            onChange={(e) => onStatusChange(order.id, e.target.value as typeof columns[number])}
            className="w-full bg-background/50 hover:bg-background border border-foreground/10 hover:border-foreground/20 text-foreground font-semibold text-xs rounded-xl py-3 px-4 pr-10 appearance-none transition-all cursor-pointer min-h-[44px] touch-manipulation"
            aria-label="Cambiar estado del pedido"
          >
            <option value="pending">Estado: Pendiente</option>
            <option value="manufacturing">Estado: En Taller</option>
            <option value="shipped">Estado: Enviado</option>
            <option value="delivered">Estado: Entregado</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

function EmptyColumnState({ status }: { status: typeof columns[number] }) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className="h-36 border-2 border-dashed border-foreground/10 rounded-[2rem] flex flex-col items-center justify-center text-foreground/30 text-sm font-medium bg-surface/50 p-6">
      <Icon className="w-6 h-6 mb-2 opacity-40 text-foreground/60" />
      <span>Sin pedidos en esta fase</span>
    </div>
  )
}
