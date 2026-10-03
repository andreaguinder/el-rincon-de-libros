import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { AboutUs } from './pages/about-us/about-us';
import { Contact } from './pages/contact/contact';

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
    path: "about-us",
    component: AboutUs
  },
  {
    path: "contacto",
    component: Contact
  }
];
