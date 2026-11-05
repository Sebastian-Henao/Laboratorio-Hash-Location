import { Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'juegos' },
  { path: 'juegos', component: JuegosComponent, title: 'Juegos' },
  { path: '**', redirectTo: 'juegos' },
];
