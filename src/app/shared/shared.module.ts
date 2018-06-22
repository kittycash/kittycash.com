import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from '../home/aquarium/aquarium.component';
import { LegendaryBGComponent } from '../home/legendary_bg/legendary_bg.component';
import { GameComponent } from "../home/game/game.component";
import { LoaderComponent } from './loader/loader.component';
import { DownloadService } from './download.service';
import { SafePipe } from './safe.pipe';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    AquariumComponent,
    LegendaryBGComponent,
    GameComponent,
    SafePipe,
    GetInTouchComponent
  ],
  providers: [
    DownloadService
  ],
  exports: [
    LoaderComponent,
    AquariumComponent,
    LegendaryBGComponent,
    GameComponent,
    GetInTouchComponent
  ]
})
export class SharedModule { }
