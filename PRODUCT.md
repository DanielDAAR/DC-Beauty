# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS vanilla, Supabase (mmudnovppooktfegmiii), Netlify (dc-beauty.netlify.app) — sin build, sin framework

## Users

Clienta variada — todas edades en Cihuatlán y alrededores, con necesidades distintas: acrílico con largo, baño acrílico, gel manos, pies gel y acripie, retoques y reposiciones. Quiere ver diseños reales, comparar largos sin conocer vocabulario profesional, saber precio cerrado antes de reservar y confirmar por WhatsApp sin fricción.

## Product Purpose

Sitio que convierte exploración en reserva: catálogo real de 35 diseños, calculadora por tarifario (Mini $240 → 11 $620 + decoración por par) y agenda con disponibilidad y WhatsApp (33 1890 6464). Éxito = clienta sabe qué elegir sin pensar demasiado y reserva con precio cerrado.

## Positioning

Diseños adaptados a la persona, no al catálogo — cada largo y decoración se personaliza y se ve antes de pagar. Mecanismo diferente: visualizador de largos + descomposición de precio por par, no “desde $” genérico.

## Operating Context

Flujo: inspiración → calculadora → agenda → wa.me prellenado → Supabase. Horario Lun–Sáb 9:00–19:00, Dom cerrado. Ubicación Emiliano Zapata 82, Centro, 48970 Cihuatlán, Jal. (maps.app.goo.gl/h1KLs9VuexWTUZNF9). Instagram @dc_beauty_04 como prueba social.

## Capabilities and Constraints

Capacidades: catálogo filtrable, calculadora con 5 técnicas y 18 decoraciones, agenda con bloqueo de horarios y conflicto, panel admin con CRUD y bloqueos. Restricciones: sin app nativa, sin WhatsApp Business API de pago, sin build step, fotos reales en /fotos y Supabase Storage futuro.

## Brand Commitments

Nombre DC Beauty, logo DC circular beige (assets/logo/logo.jpg), paleta #FFFFFF/#1D1D1F/#F5F5F7/#9B2542, tipografía Inter + JetBrains Mono para precios, estilo Apple con blur 20px y bottom-tab nativo. Voz directa y sin jerga.

## Evidence on Hand

35 diseños con fotos reales en /fotos (15 propias) + Unsplash para completar largos, tarifario validado, Supabase con RLS y datos semilla, deploy Netlify dc-beauty.netlify.app, Instagram 15 fotos, WhatsApp 523318906464.

## Product Principles

1. No obligues a entender el sistema — el precio y el largo se entienden visualmente.
2. Confianza antes que estética — fotos reales, precio desglosado, disponibilidad honesta.
3. Móvil primero nativo — 44px hit-target, bottom-tab, carrusel snap y bottom-sheet.

## Accessibility & Inclusion

Optimizado para móvil con Dynamic Type, prefers-reduced-motion y prefers-reduced-transparency. A11y: focus visible, bottom-nav + nav con aria-label, contraste AA.
