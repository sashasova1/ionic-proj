import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FireDataGetterService } from 'src/app/services/fire-data-getter.service';
import { AuthorInfo, DataGetterService } from '../../services/data-getter.service';

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

  constructor(private dataGetter: DataGetterService, private fireData: FireDataGetterService) { }

  ngOnInit() {
    if (this.isNew) {
      this.authorInfo = {
        id: null,
        name: '',
        country: ''
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

  saveAuthor() {
    this.fireData.editAuthor(this.authorInfo);
  }
}

