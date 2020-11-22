import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myd01',
  templateUrl: './myd01.component.html',
  styleUrls: ['./myd01.component.css']
})
export class Myd01Component implements OnInit {

  constructor(public http: HttpClient) { }

  //属性: 才能在html中使用
  res: Res;

  ngOnInit(): void {
    let url = 'https://api.apiopen.top/getWangYiNews';

    // axios:  axios.get(url).then(res=>{})
    // http: this.http.get(url).subscribe(res=>{})
    // then然后  subscribe订阅
    this.http.get(url).subscribe((res:any) => {
      console.log(res);

      this.res = res;
    });
  }
}

// 自定义返回值的数据类型:  可以在使用时提供丰富的代码提示 和 报错预警
interface Res {
  code: number;
  message: string;
  result: Result[]; //数组中都是any类型 -- 暂时写any
}

interface Result {
  image: string;
  passtime: string;
  path: string;
  title: string;
}
