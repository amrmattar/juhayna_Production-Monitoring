import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryReportComponent } from './summary-report.component';

describe('SummaryReportComponent', () => {
  let component: SummaryReportComponent;
  let fixture: ComponentFixture<SummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
