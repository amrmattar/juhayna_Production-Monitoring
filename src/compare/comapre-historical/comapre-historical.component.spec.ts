import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapreHistoricalComponent } from './comapre-historical.component';

describe('ComapreHistoricalComponent', () => {
  let component: ComapreHistoricalComponent;
  let fixture: ComponentFixture<ComapreHistoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComapreHistoricalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapreHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
