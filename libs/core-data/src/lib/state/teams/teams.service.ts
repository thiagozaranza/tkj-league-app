import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Team } from './team.model';
import { NotificationsService } from '../../notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  model = 'teams'

  constructor(
    private http: HttpClient,
    private ns: NotificationsService
  ) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<Team[]>(this.getUrl());
  }

  load(id) {
    return this.http.get<Team>(this.getUrlForId(id));
  }

  loadByCustomer(customerId: string) {
    return this.http.get<Team[]>(this.getUrl(), {params: {customerId}})
      .pipe(
        switchMap(teams => {
          if (teams.length) {
            return of(teams);
          } else {
            return throwError(`No teams exist for customer with ID ${customerId}`);
          }
        }),
        catchError(error => {
          return throwError(error);
        })
      )
  }

  create(team: Team) {
    
    let request$ = this.http.post(this.getUrl(), team);

    request$.subscribe(
      response => {
        this.ns.emit('Created');
      },
      error => {
        this.ns.emit('[ERRO] ' + error.error.message);
      }
    );

    return request$;
  }

  update(team: Team) {
    return this.http.put(this.getUrlForId(team._id), { ...team, _method: 'PUT' });
  }

  delete(team: Team) {
    return this.http.delete(this.getUrlForId(team._id));
  }
}
