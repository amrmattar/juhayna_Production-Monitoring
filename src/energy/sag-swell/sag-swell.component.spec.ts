import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagSwellComponent } from './sag-swell.component';

describe('SagSwellComponent', () => {
  let component: SagSwellComponent;
  let fixture: ComponentFixture<SagSwellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagSwellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagSwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
