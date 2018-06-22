import { Component, Renderer2, OnInit, OnDestroy, Inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { trigger, style, animate, transition } from '@angular/animations';
import { BlogService } from './blog.service';
import { DownloadService } from '../shared/download.service';
import { DOCUMENT } from '@angular/common';
import * as kitties from './kitties.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
        trigger('trans', [
            transition(
            '* <=> *', [animate(1000, style({opacity: 0})), animate(2000, style({opacity: 1}))])
        ])
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

  articles: any;
  kitties: any;
  isLoading: boolean;
  currentIndex: number = -1;
  rmap: string = 'active';
  cats: Array<any> = [];  
  total_cats: number = 200;

  constructor(@Inject(DOCUMENT) private document: any, 
              private renderer: Renderer2, 
              private blogService: BlogService, 
              private downloadService: DownloadService) {
  	 this.renderer.addClass(document.getElementById("kc"), 'blob');
     this.renderer.removeClass(document.getElementById("kc"), 'under-nav');
     this.renderer.addClass(document.getElementById("bc"), 'show');
     this.renderer.addClass(document.getElementById("sc"), 'show');
     this.kitties = kitties;
  }

  ngOnInit() {
    this.isLoading = true;
    this.blogService.getBlogArticles()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((articles: any) => { this.articles = articles; });

      this.setCats();
 
   let __this = this;
    setInterval(() => {

      if (__this.rmap == 'active')
      {
        __this.rmap = 'inactive';
      }
      else
      {
        __this.rmap = 'active';
      }
      this.setCats();
    }, 30000);
  }

  setCats() {
    for (let i = 0; i < 3; i++)
    {
      if (this.currentIndex + 1 >= this.total_cats)
      {
        this.currentIndex = 0;
      }
      else
      {
        this.currentIndex = this.currentIndex + 1;
      }

      this.cats[i] = {
        name: "Kitty " + this.currentIndex,
        priceBTC: "?",
        priceSKY: "?",
        description: "Here is Kitty #" + this.currentIndex,
        img: "assets/generated_kitties/" + this.currentIndex + ".png"
      };
    }
    
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.getElementById("kc"), 'blob');
    this.renderer.removeClass(document.getElementById("bc"), 'show');
    this.renderer.removeClass(document.getElementById("sc"), 'show');
    this.renderer.addClass(document.getElementById("kc"), 'under-nav');
  }

  shouldShow(i:number) {
    if (i >= this.currentIndex && i < this.currentIndex + 3)
    {
      return true;
    }
    return false;
  }

  blogPosts() {
    if (this.articles && this.articles.filter)
    {
      return this.articles.filter((item: any, index: number) => index < 3);
    }
  }

  playGame() {
    const element = this.renderer.selectRootElement('#gameFrame');
    setTimeout(() => {
      element.focus();
      element.contentWindow.postMessage('start game', '*');
    }, 0);
  }

  downloadWallet() {
    this.downloadService.getDownloadLink().then(
      url => {
         this.document.location.href = url;
      });
  }


}
