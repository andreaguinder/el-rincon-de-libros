import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Review } from '../../interfaces/IReview';

@Component({
  selector: 'app-reviews-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './review.html',
  styleUrl: './review.css'
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      id: 1,
      userName: 'Camila Rossi',
      bookTitle: 'Caraval',
      bookWorkId: 'OL17715454W',
      comment: 'Una ambientación mágica y llena de giros inesperados. Te atrapa la atmósfera del juego de principio a fin.',
      rating: 5
    },
    {
      id: 2,
      userName: 'Mateo Benítez',
      bookTitle: 'Mexican Gothic',
      bookWorkId: 'OL20759125W',
      comment: 'Un gótico moderno increíble. La mansión y la tensión psicológica hacen que no puedas parar de leer.',
      rating: 5
    },
    {
      id: 3,
      userName: 'Sofía Martínez',
      bookTitle: 'My Secret Garden',
      bookWorkId: 'OL733144W',
      comment: 'Un clásico revolucionario sobre la psicología y los pensamientos íntimos. Muy revelador para su época.',
      rating: 4
    },
    {
      id: 4,
      userName: 'Lucas Fernández',
      bookTitle: 'Love, Theoretically',
      bookWorkId: 'OL28803485W',
      comment: 'Ali Hazelwood lo volvió a hacer. Una comedia romántica brillante, súper fresca y con química perfecta.',
      rating: 5
    },
    {
      id: 5,
      userName: 'Valentina Gomez',
      bookTitle: 'To Your Scattered Bodies Go',
      bookWorkId: 'OL273080W',
      comment: 'Una premisa de ciencia ficción desbordante de imaginación. Construcción de mundo impecable.',
      rating: 5
    },
    {
      id: 6,
      userName: 'Nicolás Silva',
      bookTitle: 'Whipping Star',
      bookWorkId: 'OL893525W',
      comment: 'Frank Herbert demuestra su genialidad más allá de Dune. Compleja, fascinante y muy original.',
      rating: 4
    },
    {
      id: 7,
      userName: 'Mariana López',
      bookTitle: 'The Secret History',
      bookWorkId: 'OL4321141W',
      comment: 'Una obra de arte de Donna Tartt. La atmósfera de la universidad y los personajes te envuelven totalmente.',
      rating: 5
    },
    {
      id: 8,
      userName: 'Joaquín Navarro',
      bookTitle: 'Sapiens',
      bookWorkId: 'OL17075811W',
      comment: 'Un recorrido apasionante por la historia de la humanidad. Cambia por completo la perspectiva sobre nuestra especie.',
      rating: 5
    },
    {
      id: 9,
      userName: 'Lucía Morales',
      bookTitle: 'Modern Romance',
      bookWorkId: 'OL17366804W',
      comment: 'Divertidísimo y muy bien documentado sobre cómo cambiaron las relaciones humanas con la tecnología.',
      rating: 4
    },
    {
      id: 10,
      userName: 'Tomas Castro',
      bookTitle: "Rome's Revenge",
      bookWorkId: 'OL3467562W',
      comment: 'Excelente novela histórica. Las batallas y la intriga política romana están retratadas con gran detalle.',
      rating: 4
    },
    {
      id: 11,
      userName: 'Elena Díaz',
      bookTitle: 'The Mysterious Affair at Styles',
      bookWorkId: 'OL472715W',
      comment: 'El gran debut de Agatha Christie e Hercule Poirot. Un misterio clásico que mantiene la intriga hasta el final.',
      rating: 5
    },
    {
      id: 12,
      userName: 'Gonzalo Romero',
      bookTitle: 'The Mysterious Stranger',
      bookWorkId: 'OL54158W',
      comment: 'Una de las obras más oscuras y filosóficas de Mark Twain. Breve pero cargada de reflexiones profundas.',
      rating: 4
    }
  ];
}