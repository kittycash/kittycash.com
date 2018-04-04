import { Component, OnInit, Directive, ElementRef, HostListener, HostBinding, Renderer, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
 
  gameUrl: string;

  constructor() { 
  	this.gameUrl = environment.serverUrl + "/scoreboard/game?show_scoreboard_link=true";
  }

 
  ngOnInit() {
    
  }
}
