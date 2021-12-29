import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivepowerService } from 'src/services/activepower.service';
import { AlertthresholdService } from 'src/services/alertthreshold.service';
import { IotstatusService } from 'src/services/iotstatus.service';

@Component({
  selector: 'app-alertthreshold',
  templateUrl: './alertthreshold.component.html',
  styleUrls: ['./alertthreshold.component.css'],
})
export class AlertthresholdComponent implements OnInit {
  selected;
  alerts;
  constructor(
    private service: AlertthresholdService,
    public dialog: MatDialog
  ) {
    this.selected = 0;
  }

  ngOnInit(): void {
    this.service.getalerts().subscribe((res) => {
      console.log('hh');

      this.alerts = res;
    });
  }
  onTabChanged(e) {
    this.selected = e.index;
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(NewAlertDialog, {
      width: '50%',

      // data: ,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

@Component({
  selector: 'new-Alert-dialog',
  templateUrl: 'new-Alert-dialog.html',
})
export class NewAlertDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewAlertDialog>,
    private service: AlertthresholdService,
    private service2: ActivepowerService
  ) {}

  loads;
  alertForm = new FormGroup({
    condition: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    threshValue: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    sourceId: new FormControl(Validators.required),
  });

  ngOnInit() {
    this.service2.getFunctions().subscribe((res) => {
      this.loads = res;
    });
  }
  onSubmit() {
    this.service.addAlert(this.alertForm.value).subscribe((res) => {
      console.log('Added alert');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
