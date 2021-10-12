import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCasesComponent } from './manage-cases.component';

describe('ManageCasesComponent', () => {
  let component: ManageCasesComponent;
  let fixture: ComponentFixture<ManageCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
