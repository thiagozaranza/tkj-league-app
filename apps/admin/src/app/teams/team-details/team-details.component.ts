import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Team } from 'libs/core-data/src';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent {
  originalName: string;
  selectedTeam: Team;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set team(value: Team) {
    if (value) { this.originalName = value.name; }
    this.selectedTeam = Object.assign({}, value);
  }
}

