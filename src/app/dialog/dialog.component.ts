import { DialogSonComponent } from './dialog-son/dialog-son.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showtheDialog() {
    const dialog = this.dialog
      .open(DialogSonComponent)
      .afterClosed()
      .subscribe((result) =>
        console.log('nosso retorno do Button no component Dialog-son: ' + result)
      );
  }
}
