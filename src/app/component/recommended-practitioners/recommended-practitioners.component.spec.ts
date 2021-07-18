import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedPractitionersComponent } from './recommended-practitioners.component';

describe('RecommendedPractitionersComponent', () => {
  let component: RecommendedPractitionersComponent;
  let fixture: ComponentFixture<RecommendedPractitionersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedPractitionersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedPractitionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
