'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteMessage(id: string) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { success: false, error: 'Acceso no autorizado. Por favor inicie sesión.' }
  }

  const { error } = await supabase
    .from('contact_messages')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting message:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/messages')
  return { success: true }
}

export async function markAsRead(id: string) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return { success: false, error: 'Acceso no autorizado. Por favor inicie sesión.' }
  }

  const { error } = await supabase
    .from('contact_messages')
    .update({ is_read: true })
    .eq('id', id)

  if (error) {
    console.error('Error marking message as read:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/messages')
  return { success: true }
}
