import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let supabase: SupabaseClient | null = null

export function getSupabaseClient() {
  if (supabase) return supabase

  const url = process.env.SUPABASE_URL || process.env.SUPABASE_PROJECT_URL
  const key = process.env.SUPABASE_KEY || process.env.SUPABASE_API_KEY

  if (!url || !key) return null

  supabase = createClient(url, key)
  return supabase
}

export default getSupabaseClient
