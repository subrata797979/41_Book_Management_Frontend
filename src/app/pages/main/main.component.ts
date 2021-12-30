import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public sidebarOpened: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/dashboard-home']);
  }

  public sidebarToggle($event: any): void {
    this.sidebarOpened = !this.sidebarOpened;
    console.log("button clicked");
  }


}
