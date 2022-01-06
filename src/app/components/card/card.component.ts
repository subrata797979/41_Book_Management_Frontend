import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public label: any;
  @Input() public total: any;
  @Input() public _id: any;

  API_URL = environment.apiUrl;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isCardClicked() {
    console.log(this._id);
    const id = this._id;
    localStorage.setItem("cardId",this._id);
    localStorage.setItem("cardLabel",this.label);
    this.router.navigate(["dashboard-card-chart/" + id]);
  }

}
