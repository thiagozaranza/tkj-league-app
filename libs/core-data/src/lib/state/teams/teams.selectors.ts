import * as fromTeams from './../teams/teams.reducer';
import { Team } from '../../teams/team.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const emptyTeam: Team = {
    id: null,
    name: ''
}

export const selectTeamsState = createFeatureSelector<fromTeams.TeamsState>('teams');

export const selectTeamIds = createSelector(
  selectTeamsState,
  fromTeams.selectTeamIds
);

export const selectTeamEntities = createSelector(
  selectTeamsState,
  fromTeams.selectTeamEntities
);

export const selectAllTeams = createSelector(
  selectTeamsState,
  fromTeams.selectAllTeams
);

export const selectCurrentTeamId = createSelector(
  selectTeamsState,
  fromTeams.getSelectedTeamId
);

export const selectCurrentTeam = createSelector(
  selectTeamEntities,
  selectCurrentTeamId,
  (teamEntities, teamId) => {
    return teamId ? teamEntities[teamId] : emptyTeam;
  }
);