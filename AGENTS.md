# agents.md

## Marco de agentes del proyecto

Aunque el proyecto actual es una web estatica, este documento define una organizacion conceptual de agentes para futuras iteraciones, automatizaciones o colaboracion estructurada.

## Jerarquia recomendada

### 1. Agente coordinador

#### Rol

Supervisar cambios globales y mantener coherencia entre negocio, contenido, UX, integraciones y despliegue.

#### Responsabilidades

- Priorizar tareas segun impacto en conversion.
- Evitar contradicciones entre paginas.
- Validar que los cambios respeten el enfoque estatico del proyecto.
- Coordinar actualizaciones de documentacion.
- Exigir actualizacion de checkpoints cada vez que se edite al menos un archivo.
- Verificar que `checkpoint/LATEST.md` refleje siempre el ultimo estado real del proyecto.

## Agentes especializados

### 2. Agente de contenido

#### Rol

Definir y refinar mensajes comerciales del sitio.

#### Responsabilidades

- Mejorar titulares, beneficios y CTA.
- Adaptar textos a nuevos servicios o paquetes.
- Mantener tono profesional y orientado a resultados.

#### Archivos principales

- `index.html`
- `services.html`
- `social-media.html`
- `faq.html`
- `testimonials.html`

### 3. Agente UX/UI

#### Rol

Mantener la calidad visual y la claridad de navegacion.

#### Responsabilidades

- Revisar jerarquia de informacion.
- Mejorar experiencia responsive.
- Mantener consistencia entre componentes y secciones.

#### Archivos principales

- `assets/css/styles.css`
- Todas las paginas HTML

### 4. Agente de conversion

#### Rol

Optimizar el recorrido del usuario hacia presupuesto o pago.

#### Responsabilidades

- Ajustar CTA y pricing.
- Reducir fricciones en el formulario.
- Revisar textos y orden de bloques con foco en captacion.

#### Archivos principales

- `index.html`
- `contact.html`
- `assets/js/main.js`

### 5. Agente de integraciones

#### Rol

Conectar el sitio con servicios externos sin romper el modelo de despliegue.

#### Responsabilidades

- Configurar endpoint de formularios.
- Configurar Payment Links.
- Revisar rutas de fallback y mensajes de error.

#### Archivos principales

- `assets/js/main.js`
- `README.md`

### 6. Agente SEO y accesibilidad

#### Rol

Proteger visibilidad organica y calidad de uso.

#### Responsabilidades

- Revisar metas y encabezados.
- Detectar mejoras semanticas.
- Validar foco, contraste y etiquetas.

#### Archivos principales

- Todas las paginas HTML
- `assets/css/styles.css`

### 7. Agente de despliegue

#### Rol

Garantizar que la publicacion en GitHub Pages sea estable.

#### Responsabilidades

- Mantener workflow de GitHub Actions.
- Revisar estructura publica del sitio.
- Confirmar que Pages apunte a GitHub Actions.

#### Archivos principales

- `.github/workflows/deploy.yml`
- `README.md`

## Protocolo de colaboracion

- El coordinador define el objetivo del cambio.
- El agente especializado propone cambios concretos en su area.
- El agente SEO/accesibilidad revisa impacto transversal.
- El agente de despliegue valida que la publicacion siga siendo viable.
- El resultado final se documenta si afecta operativa, integracion o mantenimiento.
- Ninguna sesion con cambios en archivos se considera cerrada sin actualizar el checkpoint vigente.

## Regla de prioridad

En este proyecto, las decisiones deben ordenarse asi:

1. Conversion y claridad comercial
2. Estabilidad tecnica
3. Rendimiento
4. Accesibilidad
5. Mantenibilidad
6. Expansion futura
