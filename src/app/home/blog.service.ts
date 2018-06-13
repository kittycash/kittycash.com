import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  blog: () => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KittyCash_com`
};

@Injectable()
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogArticles(): Observable<any> {
    return this.httpClient
      .get(routes.blog())
      .pipe(
        map((body: any) => body.items),
        map((items: any) => {

          let posts = [];
          for (let i = 0; i < items.length; i++)
          {
            let post = items[i];
            
            //Create a summary out of the article

            //Strip all non-text elements
            let div = document.createElement("div");
            div.innerHTML = post.description;
            let summary = div.textContent || div.innerText || "";

            let maxLength = 100;
            //trim the string to the maximum length
            summary = summary.substr(0, maxLength);

            //re-trim if we are in the middle of a word
            summary = summary.substr(0, Math.min(summary.length, summary.lastIndexOf(" ")))

            //Add trailing ...

            summary = summary + "...";

            post.summary = summary;
            posts.push(post);
          }
          return posts;
        }),
        catchError(() => of('Error, could not load blog :-('))
      );
  }

}
