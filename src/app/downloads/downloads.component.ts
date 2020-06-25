import { Component, OnInit, Inject } from '@angular/core';
import { DownloadService } from '../shared/download.service';
import { DOCUMENT } from '@angular/common';
import { environment } from '@env/environment';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {
  wallets: any;

  constructor(@Inject(DOCUMENT) private document: any,
  			  private downloadService: DownloadService) {
            this.wallets = [
              {
                "link": "https://s3-ap-southeast-1.amazonaws.com/downloads.skycoin.com/kittycash/KittyCash-0.4.1.AppImage",
                "os": "linux",
              },
              {
                "link": "https://s3-ap-southeast-1.amazonaws.com/downloads.skycoin.com/kittycash/kittycash-0.4.1-gui-osx.dmg",
                "os": "mac",
              },
              {
                "link": "https://s3-ap-southeast-1.amazonaws.com/downloads.skycoin.com/kittycash/kittycash-0.4.1-gui-win-setup.exe",
                "os": "windows",
              }
            ];
          }

  ngOnInit() { }

  downloadWallet() {
    this.downloadService.getDownloadLink().then(
      url => {
         this.document.location.href = url;
      });
  }

}
