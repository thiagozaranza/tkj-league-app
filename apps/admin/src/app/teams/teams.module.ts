import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsIndexComponent } from './teams-index/teams-index.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { MaterialModule } from '@tkj/material';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TeamsIndexComponent, 
    TeamsListComponent,
    TeamDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class TeamsModule { }
