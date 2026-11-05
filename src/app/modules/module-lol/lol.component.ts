import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de League of Legends (LoL).
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con el módulo, mostrando los componentes hijos dentro del `<router-outlet>`.
 */
@Component({
  selector: 'app-lol',
  standalone: false,
  template: '<router-outlet></router-outlet>',
})
export class LolComponent {}
