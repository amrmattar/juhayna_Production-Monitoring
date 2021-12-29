import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergyComponent } from './energy.component';
import { AppRoutingModule } from 'src/energy/energy-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NavigatorComponent } from './navigator/navigator.component';
import { ActivePowerComponent } from './active-power/active-power.component';
import { MatIconModule } from '@angular/material/icon';
import { HotTableModule } from '@handsontable/angular';
import {
  IgxTabsModule,
  IgxNavbarModule,
  IgxIconModule,
} from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { EnergyConsumptionComponent } from './energy-consumption/energy-consumption.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { PowerFactorComponent } from './power-factor/power-factor.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SagSwellComponent } from './sag-swell/sag-swell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HarmonicsComponent } from './harmonics/harmonics.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';

import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [
    EnergyComponent,
    NavigatorComponent,
    ActivePowerComponent,
    EnergyConsumptionComponent,
    HarmonicsComponent,
    PowerFactorComponent,
    SagSwellComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgApexchartsModule,
    IgxTabsModule,
    IgxNavbarModule,
    IgxIconModule,
    FormsModule,
    MatTabsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
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
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    ReactiveFormsModule,

    NgxMatNativeDateModule,
    HotTableModule,
    ExportAsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [EnergyComponent],
})
export class EnergyModule {}
