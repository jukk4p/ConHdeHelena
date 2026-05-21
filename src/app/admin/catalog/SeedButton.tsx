'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { seedProducts } from './actions'
import { Tag } from 'lucide-react'

export default function SeedButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSeed = async () => {
    if (!confirm('¿Deseas cargar los 6 productos iniciales en la base de datos?')) {
      return
    }

    setLoading(true)
    const res = await seedProducts()
    setLoading(false)

    if (res.success) {
      router.refresh()
    } else {
      alert(`Error al cargar productos: ${res.error}`)
    }
  }

  return (
    <button
      onClick={handleSeed}
      disabled={loading}
      className="mt-6 flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white hover:bg-primary-hover rounded-full font-bold transition-all duration-300 shadow-xl shadow-primary/20 text-sm cursor-pointer min-h-[44px] touch-manipulation disabled:opacity-50"
    >
      <Tag className="w-5 h-5" />
      {loading ? 'Cargando Productos...' : 'Cargar Productos Iniciales'}
    </button>
  )
}
