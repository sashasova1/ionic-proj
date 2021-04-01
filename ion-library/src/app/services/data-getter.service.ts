import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AuthorInfo {
  name: string;
  country: string;
}

export interface BookInfo {
  name: string;
  author: string;
  genre: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataGetterService {

  private authors: AuthorInfo[] = [
    { name: 'Всеволод Нестайко', country: 'Україна' },
    { name: 'Тарас Шевченко', country: 'Україна' },
    { name: 'Лев Толстой', country: 'Росія' },
    { name: 'Террі Пратчетт', country: 'Велика Британія' },
    { name: 'Марк Твен', country: 'США' },
  ];


  private books: BookInfo[] = [
    { name: 'Кобзар', author: 'Тарас Шевченко', genre: 'Збірка', year: 1840 },
    { name: 'Сон', author: 'Тарас Шевченко', genre: 'Поема', year: 1844 },
    { name: 'Тореадори з Васюківки', author: 'Всеволод Нестайко', genre: 'Роман', year: 1972 },
    { name: 'Колір магії', author: 'Террі Пратчетт', genre: 'Роман', year: 1983 },
    { name: 'Пригоди Гекльберрі Фінна', author: 'Марк Твен', genre: 'Роман', year: 1884 },
    { name: 'Пригоди Тома Соєра', author: 'Марк Твен', genre: 'Роман', year: 1876 },
    { name: 'Війна і мир', author: 'Лев Толстой', genre: 'Роман', year: 1869 },
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

  getBooks(authorName: string): Observable<any[]> {
    return of(this.books.filter(elem => {
      return elem.author === authorName;
    }));
  }

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
