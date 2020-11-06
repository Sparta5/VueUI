import { Component, ViewChild } from '@angular/core';
import { Myc03Component } from './myc03/myc03.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('m3') myc03:Myc03Component;
  title = 'myApp';

  show(msg) {
    console.log(msg)
  }

  doAdd(){
    this.myc03.count++;
  }
}
