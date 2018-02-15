import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AdalService, AdalGuard} from 'adal-angular4';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    AdalService, AdalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
