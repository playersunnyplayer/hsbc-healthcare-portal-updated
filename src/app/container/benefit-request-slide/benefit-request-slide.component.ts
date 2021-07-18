import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefit-request-slide',
  templateUrl: './benefit-request-slide.component.html',
  styleUrls: ['./benefit-request-slide.component.scss']
})
export class BenefitRequestSlideComponent {
  sideBarHeading_headingName : string = "";
  consultationType : boolean = false;
  recommendedPractitioners : boolean = false;
  termsPopup : boolean = false;
  newCase : boolean = false;
  appointmentSlots : boolean = false;
  appointmentSuccess : boolean = false;

  CONDITIONGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  TREATMENTGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  PROVIDERGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  CONFIRM_APPOINTMENTGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private router: Router) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
  }

  TREATMENTGroup_popup() {
      this.sideBarHeading_headingName = "Consultation Type";
      this.consultationType = true;
  }

  PROVIDERGroup_popup() {
      this.sideBarHeading_headingName = "Recommended Practitioners";
      this.recommendedPractitioners = true;
  }

  terms_popup() {
      this.sideBarHeading_headingName = "Terms and Conditions";
      this.termsPopup = true;
  }

  appointmentSlots_popup() {
      this.sideBarHeading_headingName = "APPOINTMENT SLOTS";
      this.termsPopup = false;
      this.appointmentSlots = true;
  }

  appointmentSuccessFunc() {
    this.appointmentSuccess = true;
  }

  removeAllCondition() {
    this.consultationType = false;
    this.recommendedPractitioners = false;
  }

  backHome() {
    this.router.navigateByUrl('/upcoming-appointments');
  }

  showFiller = false;

  parentFunc(data : any) {
    this.newCase = data
  }
}
