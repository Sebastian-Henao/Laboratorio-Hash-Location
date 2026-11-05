import { Component, Input } from '@angular/core';
import { Lol, RolLolCategoria } from '../../interfaces/module-lol.interface';
import { Themes as BadgeType } from '../../../../core/interfaces/themes.interfaces';

/**
 * Presenta los personajes de League of Legends en una tabla con badges por rol.
 */
@Component({
  selector: 'app-table-module-lol',
  standalone: false,
  styleUrl: './table-module-lol.component.scss',
  templateUrl: './table-module-lol.component.html',
})
export class TableModuleLolComponent {
  /** Personajes que se presentan en las filas de la tabla. */
  @Input() moduleLol: Lol[] = [];

  /** Relaciona cada rol con el tema visual de su insignia. */
  categoryMap: Record<RolLolCategoria, BadgeType> = {
    Mago: 'info',
    Luchador: 'warning',
    Tirador: 'success',
    Asesino: 'danger',
    Tanque: 'primary',
    Soporte: 'secondary',
  };
}
