import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UpcomingAppointmentsComponent } from './container/upcoming-appointments/upcoming-appointments.component';
import { LoginComponent } from './container/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { CasedetailsComponent } from './container/casedetails/casedetails.component';
import { BenefitRequestSlideComponent } from './container/benefit-request-slide/benefit-request-slide.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ConsultationTypeComponent } from './component/consultation-type/consultation-type.component';
import { RecommendedPractitionersComponent } from './component/recommended-practitioners/recommended-practitioners.component';
import { TermsPopupComponent } from './component/terms-popup/terms-popup.component';
import { AppointmentSlotsPopupComponent } from './component/appointment-slots-popup/appointment-slots-popup.component';
import { ManageCasesComponent } from './container/manage-cases/manage-cases.component';
import { CreateNewCaseComponent } from './container/create-new-case/create-new-case.component';
import { TimelineSectionComponent } from './component/timeline-section/timeline-section.component';
import { MatTimepickerModule } from 'mat-timepicker';
import { SelectPractitionerPopupComponent } from './container/select-practitioner-popup/select-practitioner-popup.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingAppointmentsComponent,
    LoginComponent,
    HeaderComponent,
    CasedetailsComponent,
    BenefitRequestSlideComponent,
    ConsultationTypeComponent,
    RecommendedPractitionersComponent,
    TermsPopupComponent,
    AppointmentSlotsPopupComponent,
    ManageCasesComponent,
    CreateNewCaseComponent,
    TimelineSectionComponent,
    SelectPractitionerPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSelectModule,
    MatSidenavModule,
    MatTimepickerModule,
    // MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
