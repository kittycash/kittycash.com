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

  constructor(@Inject(DOCUMENT) private document: any,
  			  private downloadService: DownloadService) { }

  ngOnInit() { }

  downloadWallet() {
    this.downloadService.getDownloadLink().then(
      url => {
         this.document.location.href = url;
      });
  }

}
