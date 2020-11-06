import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.css']
})
export class Myc01Component implements OnInit {

  @Input() name: string;

  @Input() phone: string;

  @Input() married:boolean;

  @Input() dog: dog;
  //相当于什么也没写；VSCode
  @Input() boss: Boss;

  constructor() { }

  ngOnInit(): void {
    this.boss.name;
  }
}
  interface Boss {
    name: string;
    age: number;
  }

  interface dog {
    name:string;
    age:number;
    sex:string
  }


