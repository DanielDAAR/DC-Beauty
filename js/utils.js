export const $ = (s, r=document) => r.querySelector(s);
export const $$ = (s, r=document) => [...r.querySelectorAll(s)];

export function formatPrice(n) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(n);
}

export function formatDateISO(d) {
  return d.toISOString().split('T')[0];
}

export function formatDateLong(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
}

export function formatTime(h) {
  const [hh, mm] = h.split(':');
  const d = new Date(); d.setHours(+hh, +mm);
  return d.toLocaleTimeString('es-MX', { hour:'2-digit', minute:'2-digit' });
}

export function generateTimeSlots(start=9, end=19, step=60) {
  const slots = [];
  for (let h=start; h<end; h++) {
    for (let m=0; m<60; m+=step) {
      if (h*60+m >= end*60) break;
      slots.push(`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`);
    }
  }
  return slots;
}

export function buildWhatsAppLink({ nombre, fecha, hora, servicio, precio, telefonoDestino }) {
  const msg = `Hola! Quiero confirmar mi cita:\n\n`+
    `*Nombre:* ${nombre}\n`+
    `*Fecha:* ${fecha}\n`+
    `*Hora:* ${hora}\n`+
    `*Servicio:* ${servicio}\n`+
    `*Precio:* ${formatPrice(precio)}\n\n`+
    `Quedo atenta a confirmación ✨`;
  return `https://wa.me/${telefonoDestino}?text=${encodeURIComponent(msg)}`;
}

export function uid() { return Math.random().toString(36).slice(2,9); }

export function debounce(fn, ms=200) {
  let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); };
}

// simple pub/sub for calc -> agendar handoff via sessionStorage
export function saveCalcSelection(data) {
  sessionStorage.setItem('calc_selection', JSON.stringify(data));
}
export function loadCalcSelection() {
  try { return JSON.parse(sessionStorage.getItem('calc_selection')||'null'); } catch { return null; }
}
export function clearCalcSelection(){ sessionStorage.removeItem('calc_selection'); }
