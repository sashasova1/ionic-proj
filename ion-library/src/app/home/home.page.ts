import { Component } from '@angular/core';
import { AuthorsDataService, AuthorInfo } from '../service/authors-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authors: AuthorInfo[];

  showNew = false;
  showEdit = -1;

  constructor(private authorGetter: AuthorsDataService) {
    this.authorGetter.getAuthors().subscribe(
      (data) => {
        this.authors = data;
      }
    );
  }

  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.authorGetter.deleteAuthor(index);
  }

  addAuthor(author: AuthorInfo) {
    this.authorGetter.addAuthor(author);
    this.showNew = false;
  }

}
