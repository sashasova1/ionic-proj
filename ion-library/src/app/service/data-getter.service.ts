import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AuthorInfo {
  name: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataGetterService {

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

  private userName = '';

  private users = [
    'admin', 'user'
  ];

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

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
