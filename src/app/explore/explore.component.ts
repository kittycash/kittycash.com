import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import * as kitties from './kitties.json';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  kitties: any;

  image_colors: Array<any> = [
    'rgb(255, 249, 205)',
    'rgb(255, 178, 178)',
    'rgb(198, 255, 176)',
    'rgb(218, 227, 237)',
    'rgb(210, 188, 243)',
    'rgb(157, 188, 253)',
    'rgb(191, 236, 254)',
    'rgb(240, 240, 128)'
  ]

  constructor() { 
  	this.kitties = kitties;
  }

  ngOnInit() { }


  showOwner(cat:any)
  {
  	cat.showOwner = true;
  }

  hideOwner(cat:any)
  {
  	cat.showOwner = false;
  }

}
