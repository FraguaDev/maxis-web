import {Component, OnInit} from '@angular/core';
import {MaxTileModel} from '../max-tile/max-tile.component.model';

@Component({
  selector: 'app-max-portada',
  templateUrl: './max-portada.component.html',
  styleUrls: ['./max-portada.component.css']
})
export class MaxPortadaComponent implements OnInit {

  templateTest = '<div><h2>KIKI</h2><p>KIKIKIKIKI</p></div>';
  development: MaxTileModel = {
    title: 'Desarrollo',
    text: 'Desarrollos :O',
    style: {
      color: 'green',
      width: '100%',
      height: '100%'
    }
  };
  tiles = [
    {maxTile: this.development, cols: 2, rows: 2, style: 'url(../assets/img/fl.jpg)'},
    {maxTile: this.development, cols: 2, rows: 2, style: 'url(../assets/img/fl.jpg)'},
    {maxTile: this.development, cols: 2, rows: 2, style: 'url(../assets/img/fl.jpg)'},
    {maxTile: this.development, cols: 2, rows: 2, style: 'url(../assets/img/fl.jpg)'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
