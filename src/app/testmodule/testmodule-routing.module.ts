import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestmoduleComponent } from './testmodule.component';
import { canactivatetestGuard } from './Gaurd/canactivatetest.guard';
import { Test1Component } from './test1/test1/test1.component';
import { Test2Component } from './test2/test2/test2.component';

const routes: Routes = [
  {
    path: '',
    component: TestmoduleComponent,
    canActivate:[canactivatetestGuard],
    children:[
      {
        path:'test1',component:Test1Component
      },
      {
        path:'test2',component:Test2Component
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestmoduleRoutingModule {}
