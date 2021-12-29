import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertthresholdComponent } from './alertthreshold/alertthreshold.component';
import { CompareLoadsComponent } from './compare-loads/compare-loads.component';
import { ComapreHistoricalComponent } from './comapre-historical/comapre-historical.component';
import { CompareComponent } from './compare.component';
import { IotstatusComponent } from './iotstatus/iotstatus.component';
import { ReportComponent } from './report/report.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'compares', component: CompareComponent },
  { path: 'compare-loads', component: CompareLoadsComponent },
  { path: 'compare-historical', component: ComapreHistoricalComponent },
  { path: 'iotstatus', component: IotstatusComponent },
  { path: 'alertthreshold', component: AlertthresholdComponent },
  { path: 'report', component: ReportComponent },
  { path: 'summary-report', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
