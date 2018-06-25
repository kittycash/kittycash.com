import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ExploreRoutingModule,
    SharedModule
  ],
  declarations: [
    ExploreComponent
  ]
})
export class ExploreModule { }
