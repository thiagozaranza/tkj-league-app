import { Action } from '@ngrx/store';
import { Team } from './../teams/team.model';

export enum TeamsActionTypes {
  TeamsAction = '[Teams] Action',
  TeamSelected = '[Teams] Selected',
  LoadTeams = '[Teams] Load Data',
  TeamsLoaded = '[Teams] Data Loaded',
  AddTeam = '[Teams] Add Data',
  TeamAdded = '[Teams] Data Added',
  UpdateTeam = '[Teams] Update Data',
  TeamUpdated = '[Teams] Data Updated',
  DeleteTeam = '[Teams] Delete Data',
  TeamDeleted = '[Teams] Data Deleted',
}

export class Teams implements Action {
  readonly type = TeamsActionTypes.TeamsAction;
}

export class TeamSelected implements Action {
  readonly type = TeamsActionTypes.TeamSelected;
  constructor(public payload) { }
}

export class LoadTeams implements Action {
  readonly type = TeamsActionTypes.LoadTeams;
  constructor() { }
}

export class TeamsLoaded implements Action {
  readonly type = TeamsActionTypes.TeamsLoaded;
  constructor(public payload: Team[]) { }
}

export class AddTeam implements Action {
  readonly type = TeamsActionTypes.AddTeam;
  constructor(public payload: Team) { }
}

export class TeamAdded implements Action {
  readonly type = TeamsActionTypes.TeamAdded;
  constructor(public payload: Team) { }
}

export class UpdateTeam implements Action {
  readonly type = TeamsActionTypes.UpdateTeam;
  constructor(public payload: Team) { }
}

export class TeamUpdated implements Action {
  readonly type = TeamsActionTypes.TeamUpdated;
  constructor(public payload: Team) { }
}

export class DeleteTeam implements Action {
  readonly type = TeamsActionTypes.DeleteTeam;
  constructor(public payload: Team) { }
}

export class TeamDeleted implements Action {
  readonly type = TeamsActionTypes.TeamDeleted;
  constructor(public payload: Team) { }
}

export type TeamsActions = Teams
  | TeamSelected
  | LoadTeams
  | TeamsLoaded
  | AddTeam
  | TeamAdded
  | UpdateTeam
  | TeamUpdated
  | DeleteTeam
  | TeamDeleted
;
