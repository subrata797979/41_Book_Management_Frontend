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

  date: any = {
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
  }

  getBooks() {
    
  }

}

