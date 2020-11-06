import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.css']
})
export class Myc02Component implements OnInit {

  @Output() showMsg = new EventEmitter();
  // output: 向外传消息

  constructor() { }

  ngOnInit(): void {
  }

}
