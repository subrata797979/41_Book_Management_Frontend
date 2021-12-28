import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private appService: AppService) {}

  public cards:any = [
    {
      label: "India"
    },
    {
      label: "Canada"
    },
    {
      label: "Japan"
    },
    {
      label: "Germany"
    }
  ];

  ngOnInit(): void {
    this.appService.triggerResizeEvent();
  }
}

