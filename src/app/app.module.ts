import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/Register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DatePipe } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { AuthInterceptorInterceptor } from './Interceptor/auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
      RegisterComponent,
      NavBarComponent,
      LoginComponent,
      CourseComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    DatePipe,
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
