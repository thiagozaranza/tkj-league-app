import { ActionReducerMap} from '@ngrx/store';

import * as fromTeams from './teams/teams.reducer';

export interface AppState {
  teams: fromTeams.TeamsState
}

export const reducers: ActionReducerMap<AppState> = {  
  teams: fromTeams.teamsReducer
};