import { Component, inject } from '@angular/core';
import { Lol } from '../../interfaces/module-lol.interface';
import { ModuleLolService } from '../../services/module-lol.service';

/**
 * Componente de listado de personajes de League of Legends (LoL).
 *
 * Se encarga de consumir el servicio `ModuleLolService` para obtener
 * el catálogo de campeones y pasarlo al componente de tabla `TableModuleLolComponent`.
 */
@Component({
  selector: 'app-list-module-lol',
  standalone: false,
  template: '<app-table-module-lol [moduleLol]="moduleLol"></app-table-module-lol>',
})
export class ListModuleLolComponent {
  /**
   * Listado de campeones obtenidos desde el servicio.
   * @type {Lol[]}
   */
  moduleLol: Lol[] = [];

  /**
   * Servicio para obtener los personajes del módulo.
   */
  private moduleLolService = inject(ModuleLolService);

  /**
   * Inicializa el componente y carga los campeones.
   */
  ngOnInit(): void {
    this.moduleLolService.getAllLol().subscribe({
      next: (moduleLol) => (this.moduleLol = moduleLol),
      error: (error) => console.error(error),
    });
  }
}
