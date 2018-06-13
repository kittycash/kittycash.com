import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BlogService } from '../home/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

	articles: any;
	isLoading: boolean;
	
	constructor(private blogService: BlogService) {  }

	ngOnInit() { 
		this.blogService.getBlogArticles()
	      .pipe(finalize(() => { this.isLoading = false; }))
	      .subscribe((articles: any) => { this.articles = articles; });

	}

}
