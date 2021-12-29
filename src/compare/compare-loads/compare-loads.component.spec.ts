import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareLoadsComponent } from './compare-loads.component';

describe('CompareLoadsComponent', () => {
  let component: CompareLoadsComponent;
  let fixture: ComponentFixture<CompareLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareLoadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
