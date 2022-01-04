import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private service: BooksService) { }

  bookForm: any;
  updateResponse: any;

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.bookForm = new FormGroup({
      _id: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      isbn: new FormControl("", Validators.required),
      pageCount: new FormControl("", Validators.required),
      publishedDate: new FormControl("", Validators.required),
      thumbnailUrl: new FormControl("", Validators.required),
      shortDescription: new FormControl("", Validators.required),
      longDescription: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
      authors: new FormControl("", Validators.required),
      categories: new FormControl("", Validators.required),
    });
  }

  get _id() {
    return this.bookForm.get('_id');
  }
  get title() {
    return this.bookForm.get('title');
  }
  get isbn() {
    return this.bookForm.get('isbn');
  }
  get pageCount() {
    return this.bookForm.get('pageCount');
  }
  get publishedDate() {
    return this.bookForm.get('publishedDate');
  }
  get thumbnailUrl() {
    return this.bookForm.get('thumbnailUrl');
  }
  get shortDescription() {
    return this.bookForm.get('shortDescription');
  }
  get longDescription() {
    return this.bookForm.get('longDescription');
  }
  get status() {
    return this.bookForm.get('status');
  }
  get authors() {
    return this.bookForm.get('authors');
  }
  get categories() {
    return this.bookForm.get('categories');
  }

  createBook() {
    if (this.bookForm.invalid) {
      console.log("Invalid Form!!!");
      return;
    }
    if (this.bookForm.valid) {
      let data = this.bookForm.value;
      console.log(data);
  
      setTimeout(() => {
        this.service.createBook(data);
      }, 3000);
      
      this.updateResponse = 'Updated';
      console.log(this.updateResponse);
    }
  }

}
