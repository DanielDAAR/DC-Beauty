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
        </div>
        <div>
          <div class="footer-title">Explorar</div>
          <ul class="footer-links">
            <li><a class="footer-link" href="catalogo.html">Catálogo</a></li>
            <li><a class="footer-link" href="calculadora.html">Calculadora</a></li>
            <li><a class="footer-link" href="agendar.html">Agendar</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Estudio</div>
          <ul class="footer-links">
            <li><span class="footer-link">Lun–Sáb 9:00–19:00</span></li>
            <li><span class="footer-link">Dom cerrado</span></li>
            <li><span class="footer-link">CDMX · Roma Norte</span></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Contacto</div>
          <div class="footer-contact-item">📱 WhatsApp: 55 1234 5678</div>
          <div class="footer-contact-item">✉️ hola@nails.studio</div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Nails Studio — Hecho con detalle.</span>
        <span class="text-muted">Precios en MXN · IVA incluido</span>
      </div>
    </div>
  </footer>`;
}
