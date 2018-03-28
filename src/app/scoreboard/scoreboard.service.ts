import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  scoreboard: (s: ScoreContext) => `https://dev.bradk.xyz/scoreboard/${s.span}`
};

export interface ScoreContext {
  span: string;
}

@Injectable()
export class ScoreboardService {

  constructor(private httpClient: HttpClient) { }

  getScores(context: ScoreContext): Observable<object> {
    return this.httpClient
      .get(routes.scoreboard(context))
      .pipe(
        map((body: any) => body.scores),
        catchError(() => of('Error, could not load scores :-('))
      );
  }

}
