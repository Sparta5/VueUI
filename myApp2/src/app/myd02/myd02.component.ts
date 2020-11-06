import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myd02',
  templateUrl: './myd02.component.html',
  styleUrls: ['./myd02.component.css']
})
export class Myd02Component implements OnInit {

  constructor(public http: HttpClient) { }

  //
  res: Res;

  ngOnInit(): void {
    let url = 'https://api.apiopen.top/getImages';

    this.http.get(url).subscribe((res: any) => {
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
  id: number;
  img: string;
  time: string;
}
