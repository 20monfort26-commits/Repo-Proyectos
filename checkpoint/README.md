# checkpoint/README.md

## Objetivo

Este directorio sirve para guardar el estado operativo de una sesion de trabajo cuando sea necesario pausar, traspasar contexto o retomar cambios pendientes.

## Que debe registrarse en un checkpoint

- Fecha y contexto de la sesion.
- Objetivo trabajado.
- Archivos modificados.
- Cambios completados.
- Cambios pendientes.
- Riesgos o bloqueos detectados.
- Validaciones realizadas.
- Siguientes pasos recomendados.

## Formato sugerido

Cada checkpoint puede guardarse como un archivo Markdown dentro de este directorio, por ejemplo:

```text
checkpoint/
  2026-05-29-home-copy.md
  2026-05-29-integracion-formulario.md
```

## Plantilla recomendada

```md
# Checkpoint - AAAA-MM-DD - tema

## Objetivo

Descripcion corta del trabajo realizado.

## Archivos tocados

- ruta/al/archivo

## Hecho

- Cambio completado 1
- Cambio completado 2

## Pendiente

- Tarea pendiente 1
- Tarea pendiente 2

## Riesgos o notas

- Nota importante

## Validacion

- Diagnosticos revisados
- Pruebas manuales realizadas

## Siguiente paso

- Accion recomendada para continuar
```

## Estado base actual del proyecto

En el momento de crear este documento, el proyecto dispone de:

- Home comercial en `index.html`
- Catalogo de servicios en `services.html`
- Casos y campanas en `social-media.html`
- Testimonios en `testimonials.html`
- FAQ en `faq.html`
- Formulario de presupuesto en `contact.html`
- Logica compartida en `assets/js/main.js`
- Estilos globales en `assets/css/styles.css`
- Deploy en `.github/workflows/deploy.yml`

## Politica de guardado

- Crear checkpoint solo cuando el cambio sea relevante o quede incompleto.
- No duplicar informacion ya estable en `README.md`, `system.md` o `memory.md`.
- Registrar solo contexto util para retomar trabajo sin releer toda la base del proyecto.

## Casos claros para crear checkpoint

- Antes de cambiar una integracion externa.
- Antes o despues de modificar pricing, CTA o estructura de conversion.
- Cuando quede pendiente configurar formulario o Stripe.
- Cuando una sesion termine con decisiones tomadas pero no implementadas por completo.
