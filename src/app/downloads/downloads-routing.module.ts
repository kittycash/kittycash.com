import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { DownloadsComponent } from './downloads.component';

const routes: Routes = [
  Route.withShell([
    { path: 'downloads', component: DownloadsComponent, data: { title: extract('Downloads') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DownloadsRoutingModule { }
