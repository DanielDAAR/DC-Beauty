// Apple-native mobile enhancements: haptics + 1:1 press feedback + carousel momentum hint
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initMobile() {
  // Haptic on tap for primary actions (only where it earns its place)
  const haptic = (type='light') => {
    if (reducedMotion) return;
    if (!('vibrate' in navigator)) return;
    // light: 10ms, medium: 20ms, success: [10,30,10]
    const map = { light: 10, medium: 20, success: [10,30,10] };
    try { navigator.vibrate(map[type] || 10); } catch {}
  };

  document.addEventListener('click', (e) => {
    const t = e.target.closest('.bottom-nav-item, .catalog-card-btn, .deco-card, .tech-card, .filter-btn, .btn-primary');
    if (!t) return;
    // causality: vibrate on the causal frame (pointer up), harmony: same frame as visual
    if (t.classList.contains('btn-primary')) haptic('medium');
    else haptic('light');
  }, { passive: true });

  // Direct manipulation hint: active scale already in CSS, but ensure pointerdown feedback is instant
  document.addEventListener('pointerdown', (e) => {
    const card = e.target.closest('.catalog-card, .deco-card, .tech-card');
    if (card) card.style.willChange = 'transform';
  });
  document.addEventListener('pointerup', (e) => {
    const card = e.target.closest('.catalog-card, .deco-card, .tech-card');
    if (card) card.style.willChange = '';
  });

  // Bottom sheet for calculator summary on mobile: drag to expand/collapse (spring-like)
  const summary = document.querySelector('.summary');
  if (summary && window.innerWidth <= 768) {
    // Add handle if missing
    if (!summary.querySelector('.sheet-handle')) {
      const handle = document.createElement('div');
      handle.className = 'sheet-handle';
      handle.setAttribute('aria-hidden','true');
      handle.style.cssText = 'width:36px;height:5px;border-radius:999px;background:rgba(0,0,0,0.15);margin:8px auto 0;';
      summary.prepend(handle);
      // collapsed by default: show only head + CTA, lines hidden until tap
      summary.classList.add('sheet-collapsed');
      const lines = summary.querySelector('.summary-lines');
      if (lines) {
        const toggle = () => summary.classList.toggle('sheet-collapsed');
        summary.querySelector('.summary-head').style.cursor = 'pointer';
        summary.querySelector('.summary-head').addEventListener('click', toggle);
      }
    }
  }
}
