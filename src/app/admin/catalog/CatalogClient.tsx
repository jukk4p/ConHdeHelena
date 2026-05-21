'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Edit2, Trash2, Tag, Image as ImageIcon } from 'lucide-react'
import ProductModal from './ProductModal'
import SeedButton from './SeedButton'
import { deleteProduct } from './actions'

interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string | null
  image_url: string | null
  is_active: boolean
  created_at: string
}

interface CatalogClientProps {
  initialProducts: Product[]
}

export default function CatalogClient({ initialProducts }: CatalogClientProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const router = useRouter()

  // Sync state with props when Server Component updates
  useEffect(() => {
    setProducts(initialProducts)
  }, [initialProducts])

  const handleOpenAddModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(true)
  }

  const handleOpenEditModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`¿Estás seguro de que deseas eliminar el producto "${name}"?`)) {
      return
    }

    setDeletingId(id)
    const res = await deleteProduct(id)
    setDeletingId(null)

    if (res.success) {
      router.refresh()
    } else {
      alert(`Error al eliminar el producto: ${res.error}`)
    }
  }

  const handleModalSuccess = () => {
    router.refresh()
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header / Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Catálogo</h1>
          <p className="text-foreground/60 font-light text-sm md:text-base">Gestiona los productos disponibles en la web</p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="flex items-center justify-center gap-2 px-8 py-3.5 bg-foreground text-background hover:bg-primary hover:text-white rounded-full font-bold transition-all duration-300 shadow-xl shadow-foreground/10 w-full sm:w-auto text-sm cursor-pointer min-h-[44px] touch-manipulation"
        >
          <Plus className="w-5 h-5" />
          Añadir Producto
        </button>
      </div>

      {/* Main Catalog View */}
      <div className="bg-surface rounded-[2.5rem] shadow-2xl shadow-foreground/5 border border-foreground/5 overflow-hidden">
        {products.length === 0 ? (
          <div className="p-16 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
              <Tag className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Catálogo Vacío</h3>
            <p className="text-foreground/50 font-light">Aún no has añadido ningún producto.</p>
            <SeedButton />
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background border-b border-foreground/5 text-foreground/40 text-xs font-bold uppercase tracking-widest">
                    <th className="p-6 font-bold w-16 text-center">Img</th>
                    <th className="p-6 font-bold">Producto</th>
                    <th className="p-6 font-bold">Categoría</th>
                    <th className="p-6 font-bold">Precio</th>
                    <th className="p-6 font-bold text-center">Estado</th>
                    <th className="p-6 font-bold text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5 text-sm">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className={`hover:bg-background/50 transition-colors group ${
                        deletingId === product.id ? 'opacity-50 pointer-events-none' : ''
                      }`}
                    >
                      <td className="p-4 text-center">
                        <div className="w-12 h-12 bg-background border border-foreground/10 rounded-2xl flex items-center justify-center mx-auto text-foreground/20 overflow-hidden">
                          {product.image_url ? (
                            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
                          ) : (
                            <ImageIcon className="w-5 h-5" />
                          )}
                        </div>
                      </td>
                      <td className="p-6">
                        <p className="font-bold text-base text-foreground mb-1">{product.name}</p>
                        <p className="text-xs text-foreground/40 font-medium truncate max-w-xs">{product.description || "Sin descripción"}</p>
                      </td>
                      <td className="p-6">
                        <span className="bg-primary/5 text-primary px-3 py-1 rounded-lg font-medium text-xs border border-primary/10">
                          {product.category}
                        </span>
                      </td>
                      <td className="p-6 font-serif font-bold text-lg text-foreground">{Number(product.price).toFixed(0)}€</td>
                      <td className="p-6 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${product.is_active ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-background text-foreground/40 border border-foreground/10'}`}>
                          {product.is_active && <div className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                          {product.is_active ? 'Activo' : 'Oculto'}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleOpenEditModal(product)}
                            className="w-10 h-10 flex items-center justify-center text-foreground/40 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors cursor-pointer"
                            aria-label="Editar"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id, product.name)}
                            className="w-10 h-10 flex items-center justify-center text-foreground/40 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                            aria-label="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List View */}
            <div className="block md:hidden divide-y divide-foreground/5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`p-5 flex flex-col gap-4 bg-surface ${
                    deletingId === product.id ? 'opacity-50 pointer-events-none' : ''
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-background border border-foreground/10 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden text-foreground/20">
                      {product.image_url ? (
                        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h4 className="font-bold text-foreground text-base truncate">{product.name}</h4>
                        <span className="font-serif font-bold text-base text-foreground shrink-0">{Number(product.price).toFixed(0)}€</span>
                      </div>
                      <p className="text-xs text-foreground/40 font-medium truncate mb-2">{product.description || "Sin descripción"}</p>
                      <span className="bg-primary/5 text-primary px-2.5 py-0.5 rounded-md font-medium text-[10px] border border-primary/10 inline-block">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-foreground/5 mt-1">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${product.is_active ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-background text-foreground/40 border border-foreground/10'}`}>
                      {product.is_active && <div className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                      {product.is_active ? 'Activo' : 'Oculto'}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleOpenEditModal(product)}
                        className="w-11 h-11 flex items-center justify-center text-foreground/50 hover:text-primary hover:bg-primary/10 bg-background border border-foreground/5 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] touch-manipulation"
                        aria-label="Editar"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id, product.name)}
                        className="w-11 h-11 flex items-center justify-center text-foreground/50 hover:text-red-600 hover:bg-red-50 bg-background border border-foreground/5 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] touch-manipulation"
                        aria-label="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Add/Edit Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  )
}
