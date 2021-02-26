import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
   isChecked = false;
  //  localStyle = false;
  constructor() { }

  ngOnInit(): void {
  }
  OnChange(event){
    this.isChecked = ! this.isChecked;
    // this.localStyle = ! this.localStyle;
    console.log(event, "nosso Event ");
  }
}
