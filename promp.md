Sí. Ahora entiendo mejor el objetivo: **no quieres una web jurídica informativa con animaciones; quieres una experiencia que haga que el visitante piense “¿qué carajos acaba de pasar?”** y que, después de ese impacto, la interfaz lo conduzca naturalmente hacia una consulta.

Para esto investigué específicamente técnicas actuales de interacción web y, para el corazón de la experiencia, **GSAP + ScrollTrigger** es una elección muy fuerte: permite `scrub`, `pin`, `snap`, timelines controlados por scroll, movimiento horizontal y callbacks basados en velocidad/dirección. Además, GSAP está optimizado para sincronizar las actualizaciones con el renderizado. ([GSAP][1])

También hay una idea que quiero incorporar del diseño interactivo de sitios premiados: **mezclar scroll vertical con movimientos horizontales, cursor reactivo, motion design, microinteracciones y transiciones**, en vez de limitarse a animaciones de aparición. ([Awwwards][2])

Te dejo el prompt como **especificación de dirección creativa + arquitectura + implementación**, no como un simple prompt de “hazme una página bonita”.

---

# PROMPT MAESTRO PARA TU ASISTENTE DE CÓDIGO

```text
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║       PROYECTO: EXPERIENCIA WEB JURÍDICA INMERSIVA                 ║
║                                                                      ║
║       NO CREAR UNA WEB INFORMATIVA.                                 ║
║       CREAR UNA EXPERIENCIA.                                        ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝


============================================================
01. CONTEXTO DEL PROYECTO
============================================================

Estoy desarrollando una página web premium para una firma de
abogados.

Referencias:

REFERENCIA ESTRUCTURAL / COMERCIAL:
https://legionlegal.com.co/

REFERENCIA DE NIVEL DE ANIMACIÓN:
https://www.leiderdario.online/

La primera referencia sirve únicamente para entender:

- estructura de una firma jurídica
- jerarquía de contenido
- presentación de servicios
- contacto
- captación de leads

NO copiar:

- diseño
- textos
- branding
- imágenes
- código
- composición visual exacta

La segunda referencia sirve para entender el nivel de:

- animación
- movimiento
- interacción
- respuesta al cursor
- scroll
- transiciones
- composición dinámica

============================================================
02. OBJETIVO PRINCIPAL
============================================================

La prioridad absoluta de este proyecto es:

INMERSIÓN.

NO quiero una página donde el usuario simplemente:

entra
↓
lee
↓
hace scroll
↓
lee otra sección
↓
envía formulario.

Eso sería una web corporativa tradicional.

Quiero que la experiencia sea:

ENTRA
↓
"¿QUÉ ESTÁ PASANDO?"
↓
INTERACTÚA
↓
DESCUBRE
↓
SE SORPRENDE
↓
CONFÍA
↓
SE INTERESA
↓
QUIERE SABER MÁS
↓
CONTACTA

La página debe generar una sensación de:

"Esta firma se siente diferente."

"Esta página tiene muchísimo nivel."

"Quiero seguir explorando."

"Se nota que están cuidando cada detalle."

El usuario debe SENTIR la marca antes de leerla.


============================================================
03. PRINCIPIO CREATIVO FUNDAMENTAL
============================================================

NO diseñar una página que parezca un documento jurídico.

Diseñar una EXPERIENCIA DIGITAL DE UNA FIRMA JURÍDICA.

La información debe estar presente, pero nunca debe dominar
la experiencia.

El contenido es el argumento.

El movimiento es la experiencia.

La interacción es el mecanismo de descubrimiento.

La conversión es el objetivo.


============================================================
04. REGLA MÁS IMPORTANTE
============================================================

NO interpretar:

"muchas animaciones"

como:

"poner fade-in a todo".

NO.

Quiero una gran VARIEDAD de comportamientos.

La sensación de complejidad debe provenir de:

- scroll-driven animations
- cursor-reactive elements
- magnetic interactions
- parallax
- text transformations
- image reveals
- clipping
- masking
- horizontal movement
- pinned sections
- scale transitions
- velocity-based reactions
- hover transformations
- typography animation
- dynamic backgrounds
- layered depth
- section morphing
- interactive cards
- transitions entre secciones
- microinteracciones
- navegación animada
- cambios de estado
- elementos que reaccionan entre sí

La página debe sentirse viva.


============================================================
05. STACK TECNOLÓGICO
============================================================

Utilizar:

- Next.js 16 o la última versión estable disponible compatible
- React
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- GSAP Observer cuando sea útil
- GSAP ScrollTo cuando sea necesario
- GSAP MatchMedia para responsive animations
- Lenis o una solución equivalente de smooth scrolling
- Lucide React
- React Hook Form
- Zod

Opcional:

- React Three Fiber
- Three.js
- Lottie

Pero:

NO utilizar Three.js simplemente porque "se ve moderno".

Sólo utilizar WebGL/Three.js si existe una interacción visual
que realmente mejore la experiencia.

NO convertir la página en una demo tecnológica sin propósito.


============================================================
06. MOTOR PRINCIPAL DE ANIMACIÓN
============================================================

GSAP debe ser el sistema principal de animación.

Utilizar:

GSAP
+
ScrollTrigger
+
Timeline
+
Observer
+
MatchMedia

cuando corresponda.

ScrollTrigger debe utilizarse especialmente para:

- scrub
- pin
- snap
- scroll-driven timelines
- horizontal scrolling
- section transitions
- reveal animations
- progress indicators
- parallax
- transformación de escala
- movimiento de imágenes
- animaciones vinculadas a velocidad del scroll

NO crear cientos de listeners independientes de scroll.

Centralizar y organizar las animaciones.

Crear una arquitectura limpia de animaciones.


============================================================
07. FILOSOFÍA DE SCROLL
============================================================

El scroll NO debe ser simplemente:

"bajar por la página".

Debe ser un CONTROLADOR DE LA EXPERIENCIA.

En determinadas secciones:

el usuario hace scroll
↓
la sección se fija
↓
la interfaz empieza a transformarse
↓
el contenido cambia
↓
las imágenes se desplazan
↓
la tipografía cambia
↓
aparecen nuevos elementos
↓
el usuario continúa haciendo scroll
↓
la sección termina
↓
la página continúa.

Utilizar secciones de 100vh, 150vh, 200vh, 300vh
cuando tenga sentido.

No tener miedo a crear secciones largas si la experiencia
lo justifica.


============================================================
08. EXPERIENCIA DE ENTRADA
============================================================

Crear un PRELOADER cinematográfico.

NO quiero:

"Loading..."

Quiero una entrada de marca.

Ejemplo conceptual:

01
pantalla oscura/minimalista

02
aparece una línea

03
aparece el nombre de la firma

04
la tipografía se divide

05
la pantalla realiza una transición

06
el Hero aparece

07
los elementos del Hero entran desde diferentes planos.

La transición debe sentirse como la entrada a una experiencia.


============================================================
09. HERO
============================================================

El Hero debe ser:

100vh
o ligeramente superior.

Debe tener:

- nombre de la firma
- frase principal
- subtítulo
- CTA
- imagen principal
- elementos decorativos
- indicador de scroll

PERO NO PRESENTARLO COMO UN HERO CORPORATIVO NORMAL.


CONCEPTO:

"DEFENDEMOS
LO QUE IMPORTA."


La tipografía debe ser protagonista.

El texto puede ocupar gran parte del viewport.

Utilizar:

- text reveal
- character reveal
- clip-path
- mask
- scale
- stagger
- parallax


INTERACCIÓN CON MOUSE:

La fotografía debe reaccionar ligeramente al cursor.

Elementos secundarios deben tener velocidades diferentes.

El fondo debe responder sutilmente al movimiento.

El cursor debe sentirse conectado con la composición.


AL HACER SCROLL:

El Hero debe transformarse.

NO desaparecer simplemente.

Ejemplo:

FASE 1:
título gigante

FASE 2:
título se desplaza

FASE 3:
fotografía escala

FASE 4:
contenido se reorganiza

FASE 5:
el Hero se convierte visualmente en la siguiente sección.


============================================================
10. CURSOR PERSONALIZADO
============================================================

Crear un cursor personalizado para desktop.

Estado normal:

pequeño círculo.

Hover sobre links:

el círculo aumenta.

Hover sobre imágenes:

mostrar:

VIEW

Hover sobre servicios:

mostrar:

EXPLORE

Hover sobre CTA:

mostrar:

CONTACT

El cursor debe seguir al mouse con interpolación suave.

Debe tener:

- scale
- opacity
- easing
- estados contextuales

NO utilizar un cursor extravagante que parezca de videojuego.

Debe sentirse editorial/premium.

Desactivarlo completamente en:

- touch devices
- mobile
- situaciones donde no tenga sentido.


============================================================
11. MOUSE REACTIVE DESIGN
============================================================

Quiero que determinados elementos respondan al mouse.

Ejemplos:

- fotografías con tilt mínimo
- capas con parallax
- texto que reacciona
- botones magnéticos
- imágenes que revelan contenido
- elementos decorativos que se desplazan
- fondos que cambian ligeramente

Utilizar interpolación.

Nunca mover elementos demasiado.

La interacción debe sentirse física.

Como si existiera profundidad en la pantalla.


============================================================
12. BOTONES MAGNÉTICOS
============================================================

Todos los CTA principales deben tener interacción magnética.

Ejemplo:

[ HABLAR CON UN ABOGADO ]

Cuando el cursor se acerca:

el botón se desplaza ligeramente hacia el cursor.

El contenido interno puede moverse en dirección opuesta.

Al salir:

regresa con spring/easing.

NO exagerar.

Máximo desplazamiento aproximado:

10-20px.


============================================================
13. NAVEGACIÓN
============================================================

Navbar inicialmente integrada en el Hero.

Mientras se hace scroll:

- cambia de tamaño
- cambia de contraste
- aparece fondo
- aplica blur
- cambia spacing
- puede convertirse en una cápsula flotante

Debe existir indicador de sección activa.

Links:

Inicio
Servicios
Experiencia
Firma
Contacto

No quiero una navbar genérica.

Quiero una navbar que sea parte de la experiencia.


============================================================
14. SERVICIOS JURÍDICOS
============================================================

IMPORTANTE:

Esta será la ÚNICA gran sección de servicios.

NO crear sección de delitos.

NO crear un grid tradicional de 14 delitos.

NO replicar la sección de Legion Legal.

Crear:

"SERVICIOS JURÍDICOS"

La sección debe presentar:

01
RECUPERACIÓN DE DINERO

02
RECLAMACIONES

03
TRÁMITES JURÍDICOS

04
ASESORÍA JURÍDICA

05
REPRESENTACIÓN LEGAL

06
NEGOCIACIÓN Y CONCILIACIÓN

07
ELABORACIÓN Y REVISIÓN DE DOCUMENTOS

Los servicios deben ser altamente interactivos.


============================================================
15. EXPERIENCIA VISUAL DE SERVICIOS
============================================================

NO utilizar:

┌─────────────────┐
│ Servicio        │
│ descripción     │
│ Ver más         │
└─────────────────┘

Eso es demasiado convencional.

Crear una experiencia editorial.

Ejemplo:

01

RECUPERACIÓN
DE DINERO

Al pasar el mouse:

- aparece una imagen
- aparece una descripción
- aparece una flecha
- el número cambia
- el cursor cambia
- el texto se desplaza
- el fondo cambia
- aparece una línea

La transición debe ser fluida.


============================================================
16. SERVICIOS COMO EXPERIENCIA DE SCROLL
============================================================

Considerar una sección sticky.

Ejemplo:

viewport:

-----------------------------------

        SERVICIOS
        JURÍDICOS

              01

        RECUPERACIÓN
        DE DINERO

-----------------------------------

Mientras el usuario hace scroll:

01 → 02 → 03 → 04 → 05 → 06 → 07

Pero NO simplemente cambiar texto.

Cada servicio debe tener:

- transición
- imagen
- número
- descripción
- composición diferente
- movimiento

La sección debe sentirse como una instalación digital.


============================================================
17. EFECTO HORIZONTAL
============================================================

Implementar al menos una experiencia donde:

scroll vertical
=
movimiento horizontal.

Por ejemplo:

SERVICIOS
→
RECUPERACIÓN
→
RECLAMACIONES
→
TRÁMITES
→
ASESORÍA
→
REPRESENTACIÓN

La pantalla permanece parcialmente fija mientras
el contenido se desplaza horizontalmente.

Utilizar ScrollTrigger y containerAnimation cuando corresponda.


============================================================
18. SECCIÓN "RECUPERACIÓN DE DINERO"
============================================================

Este servicio debe tener especial protagonismo.

Crear una sección narrativa.

Título:

¿TIENE DINERO
POR RECUPERAR?

Texto corto:

Analizamos su situación y las alternativas jurídicas
disponibles para reclamar recursos, obligaciones pendientes
o valores que legalmente puedan corresponderle.

CTA:

REVISAR MI CASO →

Visualmente:

el número/importe conceptual puede aparecer,
pero NO inventar cantidades de dinero reales.

Utilizar:

- typography scale
- parallax
- scroll reveal
- line animation
- image transition
- CTA magnetic interaction


============================================================
19. SECCIÓN DE AUTORIDAD
============================================================

Crear una sección que comunique:

EXPERIENCIA
ESTRATEGIA
CONFIANZA

Utilizar estadísticas DEMO únicamente para presentación.

Ejemplo:

15+
AÑOS DE EXPERIENCIA

1.200+
CASOS ATENDIDOS

98%
CLIENTES SATISFECHOS

25+
MUNICIPIOS ATENDIDOS

IMPORTANTE:

Son datos ficticios para DEMO.

Guardar en:

src/config/site.ts

y marcar:

isDemo: true

No hardcodearlos dentro de componentes.

Debe ser extremadamente fácil reemplazarlos.


============================================================
20. ANIMACIÓN DE ESTADÍSTICAS
============================================================

No mostrar:

15+
inmediatamente.

Hacer:

0
↓
3
↓
7
↓
11
↓
15+

Con easing.

Pero el efecto debe estar integrado con la composición.

Los números pueden desplazarse verticalmente como un contador
editorial.


============================================================
21. PERFIL DEL ABOGADO
============================================================

Crear una sección editorial de alto nivel.

No quiero:

foto a la izquierda
texto a la derecha
fin.

Crear composición visual.

Ejemplo:

FOTOGRAFÍA GRANDE

+
nombre gigante

+
especialidad

+
experiencia

+
texto

La fotografía debe:

- hacer parallax
- reaccionar al mouse
- tener reveal
- tener clipping
- escalar ligeramente

El nombre puede atravesar visualmente la fotografía.


============================================================
22. EXPERIENCIA / CASOS
============================================================

Crear una sección:

"EXPERIENCIA QUE RESPALDA NUESTRA ESTRATEGIA"

No mostrar información confidencial.

Utilizar casos DEMO conceptuales.

Ejemplo:

CASO 01
Recuperación patrimonial

CASO 02
Representación jurídica

CASO 03
Negociación

CASO 04
Asesoría empresarial

Cada caso debe funcionar como una pieza interactiva.

Al hover:

- cambia imagen
- cambia escala
- aparece descripción
- cursor cambia
- aparece CTA


============================================================
23. TESTIMONIOS
============================================================

Crear una sección de testimonios.

Utilizar contenido DEMO.

No presentarlo como información real.

Ejemplo:

"Desde la primera consulta sentí que había
una estrategia clara para abordar mi situación."

CLIENTE DEMO

Crear transición cinematográfica.

No utilizar simplemente:

slider horizontal estándar.


============================================================
24. CTA FINAL
============================================================

Esta sección debe ser un CLÍMAX.

No simplemente:

"Contáctanos."

Crear:

¿NECESITA
ASESORÍA
JURÍDICA?

El texto debe ocupar gran parte del viewport.

Al hacer scroll:

la tipografía cambia de escala.

Al mover el cursor:

el fondo reacciona.

CTA:

HABLAR CON UN ABOGADO →

El botón debe ser magnético.


============================================================
25. CONTACTO
============================================================

Crear una sección inspirada funcionalmente en la sección
de contacto mostrada en Legion Legal.

Debe incluir:

- dirección
- teléfono
- email
- ubicación
- mapa
- formulario

PERO el diseño debe ser completamente original.


============================================================
26. FORMULARIO DE LEADS
============================================================

El formulario debe ser tratado como una pieza central
de conversión.

NO quiero:

Nombre:
[________]

Email:
[________]

Mensaje:
[________]

[ENVIAR]


Quiero un formulario premium.


Campos:

NOMBRE COMPLETO

TELÉFONO

CORREO ELECTRÓNICO

TIPO DE CONSULTA

CUÉNTENOS BREVEMENTE SU SITUACIÓN


Cada campo debe tener:

- floating label
- animated border
- focus transition
- validation
- error state
- success state

El botón:

SOLICITAR ASESORÍA →

Debe tener:

- magnetic interaction
- hover transition
- arrow animation
- loading state


============================================================
27. FORMULARIO COMO EXPERIENCIA
============================================================

Al comenzar a llenar el formulario:

el usuario debe sentir que está iniciando un proceso.

Ejemplo:

01
SUS DATOS

02
SU SITUACIÓN

03
CONTACTO

Mostrar progreso.

No utilizar demasiados pasos.

Máximo 2-3 etapas si mejora la experiencia.


============================================================
28. MAPA
============================================================

Agregar mapa.

Prepararlo para reemplazar posteriormente por:

Google Maps
o
Mapbox.

La ubicación debe venir desde configuración.

NO hardcodear la dirección dentro del componente.


============================================================
29. MICROINTERACCIONES
============================================================

Implementar microinteracciones en:

- botones
- links
- navbar
- inputs
- tarjetas
- números
- imágenes
- iconos
- indicadores
- scroll indicator
- menú móvil

Ejemplos:

arrow slide
line reveal
icon rotation
scale
opacity
underline animation
magnetic movement
cursor state
background transition


============================================================
30. TRANSICIONES ENTRE SECCIONES
============================================================

Las secciones NO deben sentirse como:

SECCIÓN A
████████████████

SECCIÓN B
████████████████

SECCIÓN C
████████████████

Quiero continuidad.

Elementos de una sección pueden:

- atravesar hacia la siguiente
- cambiar de posición
- cambiar de escala
- cambiar de color
- convertirse en otro elemento

Crear la sensación de una sola experiencia continua.


============================================================
31. TIPOGRAFÍA CINÉTICA
============================================================

Utilizar tipografía como elemento visual.

Ejemplos:

DEFENDEMOS

LO QUE

IMPORTA.

Las palabras pueden:

- entrar desde diferentes direcciones
- escalar
- desplazarse horizontalmente
- cambiar tracking
- hacer clip reveal
- reaccionar al scroll

Pero mantener legibilidad.


============================================================
32. IMÁGENES
============================================================

Las imágenes no deben simplemente aparecer.

Crear:

image reveal
image masking
parallax
scale
crop transitions
clip-path
layer movement

Una imagen puede comenzar:

recortada

y revelar progresivamente toda su composición.


============================================================
33. PROFUNDIDAD
============================================================

Crear sensación de profundidad mediante:

- foreground
- midground
- background
- diferentes velocidades
- blur
- escala
- parallax

No abusar del blur.

No hacer que parezca una web de videojuego.


============================================================
34. EFECTOS EXPERIMENTALES
============================================================

Quiero que el asistente de código PROPONGA efectos avanzados
cuando puedan mejorar la experiencia.

Considerar:

- distortion hover
- displacement maps
- image distortion
- liquid transitions
- magnetic typography
- velocity-based typography
- scroll velocity reactions
- cursor trails muy sutiles
- noise/grain
- SVG morphing
- clip-path transitions
- masked sections
- horizontal scroll
- pinned narratives
- text splitting
- layered parallax

PERO:

Cada efecto debe responder a una intención.

NO añadir efectos únicamente para presumir tecnología.


============================================================
35. EASTER EGGS
============================================================

Agregar 2-3 pequeños detalles descubribles.

Ejemplos:

- cursor cambia en ciertas zonas
- pequeño detalle al llegar al final
- microinteracción escondida
- número o elemento que responde de manera inesperada

Deben ser sutiles.

No convertir la web en un juego.


============================================================
36. SOUND
============================================================

NO reproducir sonido automáticamente.

Si se considera sonido:

debe ser opcional.

Por defecto:

silencio.


============================================================
37. RESPONSIVE
============================================================

Desktop:

experiencia completa.

Tablet:

adaptar.

Mobile:

NO intentar replicar literalmente todas las interacciones
de desktop.

Eliminar:

- cursor personalizado
- hover interactions
- efectos dependientes del mouse

Mantener:

- scroll animations
- reveal
- scale
- parallax ligero
- transitions

Utilizar:

gsap.matchMedia()

para gestionar diferentes comportamientos responsive.

Las animaciones deben desmontarse correctamente
cuando cambia el breakpoint.


============================================================
38. PERFORMANCE
============================================================

IMPORTANTE:

Quiero una web MUY animada.

Pero NO quiero una web lenta.

Priorizar:

transform
opacity
GPU-friendly properties

Evitar animar:

width
height
top
left

cuando pueda utilizarse transform.

Evitar:

layout thrashing
forced synchronous layouts
listeners innecesarios
memory leaks
event listeners sin cleanup
ScrollTriggers duplicados

Utilizar context cleanup correctamente.


============================================================
39. ACCESSIBILITY
============================================================

Respetar:

prefers-reduced-motion.

Si está activo:

reducir radicalmente las animaciones.

Mantener:

- navegación
- contraste
- foco
- teclado
- formularios
- semantic HTML

La experiencia premium no debe destruir la accesibilidad.


============================================================
40. SEO
============================================================

La página debe continuar siendo una página web real.

Implementar:

- metadata
- title
- description
- Open Graph
- semantic HTML
- headings correctos
- structured data si corresponde
- sitemap
- robots

Las animaciones NO deben impedir que los buscadores
comprendan el contenido.


============================================================
41. ARQUITECTURA DEL PROYECTO
============================================================

Organizar aproximadamente:

src/

app/
  page.tsx
  layout.tsx

components/

  navigation/
  cursor/
  buttons/
  forms/
  sections/

  Hero/
  Services/
  Authority/
  Profile/
  Cases/
  Testimonials/
  Contact/
  Footer/

animations/

  hero.ts
  services.ts
  cursor.ts
  parallax.ts
  typography.ts
  transitions.ts
  contact.ts

hooks/

  useMousePosition.ts
  useMagnetic.ts
  useMediaQuery.ts
  useReducedMotion.ts
  useLenis.ts

config/

  site.ts
  services.ts
  testimonials.ts

utils/

  animation.ts


NO crear un único archivo gigante
page.tsx
con toda la lógica.


============================================================
42. CONFIGURACIÓN CENTRAL
============================================================

Crear:

src/config/site.ts

Debe contener:

firma
abogado
email
telefono
direccion
redes
estadisticas
servicios
testimonios
casos

Ejemplo:

statistics: [
  {
    value: 15,
    suffix: "+",
    label: "Años de experiencia",
    isDemo: true
  }
]

Esto permitirá reemplazar todo el contenido
sin modificar los componentes.


============================================================
43. DATOS DEMO
============================================================

Para esta presentación al cliente se pueden utilizar
datos demostrativos.

Ejemplo:

15+ años
1.200+ casos
98% satisfacción
25+ municipios

Pero TODO dato ficticio debe estar marcado internamente:

isDemo: true

Los testimonios deben tener:

isDemo: true

Los casos deben tener:

isDemo: true

No publicar estos datos como reales sin reemplazarlos.


============================================================
44. DIRECCIÓN ARTÍSTICA
============================================================

La estética debe sentirse:

PREMIUM
EDITORIAL
CINEMATOGRÁFICA
JURÍDICA
MODERNA
MINIMALISTA EN CONTENIDO
MÁXIMA EN EXPERIENCIA

No hacer:

- diseño genérico de abogados
- azul corporativo aburrido por defecto
- demasiadas cards
- exceso de bordes
- iconos genéricos por todas partes
- gradientes aleatorios
- efectos de neón sin propósito
- estética de dashboard
- estética de SaaS


============================================================
45. CONTRASTE VISUAL
============================================================

Alternar momentos:

MUY MINIMALISTAS

con momentos:

MUY DINÁMICOS.

Esto es importante.

Si TODO se mueve todo el tiempo,
nada se siente especial.

Quiero:

silencio visual
↓
impacto
↓
silencio
↓
interacción
↓
impacto
↓
descanso
↓
clímax


============================================================
46. RITMO
============================================================

Pensar la página como una película.

INTRO
↓
INTRIGA
↓
DESCUBRIMIENTO
↓
EXPERIENCIA
↓
AUTORIDAD
↓
CONFIANZA
↓
CLÍMAX
↓
CONVERSIÓN


============================================================
47. NO HACER
============================================================

NO:

- usar animaciones genéricas
- hacer fade-in de todo
- crear 50 tarjetas
- utilizar carousels estándar sin propósito
- abusar de glassmorphism
- abusar de gradients
- meter 3D porque sí
- poner partículas aleatorias
- utilizar cursores infantiles
- utilizar efectos que parezcan plantillas
- saturar todas las secciones
- sacrificar rendimiento por espectáculo
- bloquear el scroll permanentemente
- hacer scroll-jacking agresivo
- dificultar la navegación
- esconder información importante detrás de animaciones


============================================================
48. LO QUE QUIERO QUE EL USUARIO SIENTA
============================================================

Primera impresión:

"Wow."

Después de 5 segundos:

"Esto no parece una página de abogados normal."

Después de 15 segundos:

"Quiero seguir viendo qué hace."

Después de explorar:

"Esta firma parece profesional."

Finalmente:

"Quiero hablar con ellos."


============================================================
49. PRINCIPIO DE CONVERSIÓN
============================================================

Toda la experiencia debe conducir gradualmente hacia:

CONTACTAR.

Pero NO bombardear al usuario con:

"CONTACTA AHORA"

en cada sección.

Utilizar CTAs estratégicamente:

HABLAR CON UN ABOGADO
REVISAR MI CASO
CONOCER LOS SERVICIOS
SOLICITAR ASESORÍA


============================================================
50. CRITERIO FINAL DE ÉXITO
============================================================

La página NO será considerada terminada simplemente porque:

- compila
- es responsive
- tiene todas las secciones
- tiene animaciones

Debe pasar esta prueba:

1. Entrar a la página.

2. Ver el Hero.

3. Mover el mouse.

4. Hacer scroll lentamente.

5. Hacer scroll rápidamente.

6. Pasar por servicios.

7. Interactuar con botones.

8. Abrir el formulario.

9. Volver hacia arriba.

10. Probar mobile.

En cada etapa debe existir una respuesta visual
coherente y deliberada.

La página debe sentirse diseñada,
no ensamblada.


============================================================
51. INSTRUCCIÓN FINAL AL ASISTENTE
============================================================

NO empieces creando todos los componentes de golpe.

Primero analiza la arquitectura.

Después construye el sistema visual.

Después construye el Hero.

Después construye el sistema global de:

- cursor
- smooth scrolling
- mouse interaction
- magnetic buttons
- animation utilities

Después construir las secciones.

Después integrar las animaciones de scroll.

Después responsive.

Después performance.

Después accesibilidad.

Finalmente realizar una auditoría visual completa.

Si detectas una oportunidad para crear una interacción
más impresionante, moderna o cinematográfica que no haya
sido especificada aquí, PROPÓNLA E IMPLEMENTA si mejora
realmente la experiencia.

No te limites a cumplir literalmente el documento.

Quiero criterio de diseñador de experiencias digitales
y de desarrollador frontend senior.


============================================================
52. DEFINICIÓN DEL RESULTADO
============================================================

EL RESULTADO NO ES:

"Una página web de abogados con animaciones."

EL RESULTADO ES:

"Una experiencia digital inmersiva para una firma jurídica
que utiliza movimiento, interacción y narrativa visual para
convertir la visita en confianza y posteriormente en un lead."


FINALMENTE:

Antes de terminar, revisa toda la experiencia y elimina
cualquier animación que parezca genérica, repetitiva,
innecesaria o de plantilla.

Quiero MENOS efectos genéricos
y MÁS interacciones memorables.

Quiero que el usuario recuerde la experiencia.
```

