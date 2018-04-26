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
  iframeHeight: number = 0;

  constructor() { 
    this.gameUrl = environment.serverUrl + "/scoreboard/game?show_scoreboard_link=true";
  }

 
  ngOnInit() {
      let __this = this;
     // Listen to messages from parent window
    this.bindEvent(window, 'message', function (e:any) {
      if (e && e.data && e.data.command && e.data.command == "update height")
      {
          if (e.data.height && e.data.height > 0)
          {
            __this.iframeHeight = e.data.height;
          }
      }
    });
  } 

   private bindEvent(element:any, eventName:any, eventHandler:any) {
        if (element.addEventListener) {
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }

}
