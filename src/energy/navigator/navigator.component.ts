import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent implements OnInit {
  activeTab;
  constructor() {
    this.activeTab = 'activepower';
  }

  ngOnInit(): void {}
}
