'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Phone, Tag, AlignLeft, Calendar, Link as LinkIcon, AlertCircle } from 'lucide-react'
import { createOrder } from './actions'

interface Product {
  id: string
  name: string
  price: number
}

interface OrderFormModalProps {
  products: Product[]
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function OrderFormModal({ products, isOpen, onClose, onSuccess }: OrderFormModalProps) {
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [productId, setProductId] = useState('')
  const [customizationDetails, setCustomizationDetails] = useState('')
  const [status, setStatus] = useState<'pending' | 'manufacturing' | 'shipped' | 'delivered'>('pending')
  const [paymentLink, setPaymentLink] = useState('')
  const [deadline, setDeadline] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      setCustomerName('')
      setCustomerPhone('')
      setProductId('')
      setCustomizationDetails('')
      setStatus('pending')
      setPaymentLink('')
      setDeadline('')
      setError(null)
    }
  }, [isOpen])

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
    if (!customerName.trim() || !customerPhone.trim()) {
      setError('Por favor, completa los campos requeridos.')
      return
    }

    setSaving(true)
    setError(null)

    // Pre-fill customization details if empty and product is selected
    let finalDetails = customizationDetails.trim()
    if (!finalDetails && productId) {
      const selected = products.find(p => p.id === productId)
      if (selected) {
        finalDetails = `Producto: ${selected.name}\nPrecio Ud: ${selected.price}€`
      }
    }

    const res = await createOrder({
      customer_name: customerName.trim(),
      customer_phone: customerPhone.trim(),
      product_id: productId || null,
      customization_details: finalDetails || null,
      status,
      payment_link: paymentLink.trim() || null,
      deadline: deadline || null
    })

    setSaving(false)

    if (res.success) {
      onSuccess()
      onClose()
    } else {
      setError(res.error || 'Ocurrió un error al crear el pedido.')
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
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Nuevo Pedido
                    </h2>
                    <p className="text-xs text-foreground/50 font-light mt-0.5">
                      Introduce los datos para registrar un nuevo pedido en el sistema
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
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Customer Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Nombre del Cliente <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Nombre completo"
                      className="w-full pl-4 pr-10 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Customer Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Teléfono / WhatsApp <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Ej. 600000000"
                      className="w-full pl-4 pr-10 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                      required
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none">
                      <Phone className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Product Dropdown Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Producto Relacionado
                  </label>
                  <div className="relative">
                    <select
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none"
                    >
                      <option value="">Personalizado / Ninguno</option>
                      {products.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.price}€)
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none">
                      <Tag className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Customization Details */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Detalles y Personalización
                  </label>
                  <div className="relative">
                    <textarea
                      value={customizationDetails}
                      onChange={(e) => setCustomizationDetails(e.target.value)}
                      placeholder="Texto a grabar, detalles de madera, notas del pedido..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-light resize-none"
                    />
                  </div>
                </div>

                {/* Status Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Estado Inicial del Pedido
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none"
                  >
                    <option value="pending">Pendiente</option>
                    <option value="manufacturing">En Taller</option>
                    <option value="shipped">Enviado</option>
                    <option value="delivered">Entregado</option>
                  </select>
                </div>

                {/* Payment Link */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Enlace de Pago (Opcional)
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={paymentLink}
                      onChange={(e) => setPaymentLink(e.target.value)}
                      placeholder="Ej. https://bizum.me/..."
                      className="w-full pl-4 pr-10 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none">
                      <LinkIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Deadline */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-foreground/60 uppercase tracking-wider block">
                    Fecha Límite / Entrega (Opcional)
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 rounded-2xl border border-foreground/12 bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none">
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>
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
                    {saving ? 'Creando...' : 'Crear Pedido'}
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
