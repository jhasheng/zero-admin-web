import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

/* angular material */
import { MdToolbarModule, MdCardModule, MdCheckboxModule, MdRadioModule } from '@angular/material';

/* Feature Modules */
import { CoreModule } from './core/core.module';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
/* App Root */
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    FormsModule,
    MdToolbarModule,
    MdCardModule,
    MdCheckboxModule,
    MdRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
