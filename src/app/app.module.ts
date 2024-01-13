import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/Register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DatePipe } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { AuthInterceptorInterceptor } from './Interceptor/auth-interceptor.interceptor';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseEditDirectiveDirective } from './directive/CourseEditDirective.directive';
import { CacheInterceptor } from './Interceptor/cache.interceptor';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
      RegisterComponent,
      NavBarComponent,
      LoginComponent,
      CourseComponent,
      CourseListComponent,
      CourseDetailsComponent,
      CourseEditDirectiveDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    DatePipe,
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorInterceptor,multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,useClass:CacheInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
