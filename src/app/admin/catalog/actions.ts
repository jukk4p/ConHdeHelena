'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

const initialProducts = [
  {
    name: "Pack Nacimiento Básico",
    category: "Nacimiento",
    price: 9.00,
    description: "Un pack de nacimiento tierno y artesanal para dar la bienvenida a los más pequeños. Incluye perchas de madera y un peine personalizados con el nombre del bebé, junto con una bolsita de tela a juego. Un recuerdo único hecho con cariño en nuestro taller.",
    image_url: "/images/assets/Pack-nacimiento-basico.webp",
    is_active: true
  },
  {
    name: "Pack Nacimiento Premium",
    category: "Nacimiento",
    price: 12.00,
    description: "La versión más completa para celebrar un nacimiento inolvidable. Incluye perchas de madera con lazo, una bolsita de tela personalizada con el nombre del bebé y una caja guarda-cordón umbilical de madera. Materiales naturales y acabado artesanal de alta calidad.",
    image_url: "/images/assets/Pack-nacimiento-premium.webp",
    is_active: true
  },
  {
    name: "Bolas de Navidad",
    category: "Temporada",
    price: 10.00,
    description: "Añade magia y personalización a tu árbol con estas hermosas bolas navideñas transparentes rellenas de nieve o purpurina. Personalizadas con los nombres de tus seres queridos para crear una decoración única.",
    image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp",
    is_active: true
  },
  {
    name: "Joyero de Viaje",
    category: "Especiales",
    price: 0,
    description: "Joyero de viaje personalizado con tu inicial y nombre en acabados dorados, a juego con un llavero porta pinta labios con espejo. Compacto y práctico, perfecto para llevar tus joyas y esenciales allá donde vayas.",
    image_url: "/images/assets/Joyero-de-viaje-personalizado.webp",
    is_active: true
  },
  {
    name: "Espejo Personalizado",
    category: "Eventos",
    price: 0,
    description: "Un detalle único que hace de tu evento un momento inolvidable. Espejo decorativo totalmente personalizable con nombre, fecha y mensaje, ideal para bodas, bautizos, comuniones y cumpleaños.",
    image_url: "/images/assets/Espejo-personalizado-para-eventos.webp",
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
