import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-max-typewriter',
  templateUrl: './max-typewriter.component.html',
  styleUrls: ['./max-typewriter.component.css']
})
export class MaxTypewriterComponent implements OnInit {

  @Input() text: string;
  @Input() style;

  constructor() { }

  ngOnInit() {
  }

}
