import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  kitties:Array<any> = [];
  colNum: number = 15;
  rowNum: number = 4;

  doScroll: boolean = false;
  doGrow: boolean = false;

  grow: any =  {run: false, min_speed: 1, max_speed: 10, speed:{}, min_delay: 0, max_delay: 10, delay:{}, min_size: 1, max_size: 2, sizes: {}};
  lines: any = {run: true, min_speed: 1, max_speed: 10, speed:{}, min_delay: 0, max_delay: 10, delay:{}};


  centerLogoSrc: any = false;
  isHome: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.generateKitties();
  }

  constructor(router:Router) {
    router.events.forEach((e) => {
    if(e instanceof NavigationEnd) {

      if (e.url === "/faq")
      {
        this.doScroll = false;
        this.isHome = false;
        let __this = this;
        setTimeout(function(){
           let scroller = document.body.querySelector("#kittyScroller");
           __this.centerLogoSrc = 'assets/faq-header.png';
           // __this.animateScroll(scroller, "scrollLeft", "", scroller.scrollLeft, 500, 500, true);
        }, 1000);
       
      }
      else if (e.url === "/roadmap")
      {
        this.doScroll = false;
        this.isHome = false;
        let __this = this;
        setTimeout(function(){
           let scroller = document.body.querySelector("#kittyScroller");
           __this.centerLogoSrc = 'assets/roadmap-header.png';
           // __this.animateScroll(scroller, "scrollLeft", "", scroller.scrollLeft, 500, 500, true);
        }, 1000);
      }
      else if (e.url === "/downloads")
      {
        this.doScroll = false;
        this.isHome = false;
        let __this = this;
        setTimeout(function(){
           let scroller = document.body.querySelector("#kittyScroller");
           __this.centerLogoSrc = 'assets/downloads-header.png';
           // __this.animateScroll(scroller, "scrollLeft", "", scroller.scrollLeft, 500, 500, true);
        }, 1000);
      }
      else if (e.url === "/home" || e.url === "/")
      {
        console.log("Setting is home!");
        this.doScroll = true;
        this.centerLogoSrc = false;
        this.isHome = true;
      }
      else
      {
        //If it isn't an override page, enable scroll
        this.doScroll = true;
        this.centerLogoSrc = false;
        this.isHome = false;
      }
    }
    else if (e instanceof NavigationStart)
    {
        //Scroll under on nav change
        if (document.body.querySelector("#notification-area"))
        {
          window.scroll(0, 160);
        }
    }
  });
  }

  isiOS()
  {
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }

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

  private generateKitties()
  {

    this.colNum = Math.round(window.screen.width / 100);

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

    this.kitties = [];

    for (let i = 0; i < this.colNum * this.rowNum; i++)
      {
        let obj = {
          image: 'assets/generated_kitties/small/' + i % 100 + '.png',//'assets/home/Kitty-' + ((i % 29) + 1) + '.svg',
          background_color: colors[i % colors.length]
        };
        this.kitties.push(obj);
      }

      let __this = this;
     setTimeout(function(){
       let scroller = document.body.querySelector("#kittyScroller");

       let container = document.body.querySelector("#kitty-shell-container");

       let center = ((scroller.clientWidth + scroller.scrollLeft) / 2);
       let center_cat = __this.closest(center, container.children);

       scroller.scrollTo((center_cat.offsetLeft + (center_cat.offsetWidth / 2)) - (scroller.clientWidth / 2), 0);
     });
     
  }
  
  closest (num:any, arr:any) {
    var curr = arr[0];
    var diff = Math.abs (num - curr.offsetLeft);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val].offsetLeft);
        if (newdiff < diff && arr[val].offsetTop > 50 && arr[val].offsetTop < 290) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}

  ngOnInit() { 

    var banner_video:any = document.body.querySelector("video[autoplay]");
    if (banner_video && !this.isiOS())
    {
      banner_video.play();
    }
    
    let __this = this;

      this.generateKitties();

      this.generateRandomLinesDelay();
      this.generateRandomLinesSpeed();

      this.generateRandomGrowDelay();
      this.generateRandomGrowSpeed();

    setTimeout(function(){
    
      let step = 500;

      let top = 0;
      let left = step;

      let scroller = document.body.querySelector("#kittyScroller");
      let container = scroller.children[0];

       __this.animateScroll(scroller, "scrollLeft", "", scroller.scrollLeft, left, 500, true);
   

      scroller.classList.add('fade-in');
      
      let max_width = container.clientWidth - (step * 4);
      let max_height = container.clientHeight - step;

      let scrollLeft = true;
      let reverse_left = false;
      let reverse_top = false;

      setInterval(function(){

      if (scrollLeft && !reverse_left && left + step >= max_width)
      {
        reverse_left = true;
      }
      else if (scrollLeft && reverse_left && left - step <= step)
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


      left = Math.max(100, left);
      if (__this.doScroll)
      {
         __this.animateScroll(scroller, "scrollLeft", "", scroller.scrollLeft, left, 700, true);
      }
     
      }, 10000);
    });	
  }

  private animateScroll(elem:any, style:any, unit:any, from:any, to:any, time:any, prop:any) {
      if (!elem) {
          return;
      }
      var start = new Date().getTime(),
          timer = setInterval(function () {
              var step = Math.min(1, (new Date().getTime() - start) / time);
              if (prop) {
                  elem[style] = (from + step * (to - from))+unit;
              } else {
                  elem.style[style] = (from + step * (to - from))+unit;
              }
              if (step === 1) {
                  clearInterval(timer);
              }
          }, 25);
      if (prop) {
          elem[style] = from+unit;
      } else {
          elem.style[style] = from+unit;
      }
  }




}
