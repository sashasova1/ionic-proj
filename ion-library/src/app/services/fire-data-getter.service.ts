import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireDataGetterService {

  authors: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    const authorsCollection = afs.collection('authors');
    this.authors = authorsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...(data as {}) };
      }))
    );
  }

  getAuthors() {
    return this.authors;
  }

  getBooks(id) {
    return this.afs
      .doc('authors/' + id)
      .collection('books')
      .valueChanges();
  }

  addAuthor(author) {
    this.afs.collection('authors')
      .add({
        name: author.name,
        country: author.country
      });
  }

  editAuthor(author) {
    return this.afs
      .doc('authors/' + author.id)
      .update({
        name: author.name,
        country: author.country
      });
  }

  delAuthor(author) {
    return this.afs
      .doc('authors/' + author.id)
      .delete();
  }
}
