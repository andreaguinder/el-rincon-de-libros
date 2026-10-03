import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
  imports: [FormsModule, ContactForm],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {}
