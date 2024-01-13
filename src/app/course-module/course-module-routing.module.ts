import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseModuleComponent } from './course-module.component';

const routes: Routes = [
  { path: 'XYXCourse', component: CourseModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseModuleRoutingModule { }
