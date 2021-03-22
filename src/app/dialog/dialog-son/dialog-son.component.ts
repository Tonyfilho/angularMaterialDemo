import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

//export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-dialog-son',
  templateUrl: './dialog-son.component.html',
  styleUrls: ['./dialog-son.component.css'],
})
export class DialogSonComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log(data + ' Nossos dados Injetado a parti do component Dialog-Son');
  }

  ngOnInit(): void {}
}
