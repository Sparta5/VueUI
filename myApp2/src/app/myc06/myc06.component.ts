import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css']
})
export class Myc06Component implements OnInit {

  // us: NamesService;

  constructor(public us: NamesService) { }

  ngOnInit(): void {
  }

}
