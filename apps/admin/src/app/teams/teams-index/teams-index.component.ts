import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'libs/core-data/src/lib/teams/team.model';
import { TeamsFacade } from 'libs/core-data/src/lib/state/teams/teams.facade';



@Component({
  selector: 'app-index-teams',
  templateUrl: './teams-index.component.html',
  styleUrls: ['./teams-index.component.scss']
})
export class TeamsIndexComponent implements OnInit {
  teams$: Observable<Team[]> ;
  currentTeam$: Observable<Team> ;

  constructor(
    public teamsFacade: TeamsFacade,
  ) { 
    this.teams$ = teamsFacade.allTeams$
    this.currentTeam$= teamsFacade.currentTeam$
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