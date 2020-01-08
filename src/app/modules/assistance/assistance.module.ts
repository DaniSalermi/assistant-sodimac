import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceRoutingModule } from './assistance-routing.module';
import { RequestHelpComponent } from './request-help/request-help.component';


@NgModule({
  declarations: [RequestHelpComponent],
  imports: [
    CommonModule,
    AssistanceRoutingModule
  ]
})
export class AssistanceModule { }
