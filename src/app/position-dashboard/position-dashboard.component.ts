import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-dashboard',
  templateUrl: './position-dashboard.component.html',
  styleUrls: ['./position-dashboard.component.css']
})
export class PositionDashboardComponent implements OnInit {

  private tabData:any = [];
  constructor() { }

  ngOnInit() {
    this.tabData.push("Positions");
  }
  onAddTab($event){
    this.tabData.push($event)
  }

}
