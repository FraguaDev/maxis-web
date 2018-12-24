import {Component, OnInit} from '@angular/core';
import {MaxTileModel} from '../../components/max-tile/max-tile.component.model';

@Component({
    selector: 'app-max-portada',
    templateUrl: './max-portada.component.html',
    styleUrls: ['./max-portada.component.scss']
})
export class MaxPortadaComponent implements OnInit {


    development: MaxTileModel = {
        title: 'Desarrollo',
        text: 'Desarrollos :O',
        style: {
            width: '100%',
            height: '100%'
        }
    };

    curriculumVitae: MaxTileModel = {
        title: 'CV',
        text: 'keke',
        style: {
            width: '100%',
            height: '100%'
        }
    };

    tiles = [
        {maxTile: this.development, cols: 2, rows: 2, style: 'url(../assets/img/fl.jpg)', class: 'developer'},
        {maxTile: this.curriculumVitae, cols: 2, rows: 2, style: 'blue', class: 'developer'},
        {maxTile: this.development, cols: 2, rows: 2, style: 'url(../assets/img/fl.jpg)', class: 'developer'},
        {maxTile: this.development, cols: 2, rows: 2, style: 'url(../assets/img/fl.jpg)', class: 'developer'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
