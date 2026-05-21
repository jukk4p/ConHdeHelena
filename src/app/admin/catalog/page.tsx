import { createClient } from '@/utils/supabase/server'
import CatalogClient from './CatalogClient'

export const revalidate = 0

export default async function CatalogPage() {
  const supabase = await createClient()

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-8 text-red-500 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Catálogo</h1>
        <div className="p-6 bg-red-50 border border-red-100 rounded-3xl">
          Error cargando productos: {error.message}
        </div>
      </div>
    )
  }

  return <CatalogClient initialProducts={products || []} />
}
