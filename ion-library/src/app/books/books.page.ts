import { Component, OnInit } from '@angular/core';
import { DataGetterService } from "../services/data-getter.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedDataService } from '../services/shared-data.service';
import { FireDataGetterService } from '../services/fire-data-getter.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  authorId: string;
  authorName: string;
  books: any[];

  textData: string;

  constructor(private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private router: Router,
    private fireData: FireDataGetterService,
    private sharedData: SharedDataService) {
    this.authorId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.authorName = this.route.snapshot.paramMap.get('authorName');
    this.fireData.getBooks(this.authorId).subscribe(
      data => this.books = data
    );
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }

}
