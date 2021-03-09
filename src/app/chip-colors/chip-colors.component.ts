import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}
/**
 * @title Stacked chips by Tony Filho
 */
@Component({
  selector: 'chip-colors',
  templateUrl: './chip-colors.component.html',
  styleUrls: ['./chip-colors.component.css']
})

export class ChipColorsComponent implements OnInit {

  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Tony', color: 'primary'},
    {name: 'Debora', color: 'accent'},
    {name: 'Juan', color: 'warn'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
