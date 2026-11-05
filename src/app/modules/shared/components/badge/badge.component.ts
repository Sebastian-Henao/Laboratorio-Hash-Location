import { Component, Input } from '@angular/core';
import { Themes } from '../../../../core/interfaces/themes.interfaces';

/**
 * Muestra un texto corto con un color semántico según el tema recibido.
 */
@Component({
  selector: 'app-badge',
  standalone: false,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  /** Texto que se muestra dentro de la insignia. */
  @Input() text = '';

  /** Tema visual aplicado al color de la insignia. */
  @Input() type: Themes = 'primary';
}
