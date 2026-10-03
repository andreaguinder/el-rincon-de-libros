import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../interfaces/IPerson';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  founders: Person[] = [
    {
      id: 1,
      fullName: 'Valeria Soria',
      role: 'Co-fundadora & Curadora Literaria',
      bio: 'Lectora empedernida desde los siete años. Creó este rincón con el sueño de armar una comunidad donde cada página encontrada se convierta en una charla de amigos.',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      fullName: 'Martín Echeverría',
      role: 'Co-fundador & Desarrollador',
      bio: 'Apasionado de la novela histórica y la tecnología. Unió sus dos grandes amores para diseñar este espacio digital donde los libros siempre encuentran a su lector ideal.',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      fullName: 'Clara Vignoli',
      role: 'Co-fundadora & Gestora Cultural',
      bio: 'Devoradora de clásicos y poesía contemporánea. Cree firmemente que un buen libro tiene el poder de cambiarle el día (y la perspectiva) a cualquiera.',
      photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      fullName: 'Esteban Navarro',
      role: 'Co-fundador & Bibliófilo',
      bio: 'Fanático absoluto de la ciencia ficción y la fantasía épica. Disfruta tanto recomendando lecturas como descubriendo joyitas ocultas de la literatura.',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    }
  ];
}