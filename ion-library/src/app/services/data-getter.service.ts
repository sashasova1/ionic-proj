import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AuthorInfo {
  id: string;
  name: string;
  country: string;
}

export interface BookInfo {
  id: string;
  name: string;
  genre: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataGetterService {

  baseUrl = 'http://localhost/api/';
  groups = [];
  students = [];
  users = [];

  private userName = '';
  private token = '';

  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login', user);
  }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  setToken(token: string) {
    this.token = token;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get<any>(this.baseUrl + '?action=get-authors&token=' + this.token);
  }

  addAuthor(author) {
    return this.http.post<any>(
      this.baseUrl + '?action=add-author&token=' + this.token, author
    );
  }

  delAuthor(author) {
    return this.http.post<any>(
      this.baseUrl + '?action=del-author&token=' + this.token, author
    );
  }

  getBooks(id: number) {
    return this.http.get<any>(
      this.baseUrl + `?action=get-books&author=${id}&token=${this.token}`
    );
  }

  editAuthor(author) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-author&token=' + this.token, author
    );
  }

  editBook(book) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-book&token=' + this.token, book
    );
  }

}
