import { Component } from '@angular/core';
import { DataGetterService, AuthorInfo } from '../services/data-getter.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Електронна бібліотека";
  userName: string;

  authors: AuthorInfo[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService,
    private sharedData: SharedDataService) {
    this.dataGetter.getAuthors().subscribe(
      (data) => {
        this.authors = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  ionViewDidEnter() {
    if (this.sharedData.getTextData() != '') {
      this.title = this.sharedData.getTextData();
    }
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
