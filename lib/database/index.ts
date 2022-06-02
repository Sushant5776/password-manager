import { createClient } from '@supabase/supabase-js'

export const client = createClient(
  process.env.SUPABASE_DB_URL as string,
  process.env.SUPABASE_ANON as string
)
