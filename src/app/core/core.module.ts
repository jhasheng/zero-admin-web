import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Angular Material */
import { MdToolbarModule, MdCardModule, MdButtonModule, MdCheckboxModule, MdRadioModule } from '@angular/material';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class CoreModule { }
