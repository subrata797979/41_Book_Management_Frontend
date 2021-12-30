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

  getBooks() {
    const model: Subject<any> = new Subject<any>();
    this.http.get(this.API_URL + "/books").subscribe((res) => {
      model.next({ data: res });
    });
    return model;
  }

}
