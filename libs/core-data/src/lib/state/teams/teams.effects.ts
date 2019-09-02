import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Team } from './team.model';
import { TeamsService } from './teams.service';

import {
  LoadTeams, TeamsLoaded,
  AddTeam, TeamAdded, 
  UpdateTeam, TeamUpdated,
  DeleteTeam, TeamDeleted,
  TeamsActionTypes,
} from './teams.actions';
import { TeamsState } from './teams.reducer';

@Injectable({providedIn: 'root'})
export class TeamsEffects 
{
  // @Effect() effect$ = this.actions$.ofType(TeamsActionTypes.TeamsAction);

  @Effect()
  loadTeams$ = this.dataPersistence.fetch(TeamsActionTypes.LoadTeams, {
    run: (action: LoadTeams, state: TeamsState) => {
      return this.teamsService.all().pipe(map((res: Team[]) => new TeamsLoaded(res['list'])))
    },

    onError: (action: LoadTeams, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addTeam$ = this.dataPersistence.pessimisticUpdate(TeamsActionTypes.AddTeam, {
    run: (action: AddTeam, state: TeamsState) => {
      return this.teamsService.create(action.payload).pipe(map((res: Team) => new TeamAdded(res)))
    },

    onError: (action: AddTeam, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateTeam$ = this.dataPersistence.pessimisticUpdate(TeamsActionTypes.UpdateTeam, {
    run: (action: UpdateTeam, state: TeamsState) => {
      return this.teamsService.update(action.payload).pipe(map((res: Team) => new TeamUpdated(res)))
    },

    onError: (action: UpdateTeam, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  deleteTeam$ = this.dataPersistence.pessimisticUpdate(TeamsActionTypes.DeleteTeam, {
    run: (action: DeleteTeam, state: TeamsState) => {
      return this.teamsService.delete(action.payload).pipe(map(_ => new TeamDeleted(action.payload)))
    },

    onError: (action: DeleteTeam, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TeamsState>,
    private teamsService: TeamsService
  ) {}
}
