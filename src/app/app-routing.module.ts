import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnergyModule } from 'src/energy/energy.module';
import { EnergyConsumptionComponent } from './pages/energy-consumption/energy-consumption.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AppSettingsComponent } from './pages/app-settings/app-settings.component';
import { AuthGuard } from '../app/helpers/auth.guard';
import { MachinelistComponent } from './machinelist/machinelist.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
const routes: Routes = [
  {
    path: 'machinelist',
    component: MachinelistComponent,
  },
  {
    path: 'en',
    loadChildren: () =>
      import('../energy/energy.module').then((m) => m.EnergyModule),
  },
  {
    path: 'compare',
    loadChildren: () =>
      import('../compare/compare.module').then((m) => m.CompareModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('../prosettings/prosettings.module').then(
        (m) => m.ProsettingsModule
      ),
  },
  {
    path: 'app-settings',
    component: AppSettingsComponent,
  },
  {
    path: 'calibration-module',
    component: SummaryReportComponent,
  },

  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: LoginComponent,
  },
  // { path: '', component: EnergyConsumptionComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