### Una decisión técnica que sí dejaría explícita

Yo **no obligaría a usar Lenis + ScrollSmoother simultáneamente**. Si el asistente decide usar GSAP ScrollSmoother, este ya está integrado con ScrollTrigger y utiliza scroll nativo, incluyendo efectos de parallax y `data-lag`; meter además otra capa de smooth scrolling puede ser redundante. ([GSAP][3])

Y para responsive, la instrucción de `gsap.matchMedia()` es importante: permite crear animaciones específicas por breakpoint y revertirlas automáticamente cuando cambia la condición. ([GSAP][4])

### La idea visual que quiero que el asistente entienda

No:

> **Hero → sección → cards → sección → formulario.**

Sino algo más parecido a:

```text
                ENTRADA
                   │
                   ▼
          ┌─────────────────┐
          │   WOW MOMENT    │
          └────────┬────────┘
                   │
              scroll ↓
                   │
          ┌─────────────────┐
          │  TRANSFORMACIÓN │
          └────────┬────────┘
                   │
           mouse ↔ │ ↕ scroll
                   │
          ┌─────────────────┐
          │   SERVICIOS     │
          │                 │
          │ 01              │
          │ 02              │
          │ 03              │
          │ 04              │
          └────────┬────────┘
                   │
             horizontal
                   │
                   ▼
          ┌─────────────────┐
          │   AUTORIDAD     │
          └────────┬────────┘
                   │
              parallax
                   │
                   ▼
          ┌─────────────────┐
          │     FIRMA       │
          └────────┬────────┘
                   │
               clímax
                   │
                   ▼
       ┌─────────────────────────┐
       │    HABLEMOS DE SU CASO  │
       │                         │
       │    FORMULARIO           │
       └─────────────────────────┘
```

