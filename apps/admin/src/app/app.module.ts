import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TeamsModule } from './teams/teams.module';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from 'libs/core-data/src';
import { MaterialModule } from 'libs/material/src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreDataModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    LayoutModule, 
    PagesModule,
    TeamsModule,
    MaterialModule,
    NxModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
