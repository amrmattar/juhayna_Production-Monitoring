import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SideNavComponent } from './generic-comp/side-nav/side-nav.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuListItemComponent } from './generic-comp/menu-list-item/menu-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { EnergyConsumptionComponent } from './pages/energy-consumption/energy-consumption.component';
import {
  IgxIconModule,
  IgxNavbarModule,
  IgxTabsModule,
} from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppSettingsComponent } from './pages/app-settings/app-settings.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RegisterComponent } from './pages/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../app/helpers/error.interceptor';
import { JwtInterceptor } from '../app/helpers/jwt.interceptor';
import { backendProvider } from '../app/helpers/backend';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MachinelistComponent } from './machinelist/machinelist.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GaugeChartModule } from 'angular-gauge-chart';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import {MatTreeModule} from '@angular/material/tree';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MenuListItemComponent,
    EnergyConsumptionComponent,
    LoginComponent,
    AppSettingsComponent,
    RegisterComponent,
    MachinelistComponent,
    SummaryReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    MatButtonToggleModule,
    MatToolbarModule,
    MatDatepickerModule,
    GaugeChartModule,
    NgxSliderModule,
    NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  MatTreeModule

    // IgxTabsModule,
    // IgxNavbarModule,
    // IgxIconModule,
    // FormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule],
})
export class AppModule {}
