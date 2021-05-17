import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetterService, AuthorInfo } from '../services/data-getter.service';
import { FireDataGetterService } from '../services/fire-data-getter.service';
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

  constructor(private dataGetter: DataGetterService,
    private sharedData: SharedDataService,
    private router: Router,
    private fireData: FireDataGetterService) {
    this.fireData.getAuthors().subscribe(
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

  delete(author) {
    this.fireData.delAuthor(author);
  }

  addAuthor(author) {
    this.fireData.addAuthor(author);
    this.showNew = false;
  }

}
