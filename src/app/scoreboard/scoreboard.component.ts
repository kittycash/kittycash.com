import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { ScoreboardService } from './scoreboard.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  scores: any;
  span: string;
  isLoading: boolean;

  constructor(private scoreboardService: ScoreboardService) { }

  ngOnInit() { 
  	this.loadScores('day');
  }

  loadScores(span: string) {
  	this.span = span;
  	this.isLoading = true;
    this.scoreboardService.getScores({span: this.span})
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((scores: any) => { this.scores = scores; });
  }

}
