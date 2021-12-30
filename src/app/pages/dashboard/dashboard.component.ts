import { BooksService } from './../../services/books.service';
import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private appService: AppService, private bookService: BooksService) {}


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
    this.setFields();
  }

  setFields() {
    this.cards[0].total = this.bookService.findTotalBooks();
    console.log(this.bookService.getData());
    
  }

  onChangeFields() {
    // on changing date range, data will also be changed
  }
}

