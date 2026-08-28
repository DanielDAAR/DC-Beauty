export function renderFooter() {
  const el = document.querySelector('[data-footer]');
  if (!el) return;
  el.innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">Nails<span>.</span> Studio</div>
          <p class="footer-description">Uñas con acabado de salón, diseño a tu medida y agenda sin fricción. Reserva en 30 segundos y confirma por WhatsApp.</p>
          <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4)">
            <a href="https://www.instagram.com/dc_beauty_04/" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram dc_beauty_04">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://wa.me/523318906464" target="_blank" rel="noopener" class="footer-social-link" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5a8.5 8.5 0 0 1 15.5-4.5z"/><path d="M8 11c1 2 3 4 5 5l1.5-1.5c.3-.3.7-.3 1 0l1.5 1.5c.3.3.3.7 0 1l-1 1c-.3.3-.7.4-1.1.3A11 11 0 0 1 8 8c-.1-.4 0-.8.3-1.1l1-1c.3-.3.7-.3 1 0l1.5 1.5c.3.3.3.7 0 1L10 10c.5 1 1 2 2 2z"/></svg>
            </a>
            <a href="https://maps.app.goo.gl/qezCBA5QgCTCMi9F9" target="_blank" rel="noopener" class="footer-social-link" aria-label="Google Maps">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div class="footer-title">Explorar</div>
          <ul class="footer-links">
            <li><a class="footer-link" href="catalogo.html">Catálogo</a></li>
            <li><a class="footer-link" href="calculadora.html">Calculadora</a></li>
            <li><a class="footer-link" href="agendar.html">Agendar</a></li>
            <li><a class="footer-link" href="https://www.instagram.com/dc_beauty_04/" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Visítanos</div>
          <ul class="footer-links">
            <li><span class="footer-link">Lun–Sáb 9:00–19:00</span></li>
            <li><span class="footer-link">Dom cerrado</span></li>
            <li><a class="footer-link" href="https://maps.app.goo.gl/qezCBA5QgCTCMi9F9" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg> Ver en Google Maps</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Contacto</div>
          <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.1 12.6 19.79 19.79 0 0 1 2 4 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 33 1890 6464</div>
          <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> <a href="https://www.instagram.com/dc_beauty_04/" target="_blank" rel="noopener" style="color:inherit">@dc_beauty_04</a></div>
          <div class="footer-contact-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> hola@nails.studio</div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Nails Studio — Hecho con detalle.</span>
        <span class="text-muted">Precios en MXN · <a href="https://www.instagram.com/dc_beauty_04/" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">Instagram</a> · <a href="https://maps.app.goo.gl/qezCBA5QgCTCMi9F9" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">Maps</a></span>
      </div>
    </div>
  </footer>`;
}
