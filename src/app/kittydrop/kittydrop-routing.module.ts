import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { KittyDropComponent } from './kittydrop.component';

const routes: Routes = [
  Route.withShell([
    { path: 'kittydrop', component: KittyDropComponent, data: { title: extract('KittyDrop Submission Form') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KittyDropRoutingModule { }
