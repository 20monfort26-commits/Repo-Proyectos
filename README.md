# Impulsa Social

Sitio web estatico para la venta de servicios de marketing digital y la gestion de campanas en redes sociales. La implementacion esta pensada para desplegarse en GitHub Pages con un flujo de CI/CD simple y rapido.

## Contenido incluido

- Pagina de inicio con propuesta de valor y planes iniciales.
- Catalogo detallado de servicios de marketing online.
- Seccion de campanas en redes sociales con casos de exito y metricas.
- Pagina de testimonios para reforzar confianza.
- Formulario de contacto para solicitar presupuestos personalizados.
- Pagina de preguntas frecuentes.
- Workflow de GitHub Actions para despliegue en GitHub Pages.

## Estructura

```text
.
|-- .github/workflows/deploy.yml
|-- assets/
|   |-- css/styles.css
|   `-- js/main.js
|-- contact.html
|-- faq.html
|-- index.html
|-- services.html
|-- social-media.html
`-- testimonials.html
```

## Ejecucion local

1. Clona el repositorio.
2. Abre la carpeta del proyecto.
3. Levanta un servidor estatico:

```bash
python3 -m http.server 8000
```

4. Abre `http://localhost:8000`.

## Configuracion del formulario y pagos

Edita `assets/js/main.js` y actualiza el objeto `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  quoteFormEndpoint: "https://tu-endpoint-seguro.example/api/contacto",
  quoteEmail: "hola@impulsasocial.es",
  stripeLinks: {
    start: "https://buy.stripe.com/...",
    growth: "https://buy.stripe.com/...",
    performance: "https://buy.stripe.com/..."
  }
};
```

- `quoteFormEndpoint`: endpoint HTTPS para enviar presupuestos desde el formulario.
- `quoteEmail`: correo usado por el fallback `mailto:` si no hay endpoint activo.
- `stripeLinks`: enlaces seguros de Stripe Payment Links para procesar reservas o pagos.

## Despliegue en GitHub Pages

1. Sube el proyecto a la rama `main`.
2. En GitHub, abre `Settings > Pages`.
3. Selecciona `GitHub Actions` como fuente de despliegue.
4. Haz push a `main`.
5. El workflow `.github/workflows/deploy.yml` publicara automaticamente el sitio.

## SSL y seguridad

- GitHub Pages sirve el sitio bajo HTTPS.
- Si usas dominio propio, activa la opcion de HTTPS en `Settings > Pages`.
- Los pagos seguros deben gestionarse desde Stripe u otra pasarela externa bajo HTTPS.
- GitHub Pages no ejecuta backend, por lo que no se deben procesar tarjetas directamente en este repositorio.

## Pruebas recomendadas

### Usabilidad

- Revisar menu movil y navegacion entre paginas.
- Verificar que las llamadas a la accion llevan al formulario o al flujo de pago esperado.
- Confirmar que el formulario muestra mensajes claros de validacion.

### Funcionalidad

- Probar todos los enlaces internos.
- Verificar el fallback por correo si `quoteFormEndpoint` esta vacio.
- Confirmar redireccion de los botones de pago cuando existan URLs reales.

### Responsive y navegadores

- Revisar 360px, 768px, 1024px y 1440px.
- Validar en Chrome, Firefox, Safari y Edge.

### Accesibilidad

- Navegar con teclado y comprobar foco visible.
- Verificar contraste, jerarquia de encabezados y etiquetas del formulario.
- Ejecutar auditorias con Lighthouse o axe DevTools.

## Mantenimiento

- Actualiza textos, precios y casos de exito cuando cambie la oferta comercial.
- Sustituye los datos de ejemplo por los datos reales del negocio.
- Mantiene activos el endpoint del formulario y los enlaces de pago para no romper conversiones.

## Continuidad entre equipos y sesiones

El proyecto incorpora un sistema de checkpoints pensado para poder continuar el trabajo desde otro ordenador, otra cuenta o una sesion nueva sin depender del contexto local anterior.

### Archivos clave

- `checkpoint/LATEST.md`: estado vigente y punto principal de reanudacion.
- `checkpoint/HISTORY.md`: historial resumido de cambios y continuidad.
- `checkpoint/README.md`: politica y reglas del sistema de checkpoints.

### Regla operativa

Cada vez que se edite al menos un archivo del proyecto, deben actualizarse los checkpoints. Como minimo:

- `checkpoint/LATEST.md`
- `checkpoint/HISTORY.md`

### Orden recomendado de lectura para retomar

1. `checkpoint/LATEST.md`
2. `checkpoint/HISTORY.md`
3. `system.md`
4. `memory.md`
5. `README.md`
