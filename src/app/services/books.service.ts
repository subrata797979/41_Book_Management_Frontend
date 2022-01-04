import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient, private router: Router) {}
  API_URL = environment.apiUrl;

  createBook(data: any) {
    this.http
      .post(this.API_URL + "/books/create", data)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(["/dashboard-books"]);
        }
      });
  }
  
  getBooks() {
    const model: Subject<any> = new Subject<any>();
    this.http.get(this.API_URL + "/books").subscribe((res) => {
      model.next({ data: res });
    });
    return model;
  }

  editBook(id: any, data: any) {
    this.http
      .put(this.API_URL + "/book/" + id, data)
      .subscribe((res) => { });
  }

  deleteBook(id: any) {
    this.http
      .delete(this.API_URL + "/book/" + id, id)
      .subscribe((res) => {
        if (res) {
          this.router.navigate(["/dashboard-books"]);
        }
      });
  }

}
