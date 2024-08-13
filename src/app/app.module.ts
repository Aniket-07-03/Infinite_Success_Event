import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EventManageComponent } from './modules/admin/users-manage/event-manage.component';
import { UserManageComponent } from './modules/admin/event-manage/user-manage.component';
import { OtpComponent } from './modules/auth/otp/otp.component';
import { ForgetPassComponent } from './modules/auth/forget-pass/forget-pass.component';
import { HeaderComponent } from './modules/dashboard/header/header.component';
import { SidebarComponent } from './modules/dashboard/sidebar/sidebar.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageComponent } from './modules/admin/manage/manage.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { DashExampComponent } from './shared/dash-examp/dash-examp.component';
import { EventDetailsComponent } from './modules/admin/event-manage/event-details/event-details.component';
import { DetailsComponent } from './modules/admin/event-manage/details/details.component';
import { CreateEventComponent } from './modules/admin/event-manage/create-event/create-event.component';
import { CreateEventFormComponent } from './modules/admin/event-manage/create-event-form/create-event-form.component';
import { MemberRegisterComponent } from './modules/member/auth/member-register/member-register.component';
import { MemberLoginComponent } from './modules/member/auth/member-login/member-login.component';
import { MemberDashboardComponent } from './modules/member/member-dashboard/member-dashboard.component';
import { DashDetailComponent } from './modules/member/member-dashboard/dash-detail/dash-detail.component';
import { MemberEventListComponent } from './modules/member/member-event-list/member-event-list.component';
import { EventSidebarComponent } from './modules/member/member-event-list/event-sidebar/event-sidebar.component';
import { MemberEventDetailsComponent } from './modules/member/member-event-details/member-event-details.component';
import { TicketBookComponent } from './modules/member/ticket-book/ticket-book.component';
import { PreviewTicketComponent } from './modules/member/ticket-book/preview-ticket/preview-ticket.component';
import { TicketsComponent } from './modules/member/tickets/tickets.component';
import { ProfileComponent } from './modules/member/profile/profile.component';
import { AssignEventListComponent } from './modules/verifier/assign-event-list/assign-event-list.component';
import { AssignTicketDetailsComponent } from './modules/verifier/assign-ticket-details/assign-ticket-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    EventManageComponent,
    UserManageComponent,
    OtpComponent,
    ForgetPassComponent,
    HeaderComponent,
    SidebarComponent,
    RegisterComponent,
    ManageComponent,
    CalendarComponent,
    DashExampComponent,
    EventDetailsComponent,
    DetailsComponent,
    CreateEventComponent,
    CreateEventFormComponent,
    MemberRegisterComponent,
    MemberLoginComponent,
    MemberDashboardComponent,
    DashDetailComponent,
    MemberEventListComponent,
    EventSidebarComponent,
    MemberEventDetailsComponent,
    TicketBookComponent,
    PreviewTicketComponent,
    TicketsComponent,
    ProfileComponent,
    AssignEventListComponent,
    AssignTicketDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot()

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
