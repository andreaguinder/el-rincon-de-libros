import { Component, OnInit, inject, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/IProduct';
import { ProductCart } from '../../components/product-cart/product-cart';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCart],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  private productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef); // 👈 1. Inyectamos ChangeDetectorRef

  products = signal<Product[]>([]);
  selectedCategory = signal<string>('all');
  searchTerm = signal<string>('');
  loading = signal<boolean>(false);

  categories = [
    { label: 'Todos', value: 'all' },
    { label: 'Fantasía', value: 'fantasy' },
    { label: 'Ciencia Ficción', value: 'science fiction' },
    { label: 'Programación', value: 'programming' },
    { label: 'Historia', value: 'history' },
    { label: 'Romance', value: 'romance' },
    { label: 'Misterio', value: 'mystery' }
  ];

  ngOnInit(): void {
    this.fetchProducts();
  }

  selectCategory(categoryValue: string): void {
    this.selectedCategory.set(categoryValue);
    this.searchTerm.set('');
    this.fetchProducts();
  }

  onSearchChange(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.loading.set(true);

    this.productService.getProducts(this.selectedCategory(), this.searchTerm()).subscribe({
      next: (data: Product[]) => {
        console.log('Libros recibidos:', data);
        this.products.set(data || []);
        this.loading.set(false);
        this.cdr.markForCheck(); // 👈 2. Le avisamos a Angular que refresque la pantalla
      },
      error: (err: unknown) => {
        console.error('Error al traer libros:', err);
        this.products.set([]);
        this.loading.set(false);
        this.cdr.markForCheck(); // 👈 3. También en caso de error
      }
    });
  }
}