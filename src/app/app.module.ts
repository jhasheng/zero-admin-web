import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/* Feature Modules */
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';

/* Components and Directives */
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,

    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdRadioModule,
    MdExpansionModule,
    MdSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
