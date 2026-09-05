const SUPABASE_URL = "https://cbvkjvznhuhhtcspsytk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gl1JKUMIpSgcDWWkvdzxoA_DE4FstSb";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
