import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitRequestSlideComponent } from './benefit-request-slide.component';

describe('BenefitRequestSlideComponent', () => {
  let component: BenefitRequestSlideComponent;
  let fixture: ComponentFixture<BenefitRequestSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitRequestSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitRequestSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
