import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  date: string;
  constructor() { }

  ngOnInit(): void {
  }
   onClick(){
    console.log(this.date);
   }
}
