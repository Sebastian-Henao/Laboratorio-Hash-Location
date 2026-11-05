import { Component, Input } from '@angular/core';
import { MarvelRivals, RolCategoria } from '../../interfaces/module-marvel-rivals.interface';
import { Themes as BadgeType } from '../../../../core/interfaces/themes.interfaces';

/**
 * Presenta los personajes de Marvel Rivals en una tabla con badges por rol.
 */
@Component({
  selector: 'app-table-module-marvel-rivals',
  standalone: false,
  styleUrl: './table-module-marvel-rivals.component.scss',
  templateUrl: './table-module-marvel-rivals.component.html',
})
export class TableModuleMarvelRivalsComponent {
  /** Personajes que se presentan en las filas de la tabla. */
  @Input() moduleMarvelRivals: MarvelRivals[] = [];

  /** Relaciona cada rol con el tema visual de su insignia. */
  categoryMap: Record<RolCategoria, BadgeType> = {
    Vanguardia: 'primary',
    Duelista: 'danger',
    Estratega: 'info',
    Variable: 'warning',
  };
}
