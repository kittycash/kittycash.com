import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import * as faqs from './faq.json';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: any;
  currentFaq: any;

  constructor() { 
    this.faqs = faqs;
  }

  ngOnInit() {

  }

}
