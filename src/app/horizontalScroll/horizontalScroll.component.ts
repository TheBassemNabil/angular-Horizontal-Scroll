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

  showAddres = true;

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.dataList = data;
    })
  }

  removeAddress() {
    this.showAddres = !this.showAddres;
    this.pageUpdated = !this.pageUpdated;
  }

}
