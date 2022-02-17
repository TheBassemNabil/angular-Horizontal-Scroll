import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgHorizontalScrollModule } from 'angular-horizontal-scroll-table';
import { HorizontalScrollComponent } from './horizontalScroll/horizontalScroll.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule , NgHorizontalScrollModule ],
  declarations: [ AppComponent, HorizontalScrollComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
