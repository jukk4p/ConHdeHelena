'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createOrder(orderData: {
  customer_name: string
  customer_phone: string
  product_id?: string | null
  customization_details?: string | null
  status: 'pending' | 'manufacturing' | 'shipped' | 'delivered'
  payment_link?: string | null
  deadline?: string | null
}) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { success: false, error: 'Acceso no autorizado. Por favor inicie sesión.' }
  }

  const { error } = await supabase
    .from('orders')
    .insert({
      customer_name: orderData.customer_name,
      customer_phone: orderData.customer_phone,
      product_id: orderData.product_id || null,
      customization_details: orderData.customization_details || null,
      status: orderData.status,
      payment_link: orderData.payment_link || null,
      deadline: orderData.deadline || null
    })

  if (error) {
    console.error('Error creating order:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/orders')
  return { success: true }
}
