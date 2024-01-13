import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzmoduleComponent } from './xyzmodule.component';

const routes: Routes = [{ path: '', component: XyzmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XyzmoduleRoutingModule { }
