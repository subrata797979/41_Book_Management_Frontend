import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  @Output() toogleSidebarEvent: EventEmitter<any> = new EventEmitter();
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  public triggerToggleSidebar(): void{
    this.toogleSidebarEvent.emit();
    this.appService.triggerResizeEvent();
  }

}
