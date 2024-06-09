import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { NavarLoggedComponent } from './components/navar-logged/navar-logged.component';
import { PresentationComponent } from './pages/home/presentation/presentation.component';
import { PromotionComponent } from './pages/home/promotion/promotion.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { AboutComponent } from './pages/home/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './pages/login/welcome/welcome.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarHomeComponent,
    NavarLoggedComponent,
    PresentationComponent,
    PromotionComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    WelcomeComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
