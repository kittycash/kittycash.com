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

  ngOnInit() {
    //Build our aquarium

    let max_height = 0;
    let elm = this.el.nativeElement.children[0];

    if (elm)
    {
    	this.dWidth = elm.offsetWidth;
    	this.dHeight = elm.offsetHeight;
    }

    let center_y = this.dHeight / 2;

    const rows = 4;
    const cols = 10;

    const m = [0, 0.5, -1, 1, -0.5, 0.9, -0.6, -0.8, 0.5, 1, 1.5];


    for (var i = 0; i < cols; i++)
    {
    	//Evenly distribute across the x axis and stagger on the y

    	let x = ((this.dWidth / cols) * i) - 40;

    	let y = center_y + (m[(i % m.length)] * (center_y));

    	const fish = {
    		id: i,
    		x: x,
    		y: y
    	};
    	this.fishes.push(fish);
    }
   
  }

  mouseIn(fish:any) {

  	if (fish && fish.swim && fish.swim.value == "swim")
  	{
  		fish.swim = {
	        value: 'swimaway'
	    };
  	}
  	else
  	{
  		fish.swim = {
	        value: 'swim'
	    };
  	}
  	
  	setTimeout(()=>{  
	    fish.swim = {value: 'swimhome'};
	 },2000);
  }

 

}
