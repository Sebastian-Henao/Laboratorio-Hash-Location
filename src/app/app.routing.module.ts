import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'juegos',
    loadChildren: () =>
      import('./modules/module-juegos/module-juegos.module').then(
        (module) => module.ModuleJuegosModule,
      ),
  },
  {
    path: 'marvel-rivals',
    loadChildren: () =>
      import('./modules/module-marvel-rivals/module-marvel-rivals.module').then(
        (module) => module.ModuleMarvelRivalsModule,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'juegos',
  },
  {
    path: '**',
    redirectTo: 'juegos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
