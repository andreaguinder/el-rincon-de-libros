import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/IProduct';
import { CoverUrlPipe } from '../../pipes/cover-url-pipe';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [DecimalPipe, RouterLink, CoverUrlPipe],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css'
})
export class ProductCart {
  @Input({ required: true }) product!: Product;

  onImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = 'placeholder-book.svg'; 
  }
}