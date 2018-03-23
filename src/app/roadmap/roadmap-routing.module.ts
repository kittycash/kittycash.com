import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { RoadmapComponent } from './roadmap.component';

const routes: Routes = [
  Route.withShell([
    { path: 'roadmap', component: RoadmapComponent, data: { title: extract('Roadmap') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoadmapRoutingModule { }
