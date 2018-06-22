import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  kitties:Array<any> = [];
  colNum: number = 20;

  doScroll: boolean = false;
  doGrow: boolean = false;

  grow: any =  {run: false, min_speed: 1, max_speed: 10, speed:{}, min_delay: 0, max_delay: 10, delay:{}, min_size: 1, max_size: 2, sizes: {}};
  lines: any = {run: false, min_speed: 1, max_speed: 10, speed:{}, min_delay: 0, max_delay: 10, delay:{}};


  constructor() { }

  getDelay(index:any) {
    return (index % 5) + 's';
  }


  generateRandomGrowDelay() {

    for (var i = 0; i < this.kitties.length; i++)
    {
        let key = 'grow_' + i;
        this.grow.delay[key] = (Math.floor(Math.random() * (this.grow.max_delay - this.grow.min_delay + 1)) + this.grow.min_delay) + 's';
    }
  }

  generateRandomGrowSpeed() {

    for (var i = 0; i < this.kitties.length; i++)
    {
        let key = 'grow_' + i;
        this.grow.speed[key] = (Math.floor(Math.random() * (this.grow.max_speed - this.grow.min_speed + 1)) + this.grow.min_speed) + 's';
    }
  }

  generateRandomLinesDelay() {

    let keys = ['hl', 'gr', 'gl'];

    for (var i = 0; i < this.kitties.length; i++)
    {
      for (var x = 0; x < keys.length; x++)
      {
        let key = keys[x] + i;
        this.lines.delay[key] = (Math.floor(Math.random() * (this.lines.max_delay - this.lines.min_delay + 1)) + this.lines.min_delay) + 's';
      } 
    }
  }

  generateRandomLinesSpeed() {

    let keys = ['hl', 'gr', 'gl'];

    for (var i = 0; i < this.kitties.length; i++)
    {
      for (var x = 0; x < keys.length; x++)
      {
        let key = keys[x] + i;
        this.lines.speed[key] = (Math.floor(Math.random() * (this.lines.max_speed - this.lines.min_speed + 1)) + this.lines.min_speed) + 's';
    
      } 
    }
  }

  
  ngOnInit() { 

    let __this = this;

    let colors = [
      "rgb(162, 125, 107)",
      "rgb(246, 174, 128)",
      "rgb(210, 196, 219)",
      "rgb(248, 234, 221)",
      "rgb(172, 212, 209)",
      "rgb(132, 215, 245)",
      "rgb(226, 120, 122)",
      "rgb(219, 254, 219)",
      "rgb(201, 187, 209)",
      "rgb(244, 186, 102)",
      "rgb(200, 246, 138)",
      "rgb(235, 247, 139)",
      "rgb(172, 210, 207)",
      "rgb(239, 232, 116)",
      "rgb(220, 167, 92)",
      "rgb(132, 215, 245)"
    ];

      for (let i = 0; i < 60; i++)
      {
        let obj = {
          image: 'assets/generated_kitties/small/' + i % 100 + '.png',
          background_color: colors[i % colors.length]
        };
        __this.kitties.push(obj);
      }

      this.generateRandomLinesDelay();
      this.generateRandomLinesSpeed();

      this.generateRandomGrowDelay();
      this.generateRandomGrowSpeed();

    setTimeout(function(){
    
      let step = 500;

      let top = step;
      let left = step;

      let scroller = document.body.querySelector("#kittyScroller");
      let container = scroller.children[0];

      scroller.scroll({
        top: top, 
        left: left, 
        behavior: 'smooth' 
      });

      scroller.classList.add('fade-in');
      
      let max_width = container.clientWidth - (step * 4);
      let max_height = container.clientHeight - step;

      let scrollLeft = true;
      let reverse_left = false;
      let reverse_top = false;

      setInterval(function(){

      if (!reverse_left && left + step >= max_width)
      {
        reverse_left = true;
      }
      else if (reverse_left && left - step <= step)
      {
        reverse_left = false;
      }

      if (!scrollLeft && !reverse_top && top + step > max_height)
      {
        reverse_top = true;
      }
      else if (!scrollLeft && reverse_top && top - step < step)
      {
        reverse_top = false;
      }

      if (scrollLeft)
      {
       scrollLeft = false;
       if (reverse_left)
       {
         left = left - step;
       }
       else
       {
         left = left + step;
       }
      }
      else
      {
       scrollLeft = true;
       if (reverse_top)
       {
        top = top - step;
       }
       else
       {
         top = top + step;
       }
      }    

      if (__this.doScroll)
      {
         scroller.scroll({
            top: top, 
            left: left, 
            behavior: 'smooth' 
          });

      }
     
      }, 5000);
    });	
  }




}
