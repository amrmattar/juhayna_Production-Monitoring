import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { VERSION } from '@angular/material/core';
import { NavItem } from '../../models/nav-item';
import { NavService } from '../../services/nav.service';
import { TokenStorageService } from '../../services/token-storage.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @Output() closeSidenav = new EventEmitter<void>();
  @ViewChild('appDrawer', { static: false }) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'grid_view',
      route: "en/ene2",
      tooltip:"Energy"
    },
    {
      displayName: "description",
      route: "compare/report",
      tooltip:"Report"
    },
    {
      displayName: "description",
      route: "compare/summary-report",
      tooltip:"Summary Report"
    },
    {
      displayName: "flip",
      route: "compare/compare-historical",
      tooltip:"Historical Compare"
    },
    {
      displayName: 'settings',
      route: 'calibration-module',
      tooltip:"Calibration Module"
    },
    {
      displayName: 'bolt',
      route: 'machinelist',
      tooltip:"Instant Readings"
    },
    {
      displayName: "podcasts",
      route: "compare/iotstatus",
      tooltip:"Status"
    },
   {
      displayName: "filter_center_focus",
      route: "setting/factsetting",
      tooltip:"Settings"
    },
  //  {
  //     displayName: "flip",
  //     route: "compare/compare-loads",
  //     tooltip:"Compare"
  //   },





  //  {
  //     displayName: "warning_amber",
  //     tooltip:"Alerts"
  //   },
  ];

  constructor(
    private navService: NavService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  onClose() {
    this.closeSidenav.emit();
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
