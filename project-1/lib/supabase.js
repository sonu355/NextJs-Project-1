
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
//console.log(supabaseUrl)
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//console.log(supabaseKey)
//export const supabase = createClient(supabaseUrl, supabaseKey)

  export const supabase = createClient(supabaseUrl, supabaseKey);
