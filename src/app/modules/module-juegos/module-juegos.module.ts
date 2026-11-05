import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JuegosComponent } from '../../juegos/juegos.component';
import { ModuleJuegosRoutingModule } from './module-juegos-routing.module';

@NgModule({
  declarations: [JuegosComponent],
  imports: [CommonModule, ModuleJuegosRoutingModule],
})
export class ModuleJuegosModule {}
