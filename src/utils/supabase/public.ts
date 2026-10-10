import { createClient as createSupabaseClient } from '@supabase/supabase-js'

/**
 * Anon-key client with no cookie access, for public reads on
 * server-rendered pages (e.g. the product catalog). Not touching
 * cookies() keeps those routes eligible for Next's full route cache / ISR.
 */
export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
