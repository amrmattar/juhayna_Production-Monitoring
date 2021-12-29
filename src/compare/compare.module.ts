import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareLoadsComponent } from './compare-loads/compare-loads.component';
import { AppRoutingModule } from 'src/compare/compare-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import {
  IgxTabsModule,
  IgxNavbarModule,
  IgxIconModule,
} from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CompareComponent } from './compare.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  chartDialog,
  IotstatusComponent,
} from './iotstatus/iotstatus.component';
import {
  AlertthresholdComponent,
  NewAlertDialog,
} from './alertthreshold/alertthreshold.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { ComapreHistoricalComponent } from './comapre-historical/comapre-historical.component';
import { ReportComponent } from './report/report.component';
import {MatTreeModule} from '@angular/material/tree';
import { ExportAsModule } from 'ngx-export-as';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    CompareLoadsComponent,
    CompareComponent,
    IotstatusComponent,
    AlertthresholdComponent,
    chartDialog,
    NewAlertDialog,
    ComapreHistoricalComponent,
    ReportComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgApexchartsModule,
    IgxTabsModule,
    IgxNavbarModule,
    NgxMatDatetimePickerModule,
    IgxIconModule,
    NgxMatTimepickerModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 0,
      outerStrokeColor: '#d63384',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatTreeModule,
    ExportAsModule
  ],
  bootstrap: [CompareComponent],
})
export class CompareModule {}
