import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { I18nService } from '../../i18n.service';
import { DownloadService } from '../../../shared/download.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuHidden = true;

  constructor(@Inject(DOCUMENT) private document: any,
              private router: Router,
              private i18nService: I18nService,
              private downloadService: DownloadService) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  downloadWallet() {
    this.downloadService.getDownloadLink().then(
      url => {
         this.document.location.href = url;
      });
  }

}
