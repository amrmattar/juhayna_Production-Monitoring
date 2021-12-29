import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertthresholdComponent } from './alertthreshold.component';

describe('AlertthresholdComponent', () => {
  let component: AlertthresholdComponent;
  let fixture: ComponentFixture<AlertthresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertthresholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertthresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
