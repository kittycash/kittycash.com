import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FaqRoutingModule
  ],
  declarations: [
    FaqComponent
  ]
})
export class FaqModule { }
