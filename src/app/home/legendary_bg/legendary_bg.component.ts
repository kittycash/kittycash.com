import { Component, OnInit, Directive, ElementRef, HostListener, HostBinding, Renderer, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'legendary-bg',
  templateUrl: './legendary_bg.component.html',
  styleUrls: ['./legendary_bg.component.scss']
})
export class LegendaryBGComponent implements OnInit {

  private el: any;

  constructor(el: ElementRef) {
  	this.el = el;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {

    this.setBGSize();

  }
  ngOnInit() {
    setTimeout(()=>{
      this.setBGSize();
    }, 250);
    
  } 

  private setBGSize() {
    let container = this.el.nativeElement.querySelector("#legendary-bg");

    container.style.display = "block"

    let legendary_container = document.body.querySelector("#legendary-container-2");

    let top = this.el.nativeElement.querySelector("#l-top");
    let fill = this.el.nativeElement.querySelector("#l-filler");
    let bottom = this.el.nativeElement.querySelector("#l-bottom");
   
    let content_height = legendary_container.clientHeight;

    //Set the top of fill to the height of top
    fill.style.top = (top.clientHeight) + "px";

    //Set the bottoms bottom to half the height
    bottom.style.bottom = (bottom.clientHeight / 2) + "px";

    //Set the height of fill to be the height of the main element minus the heights of top and bottom
    fill.style.height = (container.clientHeight - top.clientHeight - bottom.clientHeight - (bottom.clientHeight / 2)) + "px";    
  }

}
