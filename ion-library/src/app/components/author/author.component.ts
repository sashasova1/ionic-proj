import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private dataGetter: DataGetterService) { }

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
    this.dataGetter.editAuthor(this.authorInfo).subscribe(
      data => console.log(data)
    );
  }
}

