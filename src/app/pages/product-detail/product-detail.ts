// pages/product-detail/product-detail.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/products';
import { CoverUrlPipe } from '../../pipes/cover-url-pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CoverUrlPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  id: string = '';
  product: any = null;
  loading: boolean = true;
  coverId?: number;
  descriptionText: string = '';

  ngOnInit() {
    // Capturamos el parámetro 'id' de la URL (ej: /product/OL45804W -> id = "OL45804W")
    this.id = this.route.snapshot.paramMap.get('id') || '';

    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (data) => {
          console.log('Datos recibidos para la ID:', this.id, data);
          
          if (data) {
            this.product = data;

            // Portada desde la respuesta del ID de la obra
            if (data.covers && data.covers.length > 0) {
              this.coverId = data.covers[0];
            }

            // Normalización de la descripción
            if (typeof data.description === 'string') {
              this.descriptionText = data.description;
            } else if (data.description?.value) {
              this.descriptionText = data.description.value;
            } else {
              this.descriptionText = 'Sin descripción disponible para este libro.';
            }
          }
          
          this.loading = false;
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
}