import { Component, Renderer2, OnInit, OnDestroy, Inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BlogService } from './blog.service';
import { DOCUMENT } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
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
  

  constructor(@Inject(DOCUMENT) private document: any, 
              private renderer: Renderer2, 
              private blogService: BlogService, 
              private deviceService: DeviceDetectorService) {
  	 this.renderer.addClass(document.getElementById("kc"), 'blob');
     this.kitties = kitties;
  }

  ngOnInit() {
    this.isLoading = true;
    this.blogService.getBlogArticles()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((articles: any) => { this.articles = articles; });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.getElementById("kc"), 'blob');
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
    let deviceInfo = this.deviceService.getDeviceInfo();

    let url = 'https://github.com/kittycash/wallet/releases';

    switch(deviceInfo.os) {
    case 'mac':
        url = 'https://github.com/kittycash/wallet/releases/download/untagged-84ea36572e1d78bb9275/kittycash-0.0.1-gui-osx.dmg';
        break;
    case 'windows':
        url = 'https://github.com/kittycash/wallet/releases/download/untagged-84ea36572e1d78bb9275/kittycash-0.0.1-gui-win-setup.exe';
        break;
    case 'linux':
        url = 'https://github.com/kittycash/wallet/releases/download/untagged-84ea36572e1d78bb9275/kittycash-0.0.1-gui-linux-x64.AppImage';
        break;
    default:
        url = 'https://github.com/kittycash/wallet/releases';
    }

    this.document.location.href = url;
  }


}
