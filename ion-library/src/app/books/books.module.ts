import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BooksPage } from './books.page';
import { BookComponent } from '../components/book/book.component';
import { BooksPageRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksPageRoutingModule
  ],
  declarations: [BookComponent, BooksPage]
})
export class BooksPageModule { }
