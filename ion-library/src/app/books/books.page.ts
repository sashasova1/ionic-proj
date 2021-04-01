import { Component, OnInit } from '@angular/core';
import { DataGetterService, BookInfo } from "../services/data-getter.service";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  authorName: string;
  books: any[];

  showEdit = -1;

  textData: string;

  constructor(private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService) { }

  ngOnInit() {
    this.authorName = this.route.snapshot.paramMap.get('author');
    this.dataGetter.getBooks(this.authorName).subscribe(
      data => {
        this.books = data;
      }
    );
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }

}
