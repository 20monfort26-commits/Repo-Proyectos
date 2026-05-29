# checkpoint/README.md

## Objetivo

Este directorio sirve para guardar el estado operativo de cada sesion de trabajo y permitir continuidad real del proyecto entre equipos, correos, sesiones y entornos distintos.

## Regla obligatoria

Cada vez que se edite al menos un archivo del proyecto, se debe generar o actualizar el checkpoint vigente.

La regla minima obligatoria es:

- actualizar `checkpoint/LATEST.md`
- actualizar `checkpoint/HISTORY.md`
- reflejar pendientes y riesgos reales de la sesion

Sin estas actualizaciones, la sesion no debe considerarse cerrada.

## Que debe registrarse en un checkpoint

- Fecha y contexto de la sesion.
- Objetivo trabajado.
- Archivos modificados.
- Cambios completados.
- Cambios pendientes.
- Riesgos o bloqueos detectados.
- Validaciones realizadas.
- Siguientes pasos recomendados.

## Archivos canonicos del directorio

- `checkpoint/LATEST.md`: estado vivo y punto principal de reanudacion.
- `checkpoint/HISTORY.md`: historial resumido por fecha y sesion.
- `checkpoint/README.md`: politica, estructura y reglas del sistema.

## Formato sugerido para checkpoints adicionales

Ademas de los archivos canonicos, pueden existir checkpoints concretos por tarea o fecha, por ejemplo:

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

- Actualizar checkpoints en cada sesion con cambios de archivos, aunque el cambio sea pequeno.
- No depender de memoria local, sesiones abiertas ni identidad del equipo actual.
- No asumir que el siguiente acceso tendra el mismo correo, ordenador o configuracion global de git.
- Registrar solo contexto util, accionable y suficiente para retomar trabajo rapido.

## Contenido minimo de `LATEST.md`

- fecha de actualizacion
- objetivo de la ultima sesion
- resumen de cambios
- archivos tocados
- estado actual del proyecto
- pendientes inmediatos
- bloqueos o riesgos
- pasos concretos para continuar

## Contenido minimo de `HISTORY.md`

- fecha
- accion realizada
- archivos principales afectados
- resultado
- siguiente paso sugerido

## Casos claros para crear checkpoint

- Antes de cambiar una integracion externa.
- Antes o despues de modificar pricing, CTA o estructura de conversion.
- Cuando quede pendiente configurar formulario o Stripe.
- Cuando una sesion termine con decisiones tomadas pero no implementadas por completo.
- Siempre que se termine una sesion con ediciones, aunque sea solo documental.

## Orden de lectura para retomar

1. `checkpoint/LATEST.md`
2. `checkpoint/HISTORY.md`
3. `system.md`
4. `memory.md`
5. `README.md`
