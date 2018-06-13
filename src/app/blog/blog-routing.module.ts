import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  Route.withShell([
    { path: 'blog', component: BlogComponent, data: { title: extract('Blog') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BlogRoutingModule { }
