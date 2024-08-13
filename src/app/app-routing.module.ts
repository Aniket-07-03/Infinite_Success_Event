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
import { MemberLoginComponent } from './modules/member/auth/member-login/member-login.component';
import { MemberRegisterComponent } from './modules/member/auth/member-register/member-register.component';
import { MemberDashboardComponent } from './modules/member/member-dashboard/member-dashboard.component';
import { MemberEventListComponent } from './modules/member/member-event-list/member-event-list.component';
import { TicketBookComponent } from './modules/member/ticket-book/ticket-book.component';
import { MemberEventDetailsComponent } from './modules/member/member-event-details/member-event-details.component';
import { PreviewTicketComponent } from './modules/member/ticket-book/preview-ticket/preview-ticket.component';
import { TicketsComponent } from './modules/member/tickets/tickets.component';
import { ProfileComponent } from './modules/member/profile/profile.component';
import { AssignEventListComponent } from './modules/verifier/assign-event-list/assign-event-list.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPassComponent },
  { path: 'user_manage', component: UserManageComponent },
  { path: 'dashboard', component: DashExampComponent },
  { path:'event/:id', component:EventDetailsComponent},
  { path:'event', component:CreateEventComponent},
  { path:'event-form', component:CreateEventFormComponent},
  { path:'member-login', component:MemberLoginComponent},
  { path:'member-register', component:MemberRegisterComponent},
  { path:'member-dashboard', component:MemberDashboardComponent},
  { path:'member-event-list', component:MemberEventListComponent},
  { path:'ticket-book', component:TicketBookComponent},
  { path:'member-event/:id', component:MemberEventDetailsComponent},
  { path:'preview', component:PreviewTicketComponent},
  { path:'tickets', component:TicketsComponent},
  { path:'profile', component:ProfileComponent},
  { path:'assign-list', component:AssignEventListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
