import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/products';
import { CoverUrlPipe } from '../../pipes/cover-url-pipe';
import { Loader } from '../../components/loader/loader';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CoverUrlPipe, Loader],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef);

  id: string = '';
  product: any = null;
  loading: boolean = true;
  coverId?: number;
  descriptionText: string = '';

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id') || '';

    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (data) => {
          console.log('Datos recibidos para la ID:', this.id, data);
          
          if (data) {
            this.product = data;

            if (data.covers && data.covers.length > 0) {
              this.coverId = data.covers[0];
            }

            if (typeof data.description === 'string') {
              this.descriptionText = data.description;
            } else if (data.description?.value) {
              this.descriptionText = data.description.value;
            } else {
              this.descriptionText = 'Sin descripción disponible para este libro.';
            }
          }
          
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error al cargar detalle:', err);
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }

    onImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = 'placeholder-book.svg'; 
  }
}