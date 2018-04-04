import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from '../home/aquarium/aquarium.component';
import { GameComponent } from "../home/game/game.component";
import { LoaderComponent } from './loader/loader.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    AquariumComponent,
    GameComponent,
    SafePipe
  ],
  exports: [
    LoaderComponent,
    AquariumComponent,
    GameComponent
  ]
})
export class SharedModule { }
