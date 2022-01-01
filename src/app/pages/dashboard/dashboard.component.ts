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

  constructor(private appService: AppService, private bookService: BooksService, private router: Router) {}
  ASSET_URL = environment.apiUrl;
  bookList: any;
  totalBooks: any;
  filteredData: any;
  newBooks: any;
  pages: any = 0;
  avgPages: any = 0;

  date: any | null = {
    start : new Date('12/13/2000'),
    end : new Date('12/13/2021')
  }

  public cards:any = [
    {
      "_id": "1",
      "title" : "Total Books",
      "total" : "3.6K"
    },
    {
      "_id": "2",
      "title" : "New Books  ",
      "total" : "51.33K"
    },
    {
      "_id": "3",
      "title" : "Average Pages / Book",
      "total" : "3.6K"
    },
    {
      "_id": "4",
      "title" : "Total Books",
      "total" : "3.6K"
    },
    {
      "_id": "5",
      "title" : "New Books  ",
      "total" : "51.33K"
    },
    {
      "_id": "6",
      "title" : "Average Pages / Book",
      "total" : "3.6K"
    },
    {
      "_id": "7",
      "title" : "Total Books",
      "total" : "3.6K"
    },
    {
      "_id": "8",
      "title" : "New Books  ",
      "total" : "51.33K"
    },
    {
      "_id": "9",
      "title" : "Average Pages / Book",
      "total" : "3.6K"
    },
    {
      "_id": "10",
      "title" : "Total Books",
      "total" : "3.6K"
    },
    {
      "_id": "11",
      "title" : "New Books  ",
      "total" : "51.33K"
    },
    {
      "_id": "12",
      "title" : "ADD",
      "total" : "+"
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

        // data filtered by date
        this.filteredData = this.bookList.filter( (obj: { publishedDate: Date; }) => {
          return (new Date(obj.publishedDate) >= new Date(this.date.start) && new Date(obj.publishedDate) <= new Date(this.date.end))
        })

        // reload hack
        if (!localStorage.getItem('foo')) { 
          localStorage.setItem('foo', 'no reload') 
          location.reload() 
        } else {
          localStorage.removeItem('foo') 
        }

        console.log(this.filteredData);

        // --------------------------------------
        // 2. new books
        this.newBooks = this.filteredData.length;

        // 3. average pages / book
        this.bookList.forEach( (obj: { pageCount: number; }) => {
          this.pages = this.pages + obj.pageCount;
        })
        this.avgPages = Math.floor(this.pages/this.newBooks);
        
      }

    })
  }

  setCards() {
    console.log(this.totalBooks)
    this.cards[0].total = this.totalBooks;
    this.cards[1].total = this.newBooks;
    this.cards[2].total = this.avgPages;
  }

}

