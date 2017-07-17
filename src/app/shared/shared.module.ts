import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
/* Angular Material */
import {
  MdToolbarModule,
  MdSidenavModule,
  MdListModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdCheckboxModule,
  MdRadioModule,
  MdExpansionModule,
  MdSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule,
    MdExpansionModule,
    MdSlideToggleModule]
})
export class SharedModule {

}
