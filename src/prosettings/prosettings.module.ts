import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NewFactoryDialog,
  NewFunctionDialog,
  NewLoadDialog,
  NewAreaDialog,
  ProsettingsComponent,
} from './prosettings.component';
import { DetaileddataComponent } from './detaileddata/detaileddata.component';
import { prosettingsRoutingModule } from './prosettings-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SmdFabSpeedDialModule } from 'angular-speed-dial';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';

@NgModule({
  declarations: [
    ProsettingsComponent,
    DetaileddataComponent,
    NewFactoryDialog,
    NewFunctionDialog,
    NewLoadDialog,
    NewAreaDialog
  ],
  imports: [
    CommonModule,
    prosettingsRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    SmdFabSpeedDialModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
  ],
})
export class ProsettingsModule {}
