import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { KittyDropRoutingModule } from './kittydrop-routing.module';
import { KittyDropComponent } from './kittydrop.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    KittyDropRoutingModule
  ],
  declarations: [
    KittyDropComponent
  ]
})
export class KittyDropModule { }
