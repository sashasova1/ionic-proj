import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthorInfo } from '../../service/authors-data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})

export class AuthorComponent implements OnInit {

  @Input() authorInfo: AuthorInfo;
  @Input() isNew: boolean;
  @Output() addAuthor = new EventEmitter();
  @Output() cancelAddingAuthor = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
    if (this.isNew) {
      this.authorInfo = {
        name: ' ',
        country: ' '
      };
      this.title = 'Новий автор';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addAuthor.emit(this.authorInfo);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingAuthor.emit();
    }
  }
}

