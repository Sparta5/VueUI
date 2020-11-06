import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-work1',
  templateUrl: './work1.component.html',
  styleUrls: ['./work1.component.css']
})
export class Work1Component implements OnInit {
  data = [
    { name: '东东', age: 33, sex: 1, zzmm: 1 },
    { name: '亮亮', age: 24, sex: 1, zzmm: 0 },
    { name: '然然', age: 34, sex: 2, zzmm: 1 },
    { name: '小月', age: 18, sex: 0, zzmm: 2 },
    { name: '小新', age: 29, sex: 1, zzmm: 3 },
    { name: '华哥', age: 36, sex: 1, zzmm: 2 },
    { name: '燕子', age: 18, sex: 0, zzmm: 1 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  baColor(age) {
    if(age >= 30) return 'blue';

    if (age >= 20 && age < 30) return 'green';
    
    return 'yellow';
  }
}
