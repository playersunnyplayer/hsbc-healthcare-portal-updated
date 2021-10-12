import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPractitionerPopupComponent } from './select-practitioner-popup.component';

describe('SelectPractitionerPopupComponent', () => {
  let component: SelectPractitionerPopupComponent;
  let fixture: ComponentFixture<SelectPractitionerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPractitionerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPractitionerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
