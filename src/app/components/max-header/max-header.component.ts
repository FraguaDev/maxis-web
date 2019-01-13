import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-max-header',
    templateUrl: './max-header.component.html',
    styleUrls: ['./max-header.component.css']
})
export class MaxHeaderComponent implements OnInit {
    @Input() dynamicHeight: true;

    constructor() {
    }

    ngOnInit() {
    }

}
