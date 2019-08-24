import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { TeamsActionTypes } from './teams.actions';
import * as TeamsActions from './teams.actions';
import { TeamsState } from './teams.reducer';
import { selectCurrentTeam, selectAllTeams } from '..';

@Injectable({
  providedIn: 'root'
})
export class TeamsFacade {
  allTeams$ = this.store.pipe(select(selectAllTeams));
  currentTeam$ = this.store.pipe(select(selectCurrentTeam));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === TeamsActionTypes.AddTeam
        || action.type === TeamsActionTypes.UpdateTeam
        || action.type === TeamsActionTypes.DeleteTeam
      )
    );

  constructor(private store: Store<TeamsState>, private actions$: ActionsSubject) {}

  selectTeam(itemId) {
    this.store.dispatch(new TeamsActions.TeamSelected(itemId));
  }

  loadTeams() {
    this.store.dispatch(new TeamsActions.LoadTeams());
  }

  addTeam(item) {
    this.store.dispatch(new TeamsActions.AddTeam(item));
  }

  updateTeam(item) {
    this.store.dispatch(new TeamsActions.UpdateTeam(item));
  }

  deleteTeam(item) {
    this.store.dispatch(new TeamsActions.DeleteTeam(item));
  }
}
