import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FaqRoutingModule,
    SharedModule
  ],
  declarations: [
    FaqComponent
  ]
})
export class FaqModule { }
