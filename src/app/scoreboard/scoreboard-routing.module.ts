import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ScoreboardComponent } from './scoreboard.component';

const routes: Routes = [
  Route.withShell([
    { path: 'scoreboard', component: ScoreboardComponent, data: { title: extract('Scoreboard') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ScoreboardRoutingModule { }
