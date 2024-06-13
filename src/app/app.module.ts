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
import { AddAdminComponent } from './pages/admin/dashboard-users/admins/add-admin/add-admin.component';
import { DetailsAdminComponent } from './pages/admin/dashboard-users/admins/details-admin/details-admin.component';
import { EditAdminComponent } from './pages/admin/dashboard-users/admins/edit-admin/edit-admin.component';
import { DeleteAdminComponent } from './pages/admin/dashboard-users/admins/delete-admin/delete-admin.component';
import { DetailsApplicantsComponent } from './pages/admin/dashboard-users/applicants/details-applicants/details-applicants.component';
import { AddTeacherComponent } from './pages/admin/dashboard-users/teachers/add-teacher/add-teacher.component';
import { DetailsTeacherComponent } from './pages/admin/dashboard-users/teachers/details-teacher/details-teacher.component';
import { DeleteTeacherComponent } from './pages/admin/dashboard-users/teachers/delete-teacher/delete-teacher.component';
import { EditTeacherComponent } from './pages/admin/dashboard-users/teachers/edit-teacher/edit-teacher.component';
import { AddStudentComponent } from './pages/admin/dashboard-users/students/add-student/add-student.component';
import { EditStudentComponent } from './pages/admin/dashboard-users/students/edit-student/edit-student.component';
import { DetailsStudentComponent } from './pages/admin/dashboard-users/students/details-student/details-student.component';
import { DeleteStudentComponent } from './pages/admin/dashboard-users/students/delete-student/delete-student.component';

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
    AddAdminComponent,
    DetailsAdminComponent,
    EditAdminComponent,
    DeleteAdminComponent,
    DetailsApplicantsComponent,
    AddTeacherComponent,
    DetailsTeacherComponent,
    DeleteTeacherComponent,
    EditTeacherComponent,
    AddStudentComponent,
    EditStudentComponent,
    DetailsStudentComponent,
    DeleteStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
