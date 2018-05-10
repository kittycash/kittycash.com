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
            '* <=> *', [animate(100, style({opacity: 0.8})), animate(200, style({opacity: 1}))])
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

  constructor(@Inject(DOCUMENT) private document: any, 
              private renderer: Renderer2, 
              private blogService: BlogService, 
              private downloadService: DownloadService) {
  	 this.renderer.addClass(document.getElementById("kc"), 'blob');
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
    }, 5000);
  }

  setCats() {

    for (let i = 0; i < 3; i++)
    {
      if (this.currentIndex + 1 >= this.kitties.length)
      {
        this.currentIndex = 0;
      }
      else
      {
        this.currentIndex = this.currentIndex + 1;
      }

      this.cats[i] = this.kitties[this.currentIndex];
    }
    
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.getElementById("kc"), 'blob');
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
