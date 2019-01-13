import {Component, Input, OnInit} from '@angular/core';
import {MaxRoundPhotoModel} from './max-round-photo.model';

@Component({
    selector: 'app-max-round-photo',
    templateUrl: './max-round-photo.component.html',
    styleUrls: ['./max-round-photo.component.scss']
})
export class MaxRoundPhotoComponent implements OnInit {

    @Input() roundPhoto: MaxRoundPhotoModel;

    constructor() {
    }

    ngOnInit() {
    }

}
