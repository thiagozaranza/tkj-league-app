import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './domain/layout/layout.module';
import { PagesModule } from './domain/pages/pages.module';
import { CompetitionsModule } from './domain/competitions/competitions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    CompetitionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
