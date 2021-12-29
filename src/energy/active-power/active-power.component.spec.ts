import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePowerComponent } from './active-power.component';

describe('ActivePowerComponent', () => {
  let component: ActivePowerComponent;
  let fixture: ComponentFixture<ActivePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
