import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MaxTileModel} from './max-tile.component.model';

@Component({
  selector: 'app-max-tile',
  templateUrl: './max-tile.component.html',
  styleUrls: ['./max-tile.component.css']
})
export class MaxTileComponent implements OnInit {

  @Input() maxTile: MaxTileModel = {
    title: 'Empty',
    text: 'Empty',
    style: {
      color: 'blue'
    }
  };
  // page: string;

  @ViewChild('TitleContainer') tileContainer;

  constructor() {}

  ngOnInit() {
  }


}
