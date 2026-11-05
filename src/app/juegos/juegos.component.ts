import { Component } from '@angular/core';
import { JUEGOS } from './juegos.data';

@Component({
  selector: 'app-juegos',
  standalone: true,
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.scss',
})
export class JuegosComponent {
  protected readonly juegos = JUEGOS;
}
