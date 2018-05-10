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

    let what_is_container = document.body.querySelector("#what_is_container");

    //Pin the top of the blob to the middle of the "read more" button

    let read_more = document.body.querySelector("#read_more_button");
    let read_more_coords = this.getCoords(read_more);
    let what_is_coords = this.getCoords(what_is_container);
    let container_top = (read_more_coords.top - what_is_coords.top) + (read_more.clientHeight / 2);

    container.style.display = "block"

    let legendary_container = document.body.querySelector("#legendary-container-2");

    let top = this.el.nativeElement.querySelector("#l-top");
    let fill = this.el.nativeElement.querySelector("#l-filler");
    let bottom = this.el.nativeElement.querySelector("#l-bottom");
   
    let content_height = legendary_container.clientHeight - (bottom.clientHeight * 2) + 50;

    // 1125 - 315 - 473 - 150
    // container - top - filler - bottom
    
    container.style.top = container_top + "px";
    //Set the top of fill to the height of top
    fill.style.top = top.clientHeight + "px";

    //Set the bottoms bottom to half the height
    bottom.style.bottom = container.clientHeight - top.clientHeight - content_height - bottom.clientHeight + "px";

    //Set the height of fill to be the height of the main element minus the heights of top and bottom
    fill.style.height = (content_height + 5) + "px";//(container.clientHeight - top.clientHeight - bottom.clientHeight - (bottom.clientHeight / 2)) + "px";    
  
    // console.log(bottom.getBoundingClientRect());
    var top_pos = bottom.getBoundingClientRect().y
    var hank = top_pos - Math.floor(top_pos);
    if (hank < 0.8)
    {
      console.log("It's bad!");
      console.log(hank);
    }
    }



 
  private getCoords(elem:any) { 
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

}
