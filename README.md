# DC Beauty — Nails Studio

Sistema web para estudio de uñas: sitio público + calculadora + agenda + confirmación WhatsApp + panel admin.

## Stack
- Frontend: HTML + CSS + JS vanilla (sin build)
- Datos: Supabase (Postgres) — JS SDK vía \<script type="module">\
- Auth admin: Supabase Auth
- Estilos: CSS custom properties, diseño Apple (tokens en \css/design-system.css\)

## Estructura
\\\
/               Inicio (hero + preview 4 diseños)
/catalogo.html   Grid filtrable
/calculadora.html  Técnica ? Color (picker firma Apple) ? Largo ? Extras
/agendar.html    Calendario + formulario ? wa.me + guarda en Supabase
/admin.html      Hoy / Calendario / Catálogo CRUD / Precios / Bloqueos
\\\

## Configurar Supabase
1. Crear proyecto en supabase.com
2. SQL Editor ? pegar \data/schema.sql\
3. En \/admin\ ? Configurar Supabase (URL + anon key) o editar \js/config.js\
4. Auth ? crear usuario admin

Sin Supabase funciona en modo demo (mock en \js/data.js\), login \dmin\ / \dmin123\.

## Desarrollo local
\\\ash
python -m http.server 8000
# http://localhost:8000
\\\
No abrir con \ile://\ (módulos ES fallan).

## WhatsApp
Edita \js/config.js\ ? \whatsappNumber\ (formato 521... sin +).

## Diseño
Tokens Apple en \css/design-system.css\: \#FFFFFF\, \#1D1D1F\, \#F5F5F7\, \#9B2542\, blur 20px, pills 980px, cards 24px, JetBrains Mono para precios.
