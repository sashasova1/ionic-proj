import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AuthorInfo {
  name: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthorsDataService {
  private authors: AuthorInfo[] = [
    {
      name: "Всеволод Нестайко",
      country: "Україна",
    },
    {
      name: "Тарас Шевченко",
      country: "Україна",
    },
  ];

  constructor() { }


  getAuthors(): Observable<AuthorInfo[]> {
    return of(this.authors);
  }

  addAuthor(author: AuthorInfo) {
    this.authors.push(author);
  }

  deleteAuthor(index: number) {
    this.authors.splice(index, 1);
  }
}
