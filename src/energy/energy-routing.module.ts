import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivePowerComponent } from './active-power/active-power.component';
import { EnergyConsumptionComponent } from './energy-consumption/energy-consumption.component';
import { PowerFactorComponent } from './power-factor/power-factor.component';
import { EnergyComponent } from './energy.component';
import { SagSwellComponent } from './sag-swell/sag-swell.component';

const routes: Routes = [
  { path: 'ene2', component: EnergyComponent },
  { path: 'activepower', component: ActivePowerComponent },
  { path: 'energy-consumption', component: EnergyConsumptionComponent },
  { path: 'power-factor', component: PowerFactorComponent },
  { path: 'sag-swell', component: SagSwellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
