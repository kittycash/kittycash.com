import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuHidden = true;

  constructor(@Inject(DOCUMENT) private document: any,
              private deviceService: DeviceDetectorService,
              private router: Router,
              private i18nService: I18nService) { }

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
