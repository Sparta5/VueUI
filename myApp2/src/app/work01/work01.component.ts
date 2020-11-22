import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work01',
  templateUrl: './work01.component.html',
  styleUrls: ['./work01.component.css']
})
export class Work01Component implements OnInit {
  names = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

  curP = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.curP++;
      //超出最大序号，变为0
      if (this.curP == this.names.length) this.curP = 0;
    }, 2500);
  }

}
