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
import { UserListComponent } from './modules/admin/users-manage/user-list/user-list.component';
import { UserDeailsComponent } from './modules/admin/users-manage/user-deails/user-deails.component';
import { AddUserComponent } from './modules/admin/users-manage/add-user/add-user.component';
import { AddUserFormComponent } from './modules/admin/users-manage/add-user/add-user-form/add-user-form.component';
import { DeatilsPageComponent } from './modules/admin/users-manage/user-deails/deatils-page/deatils-page.component';

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
    UserListComponent,
    UserDeailsComponent,
    AddUserComponent,
    AddUserFormComponent,
    DeatilsPageComponent
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
