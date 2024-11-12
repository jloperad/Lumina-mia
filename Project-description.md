# Proyecto: Portafolio de Aventura

## Descripción General

El proyecto es una página web personal que encapsule toda mi actividad visual, presentando tanto fotografías profesionales como capturas casuales de aventuras. El objetivo es que el sitio permita organizar y mostrar imágenes en dos categorías principales:

1. **Álbumes Profesionales**: 
   - Colección de fotos editadas y seleccionadas, agrupadas por momentos específicos y almacenadas como contenido estático en el framework de Astro.
   - Cada álbum incluye texto descriptivo para personalizar cada momento.
   - Necesito una optimización de imágenes para evitar sobrecargar la página, ya que las fotos suelen tener un alto peso.

2. **Aventuras Casuales**:
   - Imágenes capturadas con el celular, organizadas cronológicamente y presentadas en un **timeline** que permite una navegación visual por las aventuras según la fecha.
   - Estas fotos tienen metadata (ubicación, fecha, hora) que facilita su organización y serán extraídas desde Google Photos.
   - Necesito un layout dinámico para que la presentación visual sea variada y atractiva, no solo una cuadrícula rectangular.

**Funcionalidad Adicional (a largo plazo)**:
- Un **Mapa de Aventuras** donde pueda visualizar las ubicaciones de diferentes fotos, permitiendo al usuario hacer clic en un pin para abrir un álbum o una aventura.

---

## Objetivos

1. **Mostrar contenido visual en un entorno personalizado**, organizado y estructurado en categorías que lo hagan fácil de explorar.
2. **Optimizar las imágenes** para una carga rápida sin comprometer la calidad visual.
3. **Mantener el sitio ligero** y de fácil actualización para añadir o quitar contenido sin mucho esfuerzo.
4. **Presentar las aventuras en un timeline** de desplazamiento intuitivo, aprovechando la metadata de las fotos.
5. **Implementar un sistema de mapas interactivos** en el que los usuarios puedan explorar mis aventuras por ubicación.

---

## Pasos a Seguir

### 1. Configuración Básica del Proyecto en Astro
   - Inicializar el proyecto en Astro.
   - Crear rutas para las secciones principales:
     - **Inicio**
     - **Álbumes** (contenido estático)
     - **Aventuras** (timeline dinámico).
   - Configurar el directorio de contenido para almacenar las fotos profesionales.

### 2. Integración con Google Photos para Aventuras
   - **Conectar la API de Google Photos** para extraer fotos con metadata.
   - Organizar las fotos según la fecha y agruparlas en “aventuras” en la sección del timeline.
   - Crear un componente de timeline para que el usuario pueda desplazarse cronológicamente y ver aventuras según la fecha.

### 3. Optimización de Imágenes
   - **Fotos Profesionales**:
     - Comprimir y reducir la resolución de imágenes grandes para evitar ralentizar el sitio.
     - Implementar `lazy loading` en Astro para que las imágenes se carguen según el scroll del usuario.
   - **Fotos desde Google Photos**:
     - Usar las opciones de la API para solicitar versiones de menor resolución.

### 4. Diseño del Layout y Variación en la Galería de Fotos
   - **Diseño de Galería Aleatorio**:
     - Crear un layout más “libre” o tipo collage que varíe tamaños y posiciones para evitar un diseño estático.
     - Explorar layouts de “Masonry” o utilizar una rejilla CSS adaptativa.
   - **Animación de Scroll**:
     - Implementar efectos de transición para que las aventuras se muestren progresivamente al desplazarse.

### 5. Mapa de Aventuras (Funcionalidad Avanzada)
   - **Integración de un Mapa Interactivo**:
     - Usar Mapbox o Leaflet para crear un mapa que marque ubicaciones de las aventuras.
     - Configurar el mapa para que al hacer clic en un pin se abra el álbum o la aventura correspondiente.

### 6. Agregar Texto Personalizado y Detalles de la Historia
   - **Escritura de Historias**:
     - En cada álbum y aventura, agregar títulos, descripciones y otros detalles personalizados.
     - Los textos de los álbumes profesionales estarán en archivos `.md`, mientras que en las aventuras podría integrarse desde la metadata o una base de datos.

### 7. Ajustes Finales y Estilización
   - Realizar ajustes finales en el diseño para garantizar que la experiencia sea visualmente atractiva.
   - Implementar diseño responsive para asegurar que funcione tanto en dispositivos móviles como en desktops.

---

## Requisitos Técnicos y Herramientas

- **Framework**: Astro, para facilitar la gestión de contenido estático.
- **Autenticación**: Configurar autenticación para la API de Google Photos y asegurar un flujo de extracción de datos.
- **Optimización de Imágenes**: Usar herramientas como TinyPNG o una librería en Astro.
- **Librerías para Layouts**: Masonry Layout, CSS Grid, o librerías de animación como Framer Motion para crear efectos visuales.
- **Integración de Mapas**: Mapbox o Leaflet, para crear el mapa interactivo.
- **Markdown**: Para almacenar textos en los álbumes profesionales.

---

## Prioridad de Implementación

1. **Configuración en Astro y rutas básicas**.
2. **Integración con Google Photos y organización del timeline**.
3. **Optimización de las imágenes** para un rendimiento óptimo.
4. **Diseño y disposición de galería con layouts variados**.
5. **Mapa de Aventuras** (como extensión a largo plazo).
6. **Ajustes de contenido y diseño responsive**.

Este archivo proporciona la visión general, pasos detallados y recursos necesarios para desarrollar el proyecto. ¡Usa cada sección como guía para mantener el enfoque y el flujo en la construcción de la página web! 
