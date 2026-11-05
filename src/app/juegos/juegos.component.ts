import { Component } from '@angular/core';
import { JUEGOS } from './juegos.data';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.scss',
  standalone: false,
})
export class JuegosComponent {
  protected readonly juegos = JUEGOS;
}
