export interface Product {
key: string;                         // Identificador único ej: "/works/OL45804W"
  title: string;                       // Título del libro
  author_name?: string[];              // Lista de autores (ej: ["J.R.R. Tolkien"])
  author_key?: string[];               // IDs de los autores para buscar sus detalles
  first_publish_year?: number;         // Año de la primera publicación
  cover_i?: number;                    // ID de la portada para armar la URL de la imagen
  isbn?: string[];                     // Lista de códigos ISBN
  language?: string[];                 // Idiomas disponibles (ej: ["eng", "spa"])
  subject?: string[];                  // Temas/categorías (ej: ["Fantasy", "Fiction"])
  publisher?: string[];                // Editoriales
  number_of_pages_median?: number;    // Promedio de páginas
  ratings_average?: number;            // Calificación promedio (0 a 5)
  ratings_count?: number;
}