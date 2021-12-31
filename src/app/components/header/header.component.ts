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
  range: any;

  date: any = {
    start : Date,
    end : Date
  }

  @Output() toogleSidebarEvent: EventEmitter<any> = new EventEmitter();
  
  constructor(private appService: AppService, private appRouter: Router) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.range = new FormGroup({
      start: new FormControl('', null),
      end: new FormControl('', null),
    });
    
    const dateString: string | null = localStorage.getItem('dateLocal');
    if(dateString===null) {
      console.log('date field cannot be set as localstorage is empty');
    }
    else {
      this.date = JSON.parse(dateString);
    }
    console.log(this.date);

    // getting name and setting values respectively
    this.range.get('start').setValue(new Date(this.date.start));
    this.range.get('end').setValue(new Date(this.date.end));

  }

  // getters
  get start() {
    return this.range.get('start');
  }
  get end() {
    return this.range.get('end');
  }

  public triggerToggleSidebar(): void{
    this.toogleSidebarEvent.emit();
    this.appService.triggerResizeEvent();
  }

  dateRangeChange(dateRangeStart: any, dateRangeEnd: any) {
    this.date.start = dateRangeStart.value;
    this.date.end = dateRangeEnd.value;
    console.log(this.date);
    localStorage.setItem('dateLocal', JSON.stringify(this.date));

    // reload hack
    if (!localStorage.getItem('foo2')) { 
      localStorage.setItem('foo2', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo2') 
    }
  }

}
