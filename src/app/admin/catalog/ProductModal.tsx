'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Tag, Euro, Image as ImageIcon, AlignLeft, ToggleLeft, ToggleRight, Loader2 } from 'lucide-react'
import { saveProduct } from './actions'
import { createClient } from '@/utils/supabase/client'

interface ProductModalProps {
  product?: any // If present, we are editing. Otherwise, adding.
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function ProductModal({ product, isOpen, onClose, onSuccess }: ProductModalProps) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      if (product) {
        setName(product.name || '')
        setCategory(product.category || '')
        setPrice(product.price ? String(product.price) : '')
        setDescription(product.description || '')
        setImageUrl(product.image_url || '')
        setIsActive(product.is_active ?? true)
      } else {
        setName('')
        setCategory('')
        setPrice('')
        setDescription('')
        setImageUrl('')
        setIsActive(true)
      }
      setError(null)
    }
  }, [isOpen, product])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !category.trim() || !price.trim()) {
      setError('Por favor, completa los campos requeridos.')
      return
    }

    const numericPrice = parseFloat(price)
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError('El precio debe ser un número válido mayor a 0.')
      return
    }

    setSaving(true)
    setError(null)

    const res = await saveProduct({
      id: product?.id,
      name: name.trim(),
      category: category.trim(),
      price: numericPrice,
      description: description.trim() || undefined,
      image_url: imageUrl.trim() || undefined,
      is_active: isActive
    })

    setSaving(false)

    if (res.success) {
      onSuccess()
      onClose()
    } else {
      setError(res.error || 'Ocurrió un error al guardar el producto.')
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)
      setError(null)

      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`
      const filePath = `${fileName}`

      const supabase = createClient()
      
      const { data, error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        throw uploadError
      }

      const { data: { publicUrl } } = supabase.storage
        .from('products')
        .getPublicUrl(filePath)

      setImageUrl(publicUrl)
    } catch (err: any) {
      console.error('Error al subir imagen:', err)
      setError(err.message || 'Error al subir la imagen. Asegúrate de tener el bucket y las políticas configuradas en Supabase.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="w-full max-w-lg bg-surface rounded-[2.5rem] shadow-2xl border border-foreground/5 pointer-events-auto overflow-hidden flex flex-col my-8"
            >
              {/* Header */}
              <div className="relative px-8 pt-8 pb-6 border-b border-foreground/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Tag className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      {product ? 'Editar Producto' : 'Añadir Producto'}
                    </h2>
                    <p className="text-xs text-foreground/50 font-light mt-0.5">
                      {product ? 'Actualiza los datos del producto seleccionado' : 'Introduce los detalles para tu nuevo producto'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-foreground/5 text-foreground/40 hover:text-foreground transition-all cursor-pointer"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-5 max-h-[calc(100vh-220px)]">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-semibold">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Nombre del Producto <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Copa de Cristal Grabada"
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    required
                  />
                </div>

                {/* Grid Category & Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                      Categoría <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Ej. Eventos, Temporada..."
                      className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                      Precio (€) <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Ej. 15.00"
                        className="w-full pl-4 pr-10 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        required
                      />
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none">
                        <Euro className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Imagen del Producto */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Imagen del Producto
                  </label>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    {/* Thumbnail Preview if imageUrl is set */}
                    {imageUrl && (
                      <div className="relative w-full sm:w-32 aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-foreground/10 bg-background group shrink-0">
                        <img 
                          src={imageUrl} 
                          alt="Vista previa de producto" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => setImageUrl('')}
                            className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition-colors cursor-pointer min-h-[30px] flex items-center justify-center"
                            title="Eliminar Imagen"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Upload Dropzone */}
                    <div className="flex-1 w-full border-2 border-dashed border-foreground/15 rounded-2xl p-6 flex flex-col items-center justify-center bg-background/50 hover:bg-background/80 transition-colors relative group min-h-[120px]">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        disabled={uploading}
                        className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
                      />
                      {uploading ? (
                        <div className="flex flex-col items-center gap-2">
                          <Loader2 className="w-6 h-6 text-primary animate-spin" />
                          <span className="text-xs font-semibold text-foreground/60">Subiendo imagen...</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2 text-center">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <ImageIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-foreground">
                              {imageUrl ? 'Reemplazar imagen' : 'Sube una imagen'}
                            </span>
                            <p className="text-[10px] text-foreground/45 font-light mt-0.5">
                              Arrastra un archivo o haz clic para cambiar
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Entrada Manual de URL */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider block">
                      O introduce la URL de la imagen manualmente:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Ej. /images/assets/Copa-personalizada.webp"
                        className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-xs focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      />
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none">
                        <ImageIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Descripción
                  </label>
                  <div className="relative">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Escribe aquí los detalles del producto..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-light resize-none"
                    />
                  </div>
                </div>

                {/* Is Active Toggle */}
                <div className="flex items-center justify-between p-4 bg-background border border-foreground/5 rounded-2xl">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-foreground">Visible en la Web</span>
                    <p className="text-xs text-foreground/45 font-light">Determina si los clientes pueden ver y pedir este producto.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsActive(!isActive)}
                    className="text-primary hover:text-primary-hover transition-colors cursor-pointer"
                    aria-label={isActive ? 'Ocultar' : 'Mostrar'}
                  >
                    {isActive ? (
                      <ToggleRight className="w-12 h-12" />
                    ) : (
                      <ToggleLeft className="w-12 h-12 text-foreground/20" />
                    )}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-foreground/5">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={saving}
                    className="flex-1 py-4 px-6 bg-background hover:bg-foreground/5 border border-foreground/10 text-foreground font-bold text-sm rounded-2xl text-center transition-colors cursor-pointer min-h-[44px] touch-manipulation disabled:opacity-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-4 px-6 bg-primary hover:bg-primary-hover text-white font-bold text-sm rounded-2xl text-center shadow-lg shadow-primary/20 transition-all cursor-pointer min-h-[44px] touch-manipulation disabled:opacity-50"
                  >
                    {saving ? 'Guardando...' : 'Guardar Producto'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
