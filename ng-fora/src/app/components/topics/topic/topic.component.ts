import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../../models/models";

@Component({
  selector: 'rc-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() topic:Topic[] = [];

  constructor() { }

  ngOnInit() {
  }

}
