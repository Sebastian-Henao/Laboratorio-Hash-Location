import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModuleLolComponent } from './pages/list-module-lol/list-module-lol.component';

const routes: Routes = [
  {
    path: '',
    component: ListModuleLolComponent,
  },
  {
    path: 'list-lol',
    component: ListModuleLolComponent,
  },
  {
    path: '**',
    redirectTo: 'list-lol',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleLolRoutingModule {}
