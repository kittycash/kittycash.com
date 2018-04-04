import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BlogService } from './blog.service';
import * as kitties from './kitties.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  articles: any;
  kitties: any;
  isLoading: boolean;

  constructor(private renderer: Renderer2, private blogService: BlogService) {
  	 this.renderer.addClass(document.body, 'blob');
     this.kitties = kitties;
  }

  ngOnInit() {
    this.isLoading = true;
    this.blogService.getBlogArticles()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((articles: any) => { this.articles = articles; });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'blob');
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


}
