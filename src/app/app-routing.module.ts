import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DashboardHomeComponent } from './pages/admin/dashboard-home/dashboard-home.component';
import { DashboardUsersComponent } from './pages/admin/dashboard-users/dashboard-users.component';
import { DashboardRegistrationComponent } from './pages/admin/dashboard-registration/dashboard-registration.component';
import { DashboardClassroomsComponent } from './pages/admin/dashboard-classrooms/dashboard-classrooms.component';
import { DashboardCoursesComponent } from './pages/admin/dashboard-courses/dashboard-courses.component';
import { DashboardCommentsComponent } from './pages/admin/dashboard-comments/dashboard-comments.component';
import { DashboardHelpComponent } from './pages/admin/dashboard-help/dashboard-help.component';
import { DashboardQualificationsComponent } from './pages/admin/dashboard-qualifications/dashboard-qualifications.component';
import { StudentsComponent } from './pages/admin/dashboard-users/students/students.component';
import { TeachersComponent } from './pages/admin/dashboard-users/teachers/teachers.component';
import { ApplicantsComponent } from './pages/admin/dashboard-users/applicants/applicants.component';
import { AdminsComponent } from './pages/admin/dashboard-users/admins/admins.component';
import { DashboardScheduleComponent } from './pages/admin/dashboard-schedule/dashboard-schedule.component';
import { DashboardClassComponent } from './pages/admin/dashboard-class/dashboard-class.component';
import { DashboardStudentComponent } from './pages/students/dashboard-student/dashboard-student.component';
import { DetailsCourseComponent } from './pages/students/details-course/details-course.component';
import { StudentCoursesComponent } from './pages/students/student-courses/student-courses.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component:  DashboardComponent, children:[
    { path: 'home', component: DashboardHomeComponent },
    { path: 'users', component: DashboardUsersComponent},
    { path: 'users/students', component: StudentsComponent},
    { path: 'users/teachers', component: TeachersComponent},
    { path: 'users/applicants', component: ApplicantsComponent},
    { path: 'users/admins', component: AdminsComponent},
    { path: 'students', component: StudentsComponent},
    { path: 'registration', component: DashboardRegistrationComponent },
    { path: 'classrooms', component: DashboardClassroomsComponent },
    { path: 'courses', component: DashboardCoursesComponent },
    { path: 'schedule', component: DashboardScheduleComponent },
    { path: 'class', component: DashboardClassComponent },
    { path: 'qualifications', component: DashboardQualificationsComponent },
    { path: 'comments', component: DashboardCommentsComponent },
    { path: 'help', component: DashboardHelpComponent },
  ]},
  { path: 'student', component: DashboardStudentComponent, children:[
    { path: '', component: StudentCoursesComponent},
    { path: 'details-course', component: DetailsCourseComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
