import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }
