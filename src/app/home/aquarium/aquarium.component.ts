import { Component, OnInit, Directive, ElementRef, HostListener, HostBinding, Renderer, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss'],
  animations: [
  trigger('swimAnimation', [
      state('swim', style({
        transform: 'translateX(500%)'
      })),
      state('swimaway', style({
        transform: 'translateX(5000%)'
      })),
      state('swimhome', style({
        transform: 'translateX(0%)'
      })),
      transition('* <=> *', animate('1000ms linear'))
    ])
	
	]
})
export class AquariumComponent implements OnInit {

  private el: any;

  constructor(el: ElementRef) {
  	this.el = el;
  }

  fishes: Array<object> = [];
  dWidth: number;
  dHeight: number;
  numAnimations: number = 2;

  ngOnInit() {
    //Build our aquarium
    setTimeout(() => {
      let max_height = 0;
      let elm = document.body.querySelector("#l-filler");

      console.log(elm);
      if (elm)
      {
        this.dWidth = elm.clientWidth;
        this.dHeight = elm.clientHeight;
      }

      console.log("Width: " + this.dWidth + " Height: " + this.dHeight);

      let center_y = this.dHeight / 2;

      const cols = 12;

      const m = [0, 0.5, -1, 1, -0.5, 0.9, -0.6, -0.8, 0.5, -1.4, 1, 1.2];

      for (var i = 0; i < cols; i++)
      {
        //Evenly distribute across the x axis and stagger on the y

        let x = ((this.dWidth / cols) * i) - 40;

        let y = center_y + (m[(i % m.length)] * (center_y));

        const fish = {
          id: i,
          x: x,
          y: y,
          swimming: false
        };
        this.fishes.push(fish);
      }
    }, 1000);
    
   
  }

  mouseIn(fish:any) {
    if (!fish.swimming)
    {
      fish.swimming = Math.floor(Math.random() * (this.numAnimations - 1 + 1)) + 1; 
    }
  	
  }

 

}
