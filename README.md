# El Rincón del Libros - Aplicación Multisitio en Angular

Aplicación web desarrollada en Angular 17+ para la gestión y exploración de un catálogo literario, aplicando enrutamiento avanzado, componentes standalone, rutas dinámicas e integración en tiempo real con una API pública.

---

## 🚀 Características y Consigna

- **Arquitectura Modular con Standalone Components:** Organización clara en componentes reusables (`about`, `contact-form`, `loader`, `product-cart`, `review`), páginas principales (`home`, `nosotros`, `products`, `product-detail`, `reviews`), interfaces TypeScript (`IPerson`, `IProduct`, `IReview`), pipes personalizados y servicios.
- **Routing y Rutas Dinámicas:** Configuración de navegación entre páginas y una ruta dinámica (`/products/:id`) para consultar la información detallada de cada libro.
- **Navegación Interna Fluida:** Uso de `routerLink` y `router-outlet` para el desplazamiento entre vistas sin recargar la aplicación.
- **Consumo de API Pública y Servicios:** Integración con la **Open Library API** (`/works/` endpoint) mediante el servicio `ProductService` para obtener y procesar el catálogo y los detalles de cada obra en tiempo real.
- **Transformación de Datos con Pipe:** Implementación de `CoverUrlPipe` para la generación dinámica de las URLs de portadas según la id devuelta por la API.
- **Manejo de Errores e Imágenes Fallback:** Control del evento `(error)` en las portadas para reemplazar automáticamente las imágenes rotas por el recurso local `placeholder-book.svg`.
- **Formularios e Interactividad:** Formulario en `reviews` para que el usuario pueda mandar su reseña.

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

Enlace a la aplicación: [[Proyecto en Vercel](https://el-rincon-de-libros.vercel.app/)]

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