import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css']
})
export class Myc04Component implements OnInit {

  //names = ['亮亮','然然','东东','华哥','小新','小月','凯凯','铭铭'];
  
  //服务使用
  
  // 声明属性 保存传入的值
  ns:NamesService;

  // 什么依赖
  constructor(ns: NamesService ) {
    this.ns = ns;
  }

  ngOnInit(): void {
    //this.ns.names；
  }

}
