import { Component } from '@angular/core';

interface Category {
  name: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: Category[] = [];
}
