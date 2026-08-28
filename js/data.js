import { getSupabase } from './supabase.js';
import { isSupabaseConfigured } from './config.js';

// ---- Mock data fallback (cuando Supabase no está configurado) ----
export const MOCK_MATERIALS = [
  { id:'t1', nombre:'Gel semipermanente', precio_base:350, categoria:'tecnica' },
  { id:'t2', nombre:'Acrílico', precio_base:450, categoria:'tecnica' },
  { id:'t3', nombre:'Soft Gel', precio_base:500, categoria:'tecnica' },
  { id:'t4', nombre:'Polygel', precio_base:480, categoria:'tecnica' },

  { id:'c1', nombre:'Rojo Laca', color_hex:'#9B2542', precio_base:0, categoria:'color' },
  { id:'c2', nombre:'Nude Rosé', color_hex:'#D8B4A0', precio_base:0, categoria:'color' },
  { id:'c3', nombre:'Blanco Leche', color_hex:'#F5F5F0', precio_base:0, categoria:'color' },
  { id:'c4', nombre:'Negro Azabache', color_hex:'#1A1A1A', precio_base:30, categoria:'color' },
  { id:'c5', nombre:'Rosa Pastel', color_hex:'#E8A0BF', precio_base:0, categoria:'color' },
  { id:'c6', nombre:'Verde Sage', color_hex:'#9CAF88', precio_base:40, categoria:'color' },
  { id:'c7', nombre:'Lila Lavanda', color_hex:'#B8A9C9', precio_base:40, categoria:'color' },
  { id:'c8', nombre:'Dorado Champagne', color_hex:'#C9A86A', precio_base:60, categoria:'color' },

  { id:'e1', nombre:'Efecto aurora', precio_base:80, categoria:'extra' },
  { id:'e2', nombre:'Pedrería', precio_base:120, categoria:'extra' },
  { id:'e3', nombre:'Francesa', precio_base:60, categoria:'extra' },
  { id:'e4', nombre:'Matte', precio_base:40, categoria:'extra' },
  { id:'e5', nombre:'Encapsulado', precio_base:100, categoria:'extra' },

  { id:'l1', nombre:'Cortas', precio_base:0, categoria:'largo' },
  { id:'l2', nombre:'Medianas', precio_base:50, categoria:'largo' },
  { id:'l3', nombre:'Largas', precio_base:100, categoria:'largo' },
  { id:'l4', nombre:'XL', precio_base:150, categoria:'largo' },
];

