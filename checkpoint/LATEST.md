# LATEST.md

## Fecha de actualizacion

- 2026-05-29

## Estado de la ultima sesion

Se ha establecido una politica obligatoria de checkpoints para que cualquier edicion futura del proyecto deje trazabilidad suficiente y pueda retomarse desde otro ordenador, otra cuenta o una sesion nueva.

## Objetivo de la ultima sesion

Convertir los checkpoints en una parte obligatoria del flujo de trabajo y definir un punto de reanudacion claro y estable.

## Cambios realizados

- Se reforzo `system.md` con reglas obligatorias de continuidad y orden de lectura para reanudar.
- Se actualizo `memory.md` para registrar que los checkpoints ya no son opcionales.
- Se actualizo `AGENTS.md` para exigir actualizacion de checkpoints en cada sesion con cambios.
- Se actualizo `checkpoint/README.md` para convertir la politica en obligatoria.
- Se creo `checkpoint/LATEST.md` como fuente principal de estado actual.
- Se creo `checkpoint/HISTORY.md` como historial resumido de sesiones.

## Archivos tocados en la ultima sesion

- `system.md`
- `memory.md`
- `AGENTS.md`
- `checkpoint/README.md`
- `checkpoint/LATEST.md`
- `checkpoint/HISTORY.md`

## Estado actual del proyecto

- El sitio web comercial `Impulsa Social` ya existe y esta publicado en el repositorio.
- La base tecnica sigue siendo estatica: HTML, CSS y JavaScript vanilla.
- El despliegue esta preparado con GitHub Pages y GitHub Actions.
- Los formularios siguen dependiendo de un endpoint HTTPS externo no configurado todavia.
- Los pagos siguen dependiendo de Stripe Payment Links no configurados todavia.
- La documentacion del proyecto ya contempla sistema, memoria, habilidades, agentes y checkpoints.

## Pendientes inmediatos

- Configurar `quoteFormEndpoint` real en `assets/js/main.js`.
- Configurar `stripeLinks.start`, `stripeLinks.growth` y `stripeLinks.performance`.
- Verificar desde GitHub que Pages use `GitHub Actions` como fuente de publicacion.
- Mantener `checkpoint/LATEST.md` y `checkpoint/HISTORY.md` actualizados en cada nueva sesion con cambios.

## Riesgos o bloqueos

- Sin endpoint real, el formulario usa solo fallback por correo.
- Sin Payment Links reales, los botones de pago redirigen al formulario.
- Si en futuras sesiones se editan archivos sin actualizar checkpoints, se rompe la continuidad que ahora se ha definido como obligatoria.

## Como continuar rapido

1. Leer este archivo completo.
2. Leer `checkpoint/HISTORY.md`.
3. Revisar `system.md` y `memory.md`.
4. Abrir `assets/js/main.js` si el objetivo es activar formulario o pagos.
5. Actualizar este archivo y `checkpoint/HISTORY.md` al final de cualquier sesion con cambios.

## Comandos utiles para retomar

```bash
git pull
python3 -m http.server 8000
```

## Regla operativa activa

Toda sesion que modifique uno o mas archivos debe dejar este archivo actualizado antes de darse por finalizada.
