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
    this.router.navigate(["dashboard-card-chart/" + this._id]);
  }

}
