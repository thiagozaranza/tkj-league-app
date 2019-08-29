import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { TeamsActions, TeamsActionTypes } from './teams.actions';
import { Team } from './team.model';

/**
 * Interface to the part of the Store containing TeamsState
 * and other information related to TeamsData.
 */
export interface TeamsState extends EntityState<Team> {
  selectedTeamId: string | null;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();

export const initialState: TeamsState = adapter.getInitialState({
  // additional entity state properties
  selectedTeamId: null,
});

export function teamsReducer(state = initialState, action: TeamsActions): TeamsState {
  switch (action.type) {
    case TeamsActionTypes.TeamSelected: {
      return Object.assign({}, state, { selectedTeamId: action.payload });
    }

    case TeamsActionTypes.TeamsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case TeamsActionTypes.TeamAdded: {
      return adapter.addOne(action.payload, state);
    }

    case TeamsActionTypes.TeamUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case TeamsActionTypes.TeamDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedTeamId = (state: TeamsState) => state.selectedTeamId;

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of team ids
export const selectTeamIds = selectIds;

// select the dictionary of team entities
export const selectTeamEntities = selectEntities;

// select the array of teams
export const selectAllTeams = selectAll;

// select the total team count
export const selectTeamTotal = selectTotal;
