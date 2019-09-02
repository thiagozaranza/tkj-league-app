import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TeamsService } from './state/teams/teams.service';
import { StateModule } from './state/state.module';
import { NotificationsService } from './notifications/notifications.service';

@NgModule({
  providers: [
    TeamsService,
    NotificationsService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StateModule
  ],
})
export class CoreDataModule {}
