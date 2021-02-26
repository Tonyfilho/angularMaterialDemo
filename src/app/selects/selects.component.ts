import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css'],
})
export class SelectsComponent implements OnInit {
  colores = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
  ];
  constructor() {}
  selected= 2;
  ngOnInit(): void {}
}
