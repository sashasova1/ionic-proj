import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookInfo } from '../../services/data-getter.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})

export class BookComponent implements OnInit {

  @Input() bookInfo: BookInfo;
  title: string;

  constructor() { }

  ngOnInit() {
    this.bookInfo = {
      name: '',
      author: '',
      genre: '',
      year: null
    };
    this.title = 'Редагування книжки';
  }

}
