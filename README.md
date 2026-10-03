# El Rincón del Libros - Aplicación Multisitio en Angular

Aplicación web desarrollada en Angular 17+ para la gestión y exploración de un catálogo literario, aplicando enrutamiento avanzado, componentes standalone, rutas dinámicas e integración en tiempo real con una API pública.

---

## 🚀 Características y Consigna

- **Arquitectura de Componentes Standalone:** Organización modular con separación clara de responsabilidades en componentes, páginas, servicios e interfaces.
- **Routing y Rutas Dinámicas:** Configuración de rutas estáticas (`/`, `/products`, `/about`, `/contact`) y una ruta dinámica (`/products/:id`) para la visualización detallada de cada obra.
- **Navegación Interna:** Uso exclusivo de `routerLink` y `router-outlet` para una experiencia de navegación fluida entre vistas.
- **Consumo de API Pública:** Integración con la **Open Library API** (`/works/` endpoint) mediante un servicio de Angular dedicado para la obtención dinámica de catálogos y detalles literarios.
- **Interactividad y Formularios:** Inclusión de formularios reactivos con validaciones y sistema de manejo de errores de carga de imágenes con respaldos mediante recursos locales en SVG.

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para clonar el repositorio e iniciar la aplicación localmente:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/andreaguinder/el-rincon-de-libros.git](https://github.com/andreaguinder/el-rincon-de-libros.git)
```

### 2. Instalar dependencias
```bash
    npm install
```

### 3. Mostrar en el navegador
```bash
    ng serve
```

Una vez que el servidor esté en marcha, abrí tu navegador e ingresá a:

http://localhost:4200/ (o el que te indique la consola si lo tenés ocupado)

---

## 🌐 Despliegue en Producción

Plataforma elegida: Vercel

Enlace a la aplicación: [[Proyecto en Vercel](https://gestion-de-productos-angular.vercel.app/)]

## Capturas de pantalla

En public/proyecto

## 👤 Créditos y Datos de la Entrega

Estudiante: Andrea Guinder

Curso: 181802

Módulo / Unidad: TP Final — Aplicación Multisitio con Angular

Entrega: Trabajo Práctico Final

## 📚 Bibliografía y Fuentes

Documentación oficial de Angular (angular.dev)

Open Library API (openlibrary.org/developers)

Asistencia con Gemini IA