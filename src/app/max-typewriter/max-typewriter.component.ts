import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-max-typewriter',
  templateUrl: './max-typewriter.component.html',
  styleUrls: ['./max-typewriter.component.css']
})
export class MaxTypewriterComponent implements OnInit {

  text: string;

  @Input() text: string;
  @Input() style;

  constructor() { }

  ngOnInit() {
  }

}
