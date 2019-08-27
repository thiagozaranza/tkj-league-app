import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TeamsService } from './teams/teams.service';
import { StateModule } from './state/state.module';

@NgModule({
  providers: [
    TeamsService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StateModule
  ],
})
export class CoreDataModule {}
