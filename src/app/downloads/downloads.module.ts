import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsComponent } from './downloads.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DownloadsRoutingModule
  ],
  declarations: [
    DownloadsComponent
  ]
})
export class DownloadsModule { }
