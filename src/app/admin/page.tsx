import { redirect } from 'next/navigation'

export default function AdminIndexPage() {
  // Redirigir la raíz de admin a la página de pedidos por defecto
  redirect('/admin/orders')
}