export const MOCK_CATALOG = [
  { id:'1', nombre:'Rouge Classique', imagen_url:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', tecnica:'Gel semipermanente', color:'Rojo Laca', precio_desde:380, activo:true, ocasion:'fiesta', tags:['clásico','elegante'] },
  { id:'2', nombre:'Milky French', imagen_url:'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80', tecnica:'Soft Gel', color:'Blanco Leche', precio_desde:450, activo:true, ocasion:'diario', tags:['minimal'] },
  { id:'3', nombre:'Sage Minimal', imagen_url:'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80', tecnica:'Acrílico', color:'Verde Sage', precio_desde:480, activo:true, ocasion:'diario', tags:['minimal'] },
  { id:'4', nombre:'Champagne Gold', imagen_url:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', tecnica:'Polygel', color:'Dorado Champagne', precio_desde:520, activo:true, ocasion:'novia', tags:['fiesta'] },
  { id:'5', nombre:'Nude Rosé Gloss', imagen_url:'https://images.unsplash.com/photo-1632345031435-8727f21d122f?w=600&q=80', tecnica:'Gel semipermanente', color:'Nude Rosé', precio_desde:350, activo:true, ocasion:'oficina', tags:['natural'] },
  { id:'6', nombre:'Midnight Black', imagen_url:'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', tecnica:'Acrílico', color:'Negro Azabache', precio_desde:470, activo:true, ocasion:'fiesta', tags:['dramático'] },
  { id:'7', nombre:'Lavanda Dream', imagen_url:'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80', tecnica:'Soft Gel', color:'Lila Lavanda', precio_desde:490, activo:true, ocasion:'diario', tags:['pastel'] },
  { id:'8', nombre:'Pink Aurora', imagen_url:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', tecnica:'Gel semipermanente', color:'Rosa Pastel', precio_desde:430, activo:true, ocasion:'fiesta', tags:['aurora'] },
];

export let MOCK_APPOINTMENTS = [
  { id:'a1', nombre_cliente:'Sofía R.', telefono:'5512345678', fecha: new Date().toISOString().split('T')[0], hora:'10:00', servicio:'Gel semipermanente · Rojo Laca · Medianas', precio_total:400, estado:'confirmada', notas:'' },
  { id:'a2', nombre_cliente:'Valentina M.', telefono:'5523456789', fecha: new Date().toISOString().split('T')[0], hora:'14:00', servicio:'Soft Gel · Nude Rosé · Largas', precio_total:600, estado:'confirmada', notas:'Francesa' },
];

export let MOCK_BLOCKED = [
  // { fecha: '2026-08-29', hora_inicio:'12:00', hora_fin:'14:00', motivo:'Comida' }
];

// ---- Unified fetchers ----
export async function fetchMaterials() {
  if (!isSupabaseConfigured()) return MOCK_MATERIALS;
  const sb = await getSupabase();
  const { data, error } = await sb.from('materials').select('*');
  if (error || !data?.length) return MOCK_MATERIALS;
  return data;
}

export async function fetchCatalog() {
  if (!isSupabaseConfigured()) return MOCK_CATALOG.filter(c=>c.activo);
  const sb = await getSupabase();
  const { data, error } = await sb.from('catalog_items').select('*').eq('activo', true);
  if (error || !data?.length) return MOCK_CATALOG.filter(c=>c.activo);
  return data;
}

export async function fetchAppointments(fecha = null) {
  if (!isSupabaseConfigured()) {
    return fecha ? MOCK_APPOINTMENTS.filter(a=>a.fecha===fecha) : MOCK_APPOINTMENTS;
  }
  const sb = await getSupabase();
  let q = sb.from('appointments').select('*').order('hora');
  if (fecha) q = q.eq('fecha', fecha);
  const { data } = await q;
  return data || [];
}

export async function fetchBlockedSlots(fecha = null) {
  if (!isSupabaseConfigured()) return fecha ? MOCK_BLOCKED.filter(b=>b.fecha===fecha) : MOCK_BLOCKED;
  const sb = await getSupabase();
  let q = sb.from('blocked_slots').select('*');
  if (fecha) q = q.eq('fecha', fecha);
  const { data } = await q;
  return data || [];
}

export async function createAppointment(payload) {
  if (!isSupabaseConfigured()) {
    // simulate conflict check
    const exists = MOCK_APPOINTMENTS.find(a=>a.fecha===payload.fecha && a.hora===payload.hora && a.estado==='confirmada');
    if (exists) throw new Error('Horario ya tomado. Elige otro.');
    const rec = { id: 'a'+Date.now(), ...payload, estado:'confirmada' };
    MOCK_APPOINTMENTS.push(rec);
    return rec;
  }
  const sb = await getSupabase();
  // check conflict
  const { data: existing } = await sb.from('appointments').select('id').eq('fecha', payload.fecha).eq('hora', payload.hora).eq('estado','confirmada');
  if (existing?.length) throw new Error('Ese horario acaba de ser tomado. Por favor elige otro.');
  const { data, error } = await sb.from('appointments').insert(payload).select().single();
  if (error) throw error;
  return data;
}

export async function updateAppointmentStatus(id, estado) {
  if (!isSupabaseConfigured()) {
    const a = MOCK_APPOINTMENTS.find(x=>x.id===id);
    if (a) a.estado = estado;
    return a;
  }
  const sb = await getSupabase();
  const { data, error } = await sb.from('appointments').update({ estado }).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

export async function upsertBlockedSlot(slot) {
  if (!isSupabaseConfigured()) { MOCK_BLOCKED.push({ id: 'b'+Date.now(), ...slot }); return; }
  const sb = await getSupabase();
  const { error } = await sb.from('blocked_slots').insert(slot);
  if (error) throw error;
}
