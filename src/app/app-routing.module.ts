import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { EventManageComponent } from './modules/admin/users-manage/event-manage.component';
import { UserManageComponent } from './modules/admin/event-manage/user-manage.component';
import { OtpComponent } from './modules/auth/otp/otp.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ForgetPassComponent } from './modules/auth/forget-pass/forget-pass.component';
import { DashExampComponent } from './shared/dash-examp/dash-examp.component';
import { EventDetailsComponent } from './modules/admin/event-manage/event-details/event-details.component';
import { CreateEventComponent } from './modules/admin/event-manage/create-event/create-event.component';
import { CreateEventFormComponent } from './modules/admin/event-manage/create-event-form/create-event-form.component';
import { UserListComponent } from './modules/admin/users-manage/user-list/user-list.component';
import { AddUserComponent } from './modules/admin/users-manage/add-user/add-user.component';
import { DetailsComponent } from './modules/admin/event-manage/details/details.component';
import { DeatilsPageComponent } from './modules/admin/users-manage/user-deails/deatils-page/deatils-page.component';
import { UserDeailsComponent } from './modules/admin/users-manage/user-deails/user-deails.component';
import { VerifierComponent } from './modules/admin/admin-manage/verifier/verifier.component';
import { VerifierPageComponent } from './modules/admin/admin-manage/verifier/verifier-page/verifier-page.component';
import { VerifierDetailComponent } from './modules/admin/admin-manage/verifier/verifier-detail/verifier-detail.component';
import { AdminPageComponent } from './modules/admin/admin-manage/add-admin/admin-page/admin-page.component';
import { BillComponent } from './modules/admin/bill/bill.component';
import { HeaderComponent } from './modules/dashboard/header/header.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPassComponent },
  { path: 'event_manage', component: UserManageComponent },
  { path: 'dashboard', component: DashExampComponent },
  { path:'event/:id', component:EventDetailsComponent},
  { path:'event', component:CreateEventComponent},
  { path:'event-form', component:CreateEventFormComponent},
  { path:'user-list', component:UserListComponent},
  { path:'add-user', component:AddUserComponent},
  { path:'members/:id', component:UserDeailsComponent},
  { path:'verifiers/:id', component:VerifierDetailComponent},
  { path:'verify', component:VerifierPageComponent},
  { path:'admin', component:AdminPageComponent},
  { path:'bill', component:BillComponent},
  { path:'invoice', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
