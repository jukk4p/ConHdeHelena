'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

const initialProducts = [
  {
    name: "Copa Personalizada",
    category: "Eventos",
    price: 15.00,
    description: "Una copa de cristal elegante personalizada para tus celebraciones más especiales. Ideal para aniversarios, cumpleaños o cualquier evento inolvidable. Grabada con vinilo metálico de alta calidad y excelente adherencia.",
    image_url: "/images/assets/Copa-personalizada-cumpleaños.webp",
    is_active: true
  },
  {
    name: "Llavero Personalizado",
    category: "Día a día",
    price: 10.00,
    description: "Un detalle único y duradero para llevar tus recuerdos siempre contigo. Llaveros de cuero natural grabados con mensajes dedicados, perfectos para regalos especiales como el Día del Padre, cumpleaños o eventos.",
    image_url: "/images/assets/Llavero-personalizado-dia-del-padre.webp",
    is_active: true
  },
  {
    name: "Joyero Personalizado",
    category: "Especiales",
    price: 30.00,
    description: "Un elegante y práctico joyero de viaje personalizado con tu inicial y nombre en acabados metalizados. Su interior acolchado de terciopelo mantiene tus joyas organizadas, seguras y protegidas allá donde vayas.",
    image_url: "/images/assets/Joyero-personalizado.webp",
    is_active: true
  },
  {
    name: "Percha de Comunión",
    category: "Comuniones",
    price: 15.00,
    description: "El complemento ideal para colgar el traje o vestido de su Primera Comunión. Una percha de madera lacada en blanco, decorada con un lazo delicado y personalizada artesanalmente con su nombre para conservar un recuerdo inolvidable de ese día.",
    image_url: "/images/assets/Percha-personalizada-comunión.webp",
    is_active: true
  },
  {
    name: "Bolas de Navidad",
    category: "Temporada",
    price: 15.00,
    description: "Añade magia y personalización a tu árbol con estas hermosas bolas navideñas transparentes rellenas de nieve o purpurina. Personalizadas con los nombres de tus seres queridos para crear una decoración única.",
    image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp",
    is_active: true
  },
  {
    name: "Peine Personalizado",
    category: "Cuidado",
    price: 15.00,
    description: "Un pack de aseo ideal y tierno que incluye un peine y un cepillo de madera natural grabados, acompañados de una bolsita de tela personalizada a juego. Suave con el cabello y perfecto como detalle de nacimiento o cuidado infantil.",
    image_url: "/images/assets/Peine-personalizado.webp",
    is_active: true
  }
]

export async function seedProducts() {
  const supabase = await createClient()
  
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { success: false, error: 'Acceso no autorizado. Por favor inicie sesión.' }
  }

  const { error } = await supabase
    .from('products')
    .insert(initialProducts)

  if (error) {
    console.error('Error seeding products:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/catalog')
  revalidatePath('/productos')
  return { success: true }
}

export async function saveProduct(productData: {
  id?: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image_url?: string;
  is_active: boolean;
}) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { success: false, error: 'Acceso no autorizado. Por favor inicie sesión.' }
  }

  if (productData.id) {
    // Update existing product
    const { error } = await supabase
      .from('products')
      .update({
        name: productData.name,
        category: productData.category,
        price: productData.price,
        description: productData.description || null,
        image_url: productData.image_url || null,
        is_active: productData.is_active
      })
      .eq('id', productData.id)

    if (error) {
      console.error('Error updating product:', error)
      return { success: false, error: error.message }
    }
  } else {
    // Insert new product
    const { error } = await supabase
      .from('products')
      .insert({
        name: productData.name,
        category: productData.category,
        price: productData.price,
        description: productData.description || null,
        image_url: productData.image_url || null,
        is_active: productData.is_active
      })

    if (error) {
      console.error('Error creating product:', error)
      return { success: false, error: error.message }
    }
  }

  revalidatePath('/admin/catalog')
  revalidatePath('/productos')
  return { success: true }
}

export async function deleteProduct(id: string) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { success: false, error: 'Acceso no autorizado. Por favor inicie sesión.' }
  }

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting product:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/catalog')
  revalidatePath('/productos')
  return { success: true }
}
