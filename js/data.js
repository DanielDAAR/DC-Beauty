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
  { id:'1', nombre:'Almendra Pastel con Glitter - Coral Celeste y Nude', imagen_url:'/fotos/SaveClip.App_491036120_18010025165732768_399971174939827291_n.jpg', tecnica:'Acrílico', color:'Multicolor Pastel', precio_desde:280, activo:true, ocasion:'fiesta', tags:['almendra','glitter'] },
  { id:'2', nombre:'Rojo Glitter Intenso - Cover Total', imagen_url:'/fotos/rojo-glitter-intenso.jpg', tecnica:'Acrílico', color:'Rojo Glitter', precio_desde:310, activo:true, ocasion:'fiesta', tags:['cuadrado','brillo'] },
  { id:'3', nombre:'Estrellas Rojas - Francesa con Estrella', imagen_url:'/fotos/SaveClip.App_491461922_18010025189732768_7860489324175486795_n.jpg', tecnica:'Acrílico', color:'Rojo + Nude', precio_desde:345, activo:true, ocasion:'fiesta', tags:['estrella','francesa'] },
  { id:'4', nombre:'Francesa Roja Diagonal - Glitter y Nude', imagen_url:'/fotos/francesa-diagonal.jpg', tecnica:'Acrílico', color:'Rojo Glitter + Nude', precio_desde:345, activo:true, ocasion:'elegante', tags:['francesa','almendra'] },
  { id:'5', nombre:'Francesa Roja con Animal Print — Cuadrada larga', imagen_url:'/fotos/SaveClip.App_557411869_18029138180732768_6379074342769458672_n.jpg', tecnica:'Acrílico', color:'Nude + Rojo + Leopardo', precio_desde:345, activo:true, ocasion:'fiesta', tags:['francesa','animal'] },
  { id:'6', nombre:'Almendra Roja con Moño — Glitter y Francesa', imagen_url:'/fotos/SaveClip.App_607693935_18038861234732768_6481186387095933816_n.jpg', tecnica:'Acrílico', color:'Rojo Glitter + Nude', precio_desde:380, activo:true, ocasion:'fiesta', tags:['moño','francesa'] },
  { id:'7', nombre:'Cuadrada Azul Rey con Nude y Marmol', imagen_url:'/fotos/SaveClip.App_623961014_18070206995537587_6619139069923772693_n.jpg', tecnica:'Acrílico', color:'Azul Rey + Nude', precio_desde:345, activo:true, ocasion:'fiesta', tags:['azul','cuadrada'] },
  { id:'8', nombre:'Almendra Vino Tinto — Larga brillante', imagen_url:'/fotos/SaveClip.App_655252719_18048974927732768_2187907988791205266_n.jpg', tecnica:'Acrílico', color:'Vino Tinto', precio_desde:380, activo:true, ocasion:'elegante', tags:['almendra','vino'] },
  { id:'9', nombre:'Cuadrada Corta Nude Natural', imagen_url:'/fotos/SaveClip.App_727465684_18061761638732768_1475725806477374729_n.jpg', tecnica:'Acrílico', color:'Nude Claro', precio_desde:345, activo:true, ocasion:'diario', tags:['cuadrada','natural'] },
  { id:'10', nombre:'Almendra Artistica Azul y Durazno con Estrellas', imagen_url:'/fotos/SaveClip.App_731624290_18063737174732768_5275067276058840589_n.jpg', tecnica:'Acrílico', color:'Azul y Durazno', precio_desde:420, activo:true, ocasion:'fiesta', tags:['estrella','cristal'] },
  { id:'11', nombre:'Almendra Azul con Cristales y Lineas', imagen_url:'/fotos/SaveClip.App_732493920_18063196220732768_3189548422477645567_n.jpg', tecnica:'Acrílico', color:'Azul', precio_desde:380, activo:true, ocasion:'fiesta', tags:['cristal','azul'] },
  { id:'12', nombre:'Cuadrada Nude con Flores 3D Blancas', imagen_url:'/fotos/SaveClip.App_734917949_18063196211732768_3756226628483569746_n.jpg', tecnica:'Acrílico', color:'Nude + Blanco', precio_desde:420, activo:true, ocasion:'fiesta', tags:['flores_3d'] },
  { id:'13', nombre:'Almendra Nude con Flores 3D Pequeñas', imagen_url:'/fotos/SaveClip.App_754375945_18066931859732768_2870214223150948015_n.jpg', tecnica:'Acrílico', color:'Nude + Blanco', precio_desde:420, activo:true, ocasion:'novia', tags:['flores_3d'] },
  { id:'14', nombre:'Cuadrada Corta Rosa Nude', imagen_url:'/fotos/SaveClip.App_769363709_18069408482732768_767796136565071858_n.jpg', tecnica:'Gel semipermanente manos', color:'Rosa Nude', precio_desde:260, activo:true, ocasion:'oficina', tags:['natural'] },
  { id:'15', nombre:'Cuadrada Corta Nude con Brillo', imagen_url:'/fotos/SaveClip.App_774099431_18070398701732768_4180774078587959586_n.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:345, activo:true, ocasion:'diario', tags:['cuadrada'] },
  // --- Modelos extra con fotos de internet (descripciones fieles a la foto, sin inventar) ---
  { id:'16', nombre:'Acrílico Mini Nude — Manicura corta natural', imagen_url:'/fotos/16-acrilico-mini-nude.jpg', tecnica:'Acrílico', color:'Nude Rosé', precio_desde:240, activo:true, ocasion:'diario', tags:['mini','natural'] },
  { id:'17', nombre:'Acrílico Largo 1 — Rosa pastel liso', imagen_url:'/fotos/17-acrilico-largo-1-rosa-pastel.jpg', tecnica:'Acrílico', color:'Rosa Pastel', precio_desde:250, activo:true, ocasion:'diario', tags:['largo1'] },
  { id:'18', nombre:'Acrílico Largo 2 — Almond nude clásico', imagen_url:'/fotos/18-acrilico-largo-2-almond-nude.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:280, activo:true, ocasion:'novia', tags:['almendra'] },
  { id:'19', nombre:'Acrílico Largo 3 — Manicura clara natural', imagen_url:'/fotos/19-acrilico-largo-3-nude-claro.jpg', tecnica:'Acrílico', color:'Nude Claro', precio_desde:310, activo:true, ocasion:'diario', tags:['natural'] },
  { id:'20', nombre:'Acrílico Largo 4 — Manicura nude elegante', imagen_url:'/fotos/20-acrilico-largo-4-nude-elegante.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:345, activo:true, ocasion:'elegante', tags:['elegante'] },
  { id:'21', nombre:'Acrílico Largo 5 — Manicura rosa uniforme', imagen_url:'/fotos/21-acrilico-largo-5-rosa.jpg', tecnica:'Acrílico', color:'Rosa', precio_desde:380, activo:true, ocasion:'diario', tags:['largo5'] },
  { id:'22', nombre:'Acrílico Largo 6 — Manicura nude alargada', imagen_url:'/fotos/22-acrilico-largo-6-nude.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:420, activo:true, ocasion:'diario', tags:['largo6'] },
  { id:'23', nombre:'Acrílico Largo 7 — Manicura natural alargada', imagen_url:'/fotos/23-acrilico-largo-7-natural.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:460, activo:true, ocasion:'diario', tags:['largo7'] },
  { id:'24', nombre:'Acrílico Largo 8 — Manicura oscura larga', imagen_url:'/fotos/24-acrilico-largo-8-rosa-oscuro.jpg', tecnica:'Acrílico', color:'Rosa Oscuro', precio_desde:500, activo:true, ocasion:'fiesta', tags:['largo8'] },
  { id:'25', nombre:'Acrílico Largo 9 — Manicura clara XL', imagen_url:'/fotos/25-acrilico-largo-9-xl-nude.jpg', tecnica:'Acrílico', color:'Nude Claro', precio_desde:540, activo:true, ocasion:'elegante', tags:['largo9'] },
  { id:'26', nombre:'Acrílico Largo 10 — Manicura rosa alargada', imagen_url:'/fotos/26-acrilico-largo-10-rosa.jpg', tecnica:'Acrílico', color:'Rosa', precio_desde:580, activo:true, ocasion:'fiesta', tags:['largo10'] },
  { id:'27', nombre:'Acrílico Largo 11 — Manicura nude XXL', imagen_url:'/fotos/27-acrilico-largo-11-xxl-nude.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:620, activo:true, ocasion:'fiesta', tags:['largo11'] },
  { id:'28', nombre:'Gel Manos — Esmaltado natural', imagen_url:'/fotos/28-gel-manos-nude.jpg', tecnica:'Gel semipermanente manos', color:'Nude Rosé', precio_desde:260, activo:true, ocasion:'oficina', tags:['gel'] },
  { id:'29', nombre:'Baño Acrílico — Refuerzo natural', imagen_url:'/fotos/29-bano-acrilico-natural.jpg', tecnica:'Baño de acrílico', color:'Nude Claro', precio_desde:320, activo:true, ocasion:'diario', tags:['bano'] },
  { id:'30', nombre:'Acripie — Pedicura natural', imagen_url:'/fotos/30-acripie-rosa.jpg', tecnica:'Acripie', color:'Rosa', precio_desde:300, activo:true, ocasion:'diario', tags:['pies'] },
  { id:'31', nombre:'Pies Gel — Esmaltado pies', imagen_url:'/fotos/31-pies-gel-nude.jpg', tecnica:'Pies gel', color:'Nude', precio_desde:280, activo:true, ocasion:'diario', tags:['pies'] },
  { id:'32', nombre:'Baby Boomer — Degradado sutil', imagen_url:'/fotos/32-baby-boomer.jpg', tecnica:'Acrílico', color:'Blanco Degradado', precio_desde:380, activo:true, ocasion:'novia', tags:['baby_boomer'] },
  { id:'33', nombre:'Manicura con Detalle Minimal', imagen_url:'/fotos/33-manicura-detalle-minimal.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:345, activo:true, ocasion:'diario', tags:['minimal'] },
  { id:'34', nombre:'Manicura Nude Elegante', imagen_url:'/fotos/34-manicura-nude-elegante.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:420, activo:true, ocasion:'elegante', tags:['elegante'] },
  { id:'35', nombre:'Manicura Natural Larga', imagen_url:'/fotos/35-manicura-natural-larga.jpg', tecnica:'Acrílico', color:'Nude', precio_desde:380, activo:true, ocasion:'diario', tags:['natural'] },
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
