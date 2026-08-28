export const CONFIG = {
  supabaseUrl: localStorage.getItem('supabase_url') || '',
  supabaseKey: localStorage.getItem('supabase_key') || '',
  whatsappNumber: '523318906464',
  businessName: 'Estudio Nails',
  businessHours: { start: 9, end: 19, slotMinutes: 60 },
  currency: 'MXN'
};

export const isSupabaseConfigured = () => Boolean(CONFIG.supabaseUrl && CONFIG.supabaseKey);

export function saveSupabaseConfig(url, key) {
  localStorage.setItem('supabase_url', url);
  localStorage.setItem('supabase_key', key);
  location.reload();
}
