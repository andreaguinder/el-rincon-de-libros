import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import {  Reviews } from './pages/reviews/reviews';
import { Nosotros } from './pages/nosotros/nosotros';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "products",
    component: Products
  },
  {
    path: "products/:id",
    component: ProductDetail
  },
  {
    path: "reseñas",
    component: Reviews
  },
  {
    path: "nosotros",
    component: Nosotros
  }
];
