import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RoadmapRoutingModule
  ],
  declarations: [
    RoadmapComponent
  ]
})
export class RoadmapModule { }
