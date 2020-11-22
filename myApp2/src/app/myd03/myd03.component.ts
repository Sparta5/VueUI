import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myd03',
  templateUrl: './myd03.component.html',
  styleUrls: ['./myd03.component.css']
})
export class Myd03Component implements OnInit {

  constructor(public http:HttpClient ) { }

  res:Res;
  data:Data;

  page=1;
  ngOnInit(): void {
    getData(pon){
      this.page+=pon;
      let url = 'http://101.96.128.94:9999/mfresh/data/news_select.php?pageNum='+pon;
      this.http.get(url).subscribe((res:any) =>{
        console.log(res);

        this.res = res;
      })
      
    }  

  }



  range(num:number) {
    let arr = [];
    for(let i = 1;i <= num;i++){
      arr.push(i);
    }

    return arr;
  }
}



interface Res {
  data:any[],
  pageCount: number;
  pageNum: number;
  pageSize: number;
  totalRecord: number;
}

interface Data {
  content:string; 
  nid:string,
  pubTime:string,
  title:string,
}
