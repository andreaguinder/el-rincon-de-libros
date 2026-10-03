import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(category: string = 'all', query: string = ''): Observable<Product[]> {
  let term = query.trim();

  if (!term) {
    // Si eligió 'all', busca libros en general ('books' o 'bestsellers')
    // Si eligió otra categoría, busca por esa categoría (ej: 'fantasy', 'history')
    term = category !== 'all' ? category : 'bestsellers';
  }

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(term)}&limit=30`;
  console.log('Pidiendo datos a:', url);

  return this.http.get<any>(url).pipe(
    map((res) => {
      console.log('Respuesta raw de Open Library:', res);
      return res?.docs || [];
    }),
    catchError((err) => {
      console.error('Error HTTP en servicio:', err);
      return of([]);
    })
  );
}

  getProductById(id: string): Observable<any> {
    const cleanId = id.replace('/works/', '').replace('%2Fworks%2F', '');
    return this.http.get<any>(`https://openlibrary.org/works/${cleanId}.json`).pipe(
      catchError((err) => {
        console.error('Error al traer detalle:', err);
        return of(null);
      })
    );
  }
}