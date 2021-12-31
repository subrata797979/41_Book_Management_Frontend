import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rangeValue: any;
  range: any = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  date: any = {
    start : null,
    end : null
  }

  @Output() toogleSidebarEvent: EventEmitter<any> = new EventEmitter();
  
  constructor(private appService: AppService, private appRouter: Router) { }

  ngOnInit(): void {
  }

  public triggerToggleSidebar(): void{
    this.toogleSidebarEvent.emit();
    this.appService.triggerResizeEvent();
  }

  dateRangeChange(dateRangeStart: any, dateRangeEnd: any) {
    this.date.start = dateRangeStart.value;
    this.date.end = dateRangeEnd.value;
    console.log(this.date);
    // localStorage.setItem('dateLocal', this.date);
    localStorage.setItem('dateLocal', JSON.stringify(this.date));
  }

}
