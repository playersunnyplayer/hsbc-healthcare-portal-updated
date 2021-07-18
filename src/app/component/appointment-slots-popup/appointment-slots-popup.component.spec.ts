import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSlotsPopupComponent } from './appointment-slots-popup.component';

describe('AppointmentSlotsPopupComponent', () => {
  let component: AppointmentSlotsPopupComponent;
  let fixture: ComponentFixture<AppointmentSlotsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSlotsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSlotsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
