import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-max-portada',
  templateUrl: './max-portada.component.html',
  styleUrls: ['./max-portada.component.css']
})
export class MaxPortadaComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 6, rows: 1, color: 'darkgreen'},
    {text: 'Two', cols: 2, rows: 2, color: 'secondary'},
    {text: 'Three', cols: 2, rows: 2, color: 'primary'},
    {text: 'Four', cols: 2, rows: 2, color: 'secondary'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
