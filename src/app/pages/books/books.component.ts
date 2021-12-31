import { Component, OnInit } from '@angular/core';
import { BooksService } from './../../services/books.service';
import { AppService } from "../../app.service";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private appService: AppService, private bookService: BooksService) {}
  ASSET_URL = environment.apiUrl;
  bookList: any;

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe((data)=>{
      console.log(data.data);
      this.bookList=data.data;
    })
  }

}
