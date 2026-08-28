let container;
function ensure() {
  if (container) return container;
  container = document.createElement('div');
  container.className = 'toast-container';
  container.setAttribute('aria-live','polite');
  document.body.appendChild(container);
  return container;
}
export function toast(message, type='info', ms=3500) {
  const c = ensure();
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-message">${message}</span><button class="toast-close" aria-label="Cerrar">×</button>`;
  el.querySelector('.toast-close').onclick = () => el.remove();
  c.appendChild(el);
  setTimeout(()=> { el.style.opacity='0'; el.style.transform='translateX(20px)'; setTimeout(()=>el.remove(),300); }, ms);
}
