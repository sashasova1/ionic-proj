import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.page.html',
  styleUrls: ['./http-test.page.scss'],
})
export class HttpTestPage implements OnInit {

  private posts: any[];
  private postCount = 0;
  private postStep = 10;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.refreshData(false);

    this.http.get('http://localhost/api/?a=10&b=30').subscribe(
      data => {
        console.log(data)
      }
    );

    this.http.post('http://localhost/api',
      {
        a: 10,
        b: 30,
        c: 'text data'
      }).subscribe(
        data => console.log(data)
      );
  }

  refreshData(refresher) {
    this.posts = [];
    this.postCount = 0;
    this.addData(refresher);
  }

  addData(refresher) {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .pipe(map(
        (res: Array<any>) => res.filter(
          row => row.id > this.postCount &&
            row.id < this.postCount + this.postStep
        )
      )).subscribe(
        data => {
          this.posts = this.posts.concat(data);
          if (refresher) {
            refresher.target.complete();
          }
          this.postCount += this.postStep;
        }
      );
  }

}
