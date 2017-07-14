import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Angular Material */
import {
  MdToolbarModule,
  MdSidenavModule,
  MdListModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdCheckboxModule,
  MdRadioModule
} from '@angular/material';

import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { NAV_DROPDOWN_DIRECTIVES } from '../shared/nav-dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule
  ],
  declarations: [LayoutComponent, NavbarComponent, SidenavComponent, NAV_DROPDOWN_DIRECTIVES],
  exports: [LayoutComponent]
})
export class CoreModule { }
