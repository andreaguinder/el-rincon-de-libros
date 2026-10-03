import { Component } from '@angular/core';
import { ReviewsComponent } from '../../components/review/review';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
  imports: [ReviewsComponent, ContactForm],
  selector: 'app-reviews',
  styleUrl: './reviews.css',
  templateUrl: './reviews.html',
})
export class Reviews {}
