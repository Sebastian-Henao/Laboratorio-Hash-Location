import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'marvel-rivals',
    loadChildren: () => import('./modules/module-marvel-rivals/module-marvel-rivals.module').then(m => m.ModuleMarvelRivalsModule)
  },  
  {
    path: '**',
    redirectTo: 'marvel-rivals',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
