import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule]
})
export class SharedModule {

}
