import { createClient } from '@/utils/supabase/server'
import OrdersKanban from './OrdersKanban'

export const revalidate = 0

export default async function OrdersPage() {
  const supabase = await createClient()

  // Fetch orders with linked product name and price
  const { data: orders, error: ordersError } = await supabase
    .from('orders')
    .select(`
      *,
      products (name, price)
    `)
    .order('created_at', { ascending: false })

  // Fetch active products list for the creation modal
  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('id, name, price')
    .eq('is_active', true)
    .order('name', { ascending: true })

  // Map database structure to typescript type used in the client component safely
  const formattedOrders = (orders || []).map((order: any) => ({
    id: order.id,
    created_at: order.created_at,
    customer_name: order.customer_name,
    customer_phone: order.customer_phone,
    status: order.status as 'pending' | 'manufacturing' | 'shipped' | 'delivered',
    customization_details: order.customization_details,
    products: order.products ? {
      name: order.products.name,
      price: Number(order.products.price)
    } : null
  }))

  const hasError = ordersError || productsError

  return (
    <div className="h-full flex flex-col">
      {hasError ? (
        <div className="p-6 text-red-500 bg-red-50 border border-red-100 rounded-3xl">
          Error al cargar los datos: {ordersError?.message || productsError?.message}
        </div>
      ) : (
        <OrdersKanban initialOrders={formattedOrders} products={products || []} />
      )}
    </div>
  )
}
