import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  // 把需要的共享的数据放此处即可！
  names = ['亮亮','然然','东东','华哥','小新','小月','凯凯','铭铭'];

  constructor() { }
}
