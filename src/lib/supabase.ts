import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sbamioljqfmlarrocacny.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiYW1pb2xqcWZtbGFycm9hY255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NTUzMTcsImV4cCI6MjA4OTIzMTMxN30.lxOLN7EwuWBh2TMz_iOD1RHlgLSZSaHgelcVUFaVQpY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
