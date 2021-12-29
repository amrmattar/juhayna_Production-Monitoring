import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonicsComponent } from './harmonics.component';

describe('HarmonicsComponent', () => {
  let component: HarmonicsComponent;
  let fixture: ComponentFixture<HarmonicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmonicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
