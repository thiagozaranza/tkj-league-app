import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team, TeamsFacade } from 'libs/core-data/src';


@Component({
  selector: 'app-index-teams',
  templateUrl: './teams-index.component.html',
  styleUrls: ['./teams-index.component.scss']
})
export class TeamsIndexComponent implements OnInit {
  teams$: Observable<Team[]> = this.teamsFacade.allTeams$;
  currentTeam$: Observable<Team> = this.teamsFacade.currentTeam$;

  constructor(
    private teamsFacade: TeamsFacade,
  ) { 

  }

  ngOnInit() {
    this.teamsFacade.loadTeams();
    this.teamsFacade.mutations$.subscribe(_ => this.resetCurrentTeam());
    this.resetCurrentTeam();
  }

  resetCurrentTeam() {
    this.selectTeam({id: null});
  }

  selectTeam(team) {
    this.teamsFacade.selectTeam(team.id);
  }

  saveTeam(team) {
    if (!team.id) {
      this.teamsFacade.addTeam(team);
    } else {
      this.teamsFacade.updateTeam(team);
    }
  }

  deleteTeam(team) {
    this.teamsFacade.deleteTeam(team);
  }
}