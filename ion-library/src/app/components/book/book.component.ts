import { Component, Input, OnInit } from '@angular/core';
import { BookInfo, DataGetterService } from '../../services/data-getter.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})

export class BookComponent implements OnInit {

  @Input() bookInfo: BookInfo;
  title: string;

  constructor(private dataGetter: DataGetterService) { }

  ngOnInit() {
  }

  saveBook() {
    this.dataGetter.editBook(this.bookInfo).subscribe(
      data => console.log(data)
    );
  }

}
