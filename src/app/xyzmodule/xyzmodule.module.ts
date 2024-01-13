import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XyzmoduleRoutingModule } from './xyzmodule-routing.module';
import { XyzmoduleComponent } from './xyzmodule.component';


@NgModule({
  declarations: [
    XyzmoduleComponent
  ],
  imports: [
    CommonModule,
    XyzmoduleRoutingModule
  ]
})
export class XyzmoduleModule { }
