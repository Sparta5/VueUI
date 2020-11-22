import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Work01Component } from './work01/work01.component';
import { Work1Component } from './work1/work1.component';
import { GenderPipe } from './gender.pipe';
import { ZzmmPipe } from './zzmm.pipe';
import { Myc01Component } from './ts/myc01/myc01.component';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myd01Component } from './myd01/myd01.component';

// 网络模块
import { HttpClientModule } from '@angular/common/http';
import { Myd02Component } from './myd02/myd02.component';
import { Myd03Component } from './myd03/myd03.component';

@NgModule({
  declarations: [
    AppComponent,
    Work01Component,
    Work1Component,
    GenderPipe,
    ZzmmPipe,
    Myc01Component,
    Myc02Component,
    Myc03Component,
    Myc05Component,
    Myc04Component,
    Myc06Component,
    Myd01Component,
    Myd02Component,
    Myd03Component
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
