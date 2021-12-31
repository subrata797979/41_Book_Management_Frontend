import { BooksService } from './../../services/books.service';
import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appService: AppService, private bookService: BooksService) {}
  ASSET_URL = environment.apiUrl;
  bookList: any;
  totalBooks: any;

  date: any | null = {
    start : null,
    end : null
  }

  public cards:any = [
    {
      "title" : "Total Books",
      "total" : "3.6K"
    },
    {
      "title" : "New Books  ",
      "total" : "51.33K"
    }
  ]



  ngOnInit(): void {
    this.appService.triggerResizeEvent();
    this.getBooks();

    // waiting for data to show up
    setTimeout(()=>{     
      this.setCards();                    
    }, 1000);
    
  }

  getBooks(){
    this.bookService.getBooks().subscribe((data)=> {

      // loggin data.data
      console.log(data.data);

      // getting data from api and setting it to booklist object
      this.bookList = data.data;

      // getting totalBooks from id
      this.totalBooks = data.data.length;

      // getting date obj from localstorage
      const lang: string | null = localStorage.getItem('dateLocal');
      if(lang===null) {
        console.log('date is null!');
      }
      else {
        this.date = JSON.parse(lang);
        console.log(this.date);
      }
      

    })
  }

  setCards() {
    console.log(this.totalBooks)
    this.cards[0].total = this.totalBooks;
  }

}