La clave es que **el contenido no sea el espectáculo; la interfaz misma sea el espectáculo**.

Y ahí es donde esta web puede separarse muchísimo de Legion Legal: ellos te sirven de referencia para entender *qué necesita una firma jurídica para vender*, pero tú estás construyendo una experiencia que haga que el visitante **quiera quedarse en la página**. Las capacidades de ScrollTrigger —incluyendo `scrub`, `pin`, `snap` y movimiento horizontal vinculado al scroll— encajan especialmente bien con esa filosofía. ([GSAP][1])

[1]: https://gsap.com/docs/v3/Plugins/ScrollTrigger/?utm_source=chatgpt.com "ScrollTrigger | GSAP | Docs & Learning"
[2]: https://assets.awwwards.com/assets/files/live-presentation.pdf?utm_source=chatgpt.com "<visual_element id=\"e1\">"
[3]: https://gsap.com/docs/v3/Plugins/ScrollSmoother/?utm_source=chatgpt.com "ScrollSmoother | GSAP | Docs & Learning"
[4]: https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29/?utm_source=chatgpt.com "gsap.matchMedia() | GSAP | Docs & Learning"

y que tenga un boton en el navbar que sea para poner en ingles y español


la pagina se debe llamar "Wexford Law"
y estar en ingles 
el logo principal mente debe estar enfocado al nombre