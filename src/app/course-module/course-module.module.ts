import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseModuleRoutingModule } from './course-module-routing.module';
import { CourseModuleComponent } from './course-module.component';


@NgModule({
  declarations: [
    CourseModuleComponent
  ],
  imports: [
    CommonModule,
    CourseModuleRoutingModule
  ]
})
export class CourseModuleModule { }
