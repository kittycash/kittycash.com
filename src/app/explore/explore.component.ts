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
