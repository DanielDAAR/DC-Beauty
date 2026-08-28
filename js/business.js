export const BUSINESS = {
  name: "Estudio Nails",
  currency: "MXN"
};

export const TECHNIQUES = [
  { id: "acrilico", name: "Acrílico", pricing_type: "length", description: "Acrílico con 1 tono liso", icon: "💅" },
  { id: "bano_acrilico", name: "Baño de acrílico", pricing_type: "unknown", icon: "✨" },
  { id: "gel_semipermanente_manos", name: "Gel semipermanente manos", pricing_type: "unknown", icon: "🤲" },
  { id: "pies_gel", name: "Pies gel", pricing_type: "unknown", icon: "🦶" },
  { id: "acripie", name: "Acripie", pricing_type: "unknown", icon: "🦶✨" },
];

export const LENGTHS = [
  { id: "mini", name: "Mini", sub: "ras del dedo", price: 240 },
  { id: "largo_1", name: "1", sub: "corto", price: 250 },
  { id: "largo_2", name: "2", sub: "", price: 280 },
  { id: "largo_3", name: "3", sub: "", price: 310 },
  { id: "largo_4", name: "4", sub: "mediano", price: 345 },
  { id: "largo_5", name: "5", sub: "", price: 380 },
  { id: "largo_6", name: "6", sub: "largo", price: 420 },
  { id: "largo_7", name: "7", sub: "", price: 460 },
  { id: "largo_8", name: "8", sub: "", price: 500 },
  { id: "largo_9", name: "9", sub: "XL", price: 540 },
  { id: "largo_10", name: "10", sub: "", price: 580 },
  { id: "largo_11", name: "11", sub: "XXL", price: 620 },
];

export const DECORATIONS = [
  { id: "espejo", name: "Espejo", price: 5, unit: "par" },
  { id: "aurora", name: "Aurora", price: 5, unit: "par" },
  { id: "azucar", name: "Azúcar", price: 5, unit: "par" },
  { id: "sueter", name: "Suéter", price: 10, unit: "par" },
  { id: "blooming", name: "Blooming", price: 5, unit: "par" },
  { id: "ojo_de_gato", name: "Ojo de gato", price: 5, unit: "par" },
  { id: "relieve", name: "Relieve", price: 10, unit: "par" },
  { id: "flores_3d", name: "3D flores", price: 15, unit: "par" },
  { id: "frances", name: "Francés", price: 5, unit: "par" },
  { id: "nail_art_simple", name: "Nail art simple", price: 5, unit: "par" },
  { id: "nail_art_complicado", name: "Nail art complicado", price: 10, unit: "par" },
  { id: "encapsulado", name: "Encapsulado", price: 10, unit: "par" },
  { id: "dijes_monos", name: "Dijes o moños", price: 15, unit: "par" },
  { id: "sticker", name: "Sticker", price: 5, unit: "par" },
  { id: "baby_boomer", name: "Baby boomer", price: 10, unit: "par" },
  { id: "cristal_redondo", name: "Cristal redondo", price: 1, unit: "cristal", hint: "$1 c/u" },
  { id: "cristal_figura_chico", name: "Cristal figura chico", price: 5, unit: "par" },
  { id: "cristal_figura_grande", name: "Cristal figura grande", price: 7, unit: "par" },
];

export const EXTRA_TONE = { id: "additional_tone", name: "Tono extra", price: 5, unit: "unidad" };

export const ADDITIONAL_SERVICES = [
  { id: "retoque", name: "Retoque", price: -30, hint: "15–22 días", desc: "Descuento" },
  { id: "cambio_forma_retoque", name: "Cambio de forma en retoque", price: 30 },
  { id: "retiro_propio", name: "Retiro trabajo mío", price: 100 },
  { id: "retiro_externo", name: "Retiro acrílico fuera", price: 150 },
];

export const REPLACEMENTS = [
  { id: "ch", name: "Reposición Ch", range: "1–3 uñas", price: 25 },
  { id: "m", name: "Reposición M", range: "4–6 uñas", price: 35 },
  { id: "g", name: "Reposición G", range: "7–9 uñas", price: 45 },
];

export function calcAcrilicoTotal({ lengthId, decorations, toneCount, services, replacements }) {
  const base = LENGTHS.find(l => l.id === lengthId)?.price || 0;
  let total = base;
  const breakdown = [];
  if (base) breakdown.push({ label: `Acrílico · ${LENGTHS.find(l=>l.id===lengthId)?.name}`, value: base });
  decorations.forEach(d => {
    const def = DECORATIONS.find(x=>x.id===d.id);
    if (!def) return;
    const qty = d.qty || 1;
    const line = def.price * qty;
    total += line;
    breakdown.push({ label: `${def.name} ×${qty} ${def.unit}`, value: line });
  });
  if (toneCount > 0) {
    const line = EXTRA_TONE.price * toneCount;
    total += line;
    breakdown.push({ label: `Tono extra ×${toneCount}`, value: line });
  }
  services.forEach(sId => {
    const s = ADDITIONAL_SERVICES.find(x=>x.id===sId);
    if (!s) return;
    total += s.price;
    breakdown.push({ label: s.name + (s.hint?` (${s.hint})`:''), value: s.price });
  });
  replacements.forEach(r => {
    const def = REPLACEMENTS.find(x=>x.id===r.id);
    if (!def) return;
    const line = def.price * (r.qty||1);
    total += line;
    breakdown.push({ label: `${def.name} ×${r.qty} (${def.range})`, value: line });
  });
  // cristal redondo es por unidad, si se cuenta como qty de cristales
  return { total: Math.max(0, total), breakdown, base };
}
