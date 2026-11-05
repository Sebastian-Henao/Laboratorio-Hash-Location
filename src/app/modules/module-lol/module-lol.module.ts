import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleLolRoutingModule } from './module-lol-routing.module';
import { LolComponent } from './lol.component';
import { ListModuleLolComponent } from './pages/list-module-lol/list-module-lol.component';
import { TableModuleLolComponent } from './components/table-module-lol/table-module-lol.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LolComponent, ListModuleLolComponent, TableModuleLolComponent],
  imports: [CommonModule, SharedModule, ModuleLolRoutingModule],
})
export class ModuleLolModule {}
