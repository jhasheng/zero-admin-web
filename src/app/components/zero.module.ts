import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarComponent } from './perfect-scrollbar/perfect-scrollbar.component';
import { PerfectScrollbarDirective } from './perfect-scrollbar/perfect-scrollbar.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective]
})
export class ZeroModule { }
