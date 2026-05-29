# memory.md

## Memoria persistente del proyecto

Este documento recoge los hechos estables y el contexto que deben preservarse entre sesiones de trabajo.

## Identidad del proyecto

- Nombre de marca: `Impulsa Social`
- Tipo de producto: sitio web estatico comercial
- Vertical: marketing digital y gestion de campanas en redes sociales
- Objetivo principal: captacion de leads y solicitudes de presupuesto
- Objetivo secundario: facilitar pagos de reserva mediante enlaces seguros externos

## Arquitectura actual

- Stack:
  - HTML
  - CSS
  - JavaScript vanilla
- No hay framework frontend ni bundler.
- No hay backend propio en este repositorio.
- El despliegue previsto es GitHub Pages con workflow en `.github/workflows/deploy.yml`.

## Estructura funcional

- `index.html`: home, propuesta de valor, servicios destacados, pricing y CTA.
- `services.html`: catalogo detallado de servicios.
- `social-media.html`: campanas en redes sociales y casos de exito.
- `testimonials.html`: prueba social y testimonios.
- `contact.html`: formulario de presupuesto y vias de contacto.
- `faq.html`: preguntas frecuentes.
- `404.html`: pagina de error.
- `assets/css/styles.css`: sistema visual compartido.
- `assets/js/main.js`: logica de navegacion, pagos y formulario.

## Decisiones ya tomadas

- Se eligio un enfoque estatico para asegurar rapidez, sencillez y compatibilidad con GitHub Pages.
- El formulario usa fallback a `mailto:` si no existe endpoint externo.
- Los botones de pago redirigen al formulario si no hay enlaces de Stripe configurados.
- La web prioriza mensajes de conversion, confianza y resultados medibles.

## Requisitos pendientes recurrentes

- Configurar un `quoteFormEndpoint` real.
- Configurar `stripeLinks` reales.
- Sustituir email y telefono de ejemplo si cambian los datos finales del negocio.
- Validar el sitio final con Lighthouse y pruebas cruzadas en navegadores.

## Riesgos conocidos

- Sin endpoint externo, el formulario no envia datos a un sistema centralizado.
- Sin enlaces de pago reales, la compra no queda completada y se deriva a contacto.
- Al no existir backend, no debe añadirse logica sensible ni tratamiento directo de tarjetas.

## Criterios para futuras sesiones

- Cualquier nueva pagina debe mantener la misma navegacion y estilo base.
- Cualquier integracion nueva debe documentarse en `README.md` y, si afecta continuidad, tambien en `checkpoint/README.md`.
- Si se modifica la oferta comercial, revisar home, servicios, FAQ y contacto en la misma sesion.
