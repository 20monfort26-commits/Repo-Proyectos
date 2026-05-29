# system.md

## Proposito del proyecto

`Impulsa Social` es un sitio web estatico orientado a la venta de servicios de marketing digital y campanas en redes sociales. Su objetivo principal es convertir visitas en solicitudes de presupuesto, reservas de servicios y contactos comerciales cualificados.

## Objetivos operativos

- Presentar una marca profesional y confiable.
- Explicar con claridad la propuesta de valor y el catalogo de servicios.
- Guiar al usuario hacia la solicitud de presupuesto en `contact.html`.
- Facilitar pagos seguros mediante enlaces externos configurables.
- Mantener una base ligera, rapida y compatible con GitHub Pages.

## Alcance actual

- Sitio multipagina estatico en HTML, CSS y JavaScript sin framework.
- Paginas activas:
  - `index.html`
  - `services.html`
  - `social-media.html`
  - `testimonials.html`
  - `contact.html`
  - `faq.html`
  - `404.html`
- Despliegue automatico mediante GitHub Actions a GitHub Pages.

## Restricciones tecnicas

- No hay backend ejecutandose dentro del repositorio.
- Los formularios deben apuntar a un endpoint HTTPS externo.
- Los pagos deben resolverse con Stripe Payment Links u otra pasarela segura externa.
- El codigo debe seguir siendo simple, legible y mantenible.
- La web debe conservar buen rendimiento en movil y escritorio.

## Principios de implementacion

- Priorizar claridad comercial antes que complejidad tecnica.
- Reutilizar estilos y patrones visuales en lugar de duplicar componentes.
- Mantener estructura semantica y base accesible.
- Minimizar dependencias externas para no degradar tiempos de carga.
- Documentar cualquier nueva integracion que afecte conversion o despliegue.

## Criterios de calidad

- Navegacion coherente entre todas las paginas.
- CTA visibles y consistentes hacia contacto o pago.
- Formularios con validacion clara y fallback funcional.
- Compatibilidad con Chrome, Firefox, Safari y Edge.
- Base alineada con WCAG 2.1 en foco visible, contraste y semantica.

## Convenciones de trabajo

- Los contenidos comerciales deben mantener un tono profesional, claro y orientado a resultados.
- Los textos deben reforzar confianza, medicion, conversion y crecimiento.
- Cualquier cambio en precios, planes o servicios debe reflejarse tambien en la documentacion.
- Las integraciones externas deben configurarse desde zonas identificables y faciles de mantener.
- Cada vez que se edite cualquier archivo del proyecto, debe actualizarse al menos un checkpoint operativo en `checkpoint/`.
- El punto de reanudacion oficial del proyecto es `checkpoint/LATEST.md`.
- El historial resumido de continuidad debe mantenerse en `checkpoint/HISTORY.md`.
- La documentacion de continuidad no debe depender del equipo actual, del correo actual ni del estado de una sesion local.

## Politica de continuidad

- Toda sesion con edicion de archivos debe dejar trazabilidad suficiente para retomarse desde otro ordenador o cuenta.
- La informacion minima obligatoria a dejar actualizada es:
  - objetivo de la ultima sesion
  - archivos tocados
  - estado actual del proyecto
  - pendientes inmediatos
  - riesgos o bloqueos
  - comandos utiles para retomar
- Si un cambio afecta arquitectura, integraciones, despliegue o reglas de trabajo, tambien debe actualizarse la documentacion estructural correspondiente.

## Orden de lectura para reanudar

Para continuar el proyecto con el minimo contexto, el orden recomendado es:

1. `checkpoint/LATEST.md`
2. `checkpoint/HISTORY.md`
3. `system.md`
4. `memory.md`
5. `README.md`

## Punto central de configuracion

La configuracion operativa del frontend vive en `assets/js/main.js`, especialmente en el objeto `SITE_CONFIG`, donde se definen:

- `quoteFormEndpoint`
- `quoteEmail`
- `stripeLinks.start`
- `stripeLinks.growth`
- `stripeLinks.performance`
