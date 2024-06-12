import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { PresentationComponent } from './pages/home/presentation/presentation.component';
import { PromotionComponent } from './pages/home/promotion/promotion.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { AboutComponent } from './pages/home/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './pages/login/welcome/welcome.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './pages/admin/dashboard-home/dashboard-home.component';
import { DashboardUsersComponent } from './pages/admin/dashboard-users/dashboard-users.component';
import { NavbarLoggedComponent } from './components/navbar-logged/navbar-logged.component';
import { SiderbarAdminComponent } from './components/siderbar-admin/siderbar-admin.component';
import { SiderbarTeacherComponent } from './components/siderbar-teacher/siderbar-teacher.component';
import { DashboardRegistrationComponent } from './pages/admin/dashboard-registration/dashboard-registration.component';
import { DashboardClassroomsComponent } from './pages/admin/dashboard-classrooms/dashboard-classrooms.component';
import { DashboardCoursesComponent } from './pages/admin/dashboard-courses/dashboard-courses.component';
import { DashboardQualificationsComponent } from './pages/admin/dashboard-qualifications/dashboard-qualifications.component';
import { DashboardCommentsComponent } from './pages/admin/dashboard-comments/dashboard-comments.component';
import { DashboardHelpComponent } from './pages/admin/dashboard-help/dashboard-help.component';
import { StudentsComponent } from './pages/admin/dashboard-users/students/students.component';
import { AdminsComponent } from './pages/admin/dashboard-users/admins/admins.component';
import { ApplicantsComponent } from './pages/admin/dashboard-users/applicants/applicants.component';
import { TeachersComponent } from './pages/admin/dashboard-users/teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarHomeComponent,
    PresentationComponent,
    PromotionComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    WelcomeComponent,
    LoginFormComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardUsersComponent,
    NavbarLoggedComponent,
    SiderbarAdminComponent,
    SiderbarTeacherComponent,
    DashboardRegistrationComponent,
    DashboardClassroomsComponent,
    DashboardCoursesComponent,
    DashboardQualificationsComponent,
    DashboardCommentsComponent,
    DashboardHelpComponent,
    StudentsComponent,
    AdminsComponent,
    ApplicantsComponent,
    TeachersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
