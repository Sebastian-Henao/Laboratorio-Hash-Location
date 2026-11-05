import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LOL_DATA } from '../../../core/config/lol.config';
import { Lol } from '../interfaces/module-lol.interface';

/**
 * Servicio para gestionar los personajes de League of Legends (LoL).
 *
 * Proporciona acceso al listado de campeones disponibles en la aplicación,
 * permitiendo que los componentes de la vista consuman la información
 * centralizada en `LOL_DATA`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede
 * ser inyectado en cualquier componente del módulo que necesite consultar el
 * catálogo de campeones.
 */
@Injectable({
  providedIn: 'root',
})
export class ModuleLolService {
  /**
   * Obtiene todos los campeones disponibles del módulo LoL.
   *
   * @returns Observable con el listado de campeones (`Lol[]`).
   */
  getAllLol(): Observable<Lol[]> {
    return of(LOL_DATA);
  }
}
