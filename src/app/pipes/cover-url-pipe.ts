import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coverUrl',
  standalone: true
})
export class CoverUrlPipe implements PipeTransform {
transform(coverId?: number, size: 'S' | 'M' | 'L' = 'M'): string {
    if (!coverId) {
      return ''; 
    }
    return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
  }
}