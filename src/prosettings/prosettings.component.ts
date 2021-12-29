import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HarmonicsComponent } from 'src/energy/harmonics/harmonics.component';
import { HarmonicsService } from 'src/services/harmonics.service';
import { SettingsService } from 'src/services/settings.service';

@Component({
  selector: 'app-prosettings',
  templateUrl: './prosettings.component.html',
  styleUrls: ['./prosettings.component.css'],
})
export class ProsettingsComponent implements OnInit {
  selectedTabIndex: number;
  selectedTabIndex1: number;
  selectedTabIndex2: number;
  selectedTabIndex3: number;
  constructor(
    private service: HarmonicsService,
    public dialog: MatDialog,
    private service2: SettingsService
  ) {
    this.selectedTabIndex = 0;
    this.selectedTabIndex1 = 0;
    this.selectedTabIndex2 = 0;
    this.selectedTabIndex3 = 0;
  }
  factories;
  functions;
  functions2;
  areas;
  ngOnInit(): void {
    this.service.getFactories().subscribe((res) => {
      this.factories = res;
    });
    this.service.getFunctions().subscribe((res) => {
      this.functions = res;
    });
    this.service.getFunctionsfunctions().subscribe((res) => {
      this.functions2 = res;
    });
    this.service.getAreas().subscribe((res) => {
      this.areas = res;
    });
  }
  onTabChanged(a) {
    this.selectedTabIndex = a.index;
  }
  onTabChangedfact(a) {
    this.selectedTabIndex1 = a.index;
  }
  onTabChangedload(a) {
    this.selectedTabIndex2 = a.index;
  }
  onTabChangedArea(a) {
    this.selectedTabIndex3 = a.index;
  }
  openEditDialog(fact) {
    const dialogRef = this.dialog.open(NewFactoryDialog, {
      width: '50%',

      data: fact,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openEditFuncDialog(func) {
    const dialogRef = this.dialog.open(NewFunctionDialog, {
      width: '50%',

      data: func,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openEditAreaDialog(func) {
    const dialogRef = this.dialog.open(NewAreaDialog, {
      width: '50%',

      data: func,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  deletefact(fact) {
    confirm('Are you sure to delete ' + fact.name);
    {
      this.service2.deleteFactory(fact.id).subscribe((res) => {
        this.factories.splice(this.factories.indexOf(fact), 1);
      });
    }
  }
  deletefunc(fact) {
    confirm('Are you sure to delete ' + fact.name);
    {
      this.service2.deleteFunction(fact.id).subscribe((res) => {
        this.functions2.splice(this.functions2.indexOf(fact), 1);
      });
    }
  }
  deleteload(fact) {
    confirm('Are you sure to delete ' + fact.name);
    {
      this.service2.deleteLoad(fact.id).subscribe((res) => {
        this.functions.splice(this.functions.indexOf(fact), 1);
      });
    }
  }
  openEditfunctionDialog(load) {
    console.log('load');

    const dialogRef = this.dialog.open(NewLoadDialog, {
      width: '50%',

      data: load,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  clickMethodfunction(fact) {
    console.log('here');
  }
  action1() {
    const dialogRef = this.dialog.open(NewFactoryDialog, {
      width: '50%',

      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  action2() {
    const dialogRef2 = this.dialog.open(NewFunctionDialog, {
      width: '50%',

      // data: {name: this.name, animal: this.animal}
    });

    dialogRef2.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  action3() {
    const dialogRef2 = this.dialog.open(NewLoadDialog, {
      width: '50%',

      // data: {name: this.name, animal: this.animal}
    });

    dialogRef2.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  action4() {
    const dialogRef2 = this.dialog.open(NewAreaDialog, {
      width: '50%',

      // data: {name: this.name, animal: this.animal}
    });

    dialogRef2.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  actionX() {}
}

@Component({
  selector: 'new-factory-dialog',
  templateUrl: 'new-factory-dialog.html',
})
export class NewFactoryDialog {
  constructor(
    public dialogRef: MatDialogRef<NewFactoryDialog>,
    private service: SettingsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  factoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.service
      .newFactory(
        this.factoryForm.value.name,
        this.factoryForm.value.location,
        this.factoryForm.value.description
      )
      .subscribe(
        (res) => {
          console.log('created');
          this.dialogRef.close();
        },
        (err) => {
          console.log('error occured');
        }
      );
  }
  onSubmit2() {
    this.service.editFactory(this.data.id, this.data).subscribe(
      (res) => {
        console.log('edited');
        this.dialogRef.close();
      },
      (err) => {
        console.log('error occured');
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'new-function-dialog',
  templateUrl: 'new-function-dialog.html',
})
export class NewFunctionDialog {
  factories;
  functions;
  constructor(
    public dialogRef: MatDialogRef<NewFunctionDialog>,
    private service: SettingsService,
    private service2: HarmonicsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.service2.getFactories().subscribe((res) => {
      this.factories = res;
    });
    this.service2.getFunctionsfunctions().subscribe((res) => {
      this.functions = res;
    });
  }

  functionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    factoryId: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.service
      .newFunction(
        this.functionForm.value.name,
        this.functionForm.value.description,
        this.functionForm.value.factoryId

      )
      .subscribe(
        (res) => {
          console.log(this.functionForm.value);
          this.dialogRef.close();
        },
        (err) => {
          console.log(this.functionForm.value);
          console.log('error occured');
        }
      );
  }
  onSubmit2() {
    this.service.editFunction(this.data.id, this.data).subscribe(
      (res) => {
        console.log('Edited');
        this.dialogRef.close();
      },
      (err) => {
        console.log('error occured');
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'new-area-dialog',
  templateUrl: 'new-area-dialog.html',
})
export class NewAreaDialog {
  factories;
  functions;
  constructor(
    public dialogRef: MatDialogRef<NewAreaDialog>,
    private service: SettingsService,
    private service2: HarmonicsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.service2.getFactories().subscribe((res) => {
      this.factories = res;
    });
    this.service2.getFunctionsfunctions().subscribe((res) => {
      this.functions = res;
    });
  }

  areaForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.service
      .newArea(
        this.areaForm.value.name,
        this.areaForm.value.description,
        this.areaForm.value.factoryId
      )
      .subscribe(
        (res) => {
          console.log('created');
          this.dialogRef.close();
        },
        (err) => {
          console.log('error occured');
        }
      );
  }
  onSubmit2() {
    this.service.editArea(this.data.id, this.data).subscribe(
      (res) => {
        console.log('Edited');
        this.dialogRef.close();
      },
      (err) => {
        console.log('error occured');
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'new-load-dialog',
  templateUrl: 'new-load-dialog.html',
})
export class NewLoadDialog {
  factories;
  functions;
  areas;
  constructor(
    public dialogRef: MatDialogRef<NewLoadDialog>,
    private service: SettingsService,
    private service2: HarmonicsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.service2.getFactories().subscribe((res) => {
      this.factories = res;
    });
    this.service2.getFunctionsfunctions().subscribe((res) => {
      this.functions = res;
    });
    this.service2.getAreas().subscribe((res) => {
      this.areas = res;
    });
  }

  loadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    sourceId: new FormControl(),
    factoryId: new FormControl('', Validators.required),
    functionId: new FormControl('', Validators.required),
    typeId: new FormControl(),
    currentRating: new FormControl('', Validators.required),
    voltageRating: new FormControl('', Validators.required),
    rpmRating: new FormControl('', Validators.required),
    powerRating: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    areaId: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.loadForm.value);

    if (this.loadForm.valid) {
      this.service.newLoad(this.loadForm.value).subscribe(
        (res) => {
          console.log('created');
          this.dialogRef.close();
        },
        (err) => {
          console.log('error occured');
        }
      );
    }
  }
  onSubmit2() {
    this.service.editLoad(this.data.id, this.data).subscribe(
      (res) => {
        console.log('Edited');
        this.dialogRef.close();
      },
      (err) => {
        console.log('error occured');
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
