import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitRequestSlideComponent } from './container/benefit-request-slide/benefit-request-slide.component';
import { CasedetailsComponent } from './container/casedetails/casedetails.component';
import { CreateNewCaseComponent } from './container/create-new-case/create-new-case.component';
import { LoginComponent } from './container/login/login.component';
import { ManageCasesComponent } from './container/manage-cases/manage-cases.component';
import { UpcomingAppointmentsComponent } from './container/upcoming-appointments/upcoming-appointments.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  { path: 'upcoming-appointments', component: UpcomingAppointmentsComponent },
  { path: 'manage-cases', component: ManageCasesComponent },
  { path: 'create-new-case', component: CreateNewCaseComponent },
  { path: 'case-details', component: CasedetailsComponent },
  { path: 'benefit-request', component: BenefitRequestSlideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
