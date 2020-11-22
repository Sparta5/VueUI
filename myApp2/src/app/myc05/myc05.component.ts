import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component implements OnInit {

  //names = ['亮亮','然然','东东','华哥','小新','小月','凯凯','铭铭'];

  ks:NamesService;



  constructor(ks: NamesService) { 
    this.ks = ks;
   }

  ngOnInit(): void {
  }

}
