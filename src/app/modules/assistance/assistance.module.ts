import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AssistanceRoutingModule } from "./assistance-routing.module";
import { RequestHelpComponent } from "./request-help/request-help.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RequestHelpComponent],
  imports: [CommonModule, AssistanceRoutingModule, ReactiveFormsModule]
})
export class AssistanceModule {}
