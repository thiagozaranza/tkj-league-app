import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from 'libs/core-data/src';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  @Input() teams: Team[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  trackTeam(index, team) {
    return team._id;
  }

  ngOnInit() {
    
  }

  prepareListState() {
    return this.teams ? this.teams.length : 'pending';
  }
}
