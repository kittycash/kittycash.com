import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ScoreboardRoutingModule } from './scoreboard-routing.module';
import { ScoreboardComponent } from './scoreboard.component';

import { ScoreboardService } from './scoreboard.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ScoreboardRoutingModule
  ],
  declarations: [
    ScoreboardComponent
  ],
  providers: [
  	ScoreboardService
  ]
})
export class ScoreboardModule { }
