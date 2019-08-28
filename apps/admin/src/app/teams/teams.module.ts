import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsIndexComponent } from './teams-index/teams-index.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { MaterialModule } from '@tkj/material';

@NgModule({
  declarations: [
    TeamsIndexComponent, 
    TeamsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TeamsModule { }
