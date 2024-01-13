import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
import { TestmoduleComponent } from './testmodule.component';


@NgModule({
  declarations: [
    TestmoduleComponent
  ],
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ]
})
export class TestmoduleModule { }
