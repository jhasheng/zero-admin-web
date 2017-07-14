import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

/* angular material */
import { MdToolbarModule, MdCardModule, MdCheckboxModule, MdRadioModule } from '@angular/material';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { ZeroModule } from './components/zero.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';

/* Components and Directives */
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';


@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ZeroModule,
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
