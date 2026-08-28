import { CONFIG, isSupabaseConfigured } from './config.js';

let supabase = null;

export async function getSupabase() {
  if (supabase) return supabase;
  if (!isSupabaseConfigured()) return null;
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
  supabase = createClient(CONFIG.supabaseUrl, CONFIG.supabaseKey);
  return supabase;
}

export async function supabaseFetch(table, query = {}) {
  const client = await getSupabase();
  if (!client) return { data: null, error: { message: 'Supabase no configurado' } };
  let q = client.from(table).select('*');
  Object.entries(query).forEach(([k, v]) => { q = q.eq(k, v); });
  return q;
}
