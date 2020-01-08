import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RequestHelpComponent } from "./request-help/request-help.component";

const routes: Routes = [
  {
    path: "",
    component: RequestHelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceRoutingModule {}
