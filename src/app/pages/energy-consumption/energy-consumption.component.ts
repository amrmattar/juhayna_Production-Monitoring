import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-energy-consumption',
  templateUrl: './energy-consumption.component.html',
  styleUrls: ['./energy-consumption.component.css']
})
export class EnergyConsumptionComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(public navService: NavService) { }

  ngOnInit(): void {
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
