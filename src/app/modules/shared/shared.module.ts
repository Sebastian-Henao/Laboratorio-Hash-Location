import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [BadgeComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [BadgeComponent, NavbarComponent],
})
export class SharedModule {}
