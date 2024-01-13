import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Register/Register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes: Routes = [
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'course',component:CourseComponent},
{path:'',component:CourseListComponent},


{ path: 'CourseModule',
 loadChildren: () =>
import('./course-module/course-module.module').then(m => m.CourseModuleModule) },
{ path: 'xyx', loadChildren: () => import('./xyzmodule/xyzmodule.module').then(m => m.XyzmoduleModule) },
{ path: 'test', loadChildren: () => import('./testmodule/testmodule.module').then(m => m.TestmoduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
