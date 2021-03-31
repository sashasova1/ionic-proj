import { Component } from '@angular/core';
import { DataGetterService, AuthorInfo } from '../service/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userName: string;

  authors: AuthorInfo[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getAuthors().subscribe(
      (data) => {
        this.authors = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.dataGetter.deleteAuthor(index);
  }

  addAuthor(author: AuthorInfo) {
    this.dataGetter.addAuthor(author);
    this.showNew = false;
  }

}
