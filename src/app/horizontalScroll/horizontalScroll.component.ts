import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontalScroll',
  templateUrl: './horizontalScroll.component.html',
  styleUrls: ['./horizontalScroll.component.css']
})
export class HorizontalScrollComponent implements OnInit {
  dataList: any;

  pageUpdated = false;
  pageDestored = false;

  remove4 = true;
  remove7 = true;

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.dataList = data;
    })
  }

  remove4CL() {
    this.remove4 = !this.remove4;
    this.pageUpdated = !this.pageUpdated;
  }

  remove7CL() {
    this.remove7 = !this.remove7;
    this.pageUpdated = !this.pageUpdated;
  }
}
