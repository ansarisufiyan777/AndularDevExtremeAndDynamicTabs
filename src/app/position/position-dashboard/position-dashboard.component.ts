import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-position-dashboard',
  templateUrl: './position-dashboard.component.html',
  styleUrls: ['./position-dashboard.component.css']
})
export class PositionDashboardComponent implements OnInit {
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // overlap = false;

  watcher: Subscription;
  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
   }

  ngOnInit() {
    
  }

}