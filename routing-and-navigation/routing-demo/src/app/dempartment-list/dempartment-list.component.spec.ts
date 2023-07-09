import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DempartmentListComponent } from './dempartment-list.component';

describe('DempartmentListComponent', () => {
  let component: DempartmentListComponent;
  let fixture: ComponentFixture<DempartmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DempartmentListComponent]
    });
    fixture = TestBed.createComponent(DempartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
