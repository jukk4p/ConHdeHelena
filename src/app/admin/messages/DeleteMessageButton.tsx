'use client'

import { useState } from 'react'
import { deleteMessage } from './actions'

export default function DeleteMessageButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (!confirm('¿Estás seguro de que deseas eliminar este mensaje?')) {
      return
    }

    setLoading(true)
    const res = await deleteMessage(id)
    setLoading(false)

    if (!res.success) {
      alert(`Error al eliminar mensaje: ${res.error}`)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="w-full py-3.5 px-6 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-bold text-xs sm:text-sm rounded-full text-center transition-all cursor-pointer min-h-[44px] touch-manipulation disabled:opacity-50"
    >
      {loading ? 'Eliminando...' : 'Borrar Mensaje'}
    </button>
  )
}
