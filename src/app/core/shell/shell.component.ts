import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  kitties:Array<any> = [];
  colNum: number = 34;

  constructor() { }

  getDelay(index:any) {

    return (index % 5) + 's';
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

      for (let i = 0; i < 375; i++)
      {
        let obj = {
          image: 'assets/generated_kitties/small/' + i % 100 + '.png',
          background_color: colors[i % colors.length]
        };
        __this.kitties.push(obj);
      }

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
      
      let max_width = container.clientWidth - (step * 2);
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

      scroller.scroll({
        top: top, 
        left: left, 
        behavior: 'smooth' 
      });

      }, 5000);
    });	
  }




}
