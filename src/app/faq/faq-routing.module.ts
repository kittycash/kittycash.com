import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { FaqComponent } from './faq.component';

const routes: Routes = [
  Route.withShell([
    { path: 'faq', component: FaqComponent, data: { title: extract('FAQ') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FaqRoutingModule { }
