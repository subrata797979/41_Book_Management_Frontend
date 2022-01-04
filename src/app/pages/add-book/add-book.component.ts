import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: any;
  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.setForm();
    this.setChangeValidate();
  }

  setForm() {
    this.bookForm = new FormGroup({
      _id: new FormControl("", null),
      title: new FormControl("", null),
      isbn: new FormControl("", null),
      pageCount: new FormControl("", null),
      publishedDate: new FormControl("", null),
      thumbnailUrl: new FormControl("", null),
      shortDescription: new FormControl("", null),
      longDescription: new FormControl("", null),
      status: new FormControl("", null),
      authors: new FormControl("", null),
      categories: new FormControl("", null),
    });
  }

  setChangeValidate() {
    
  }

  createBook() {

  }

}
