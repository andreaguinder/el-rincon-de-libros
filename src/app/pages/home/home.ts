import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, BookOpen, MessageSquareQuote, Users } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly BookIcon = BookOpen;
  readonly ReviewIcon = MessageSquareQuote;
  readonly UsersIcon = Users;
}