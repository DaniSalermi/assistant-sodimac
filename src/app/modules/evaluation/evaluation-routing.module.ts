import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RateHelpComponent } from "./rate-help/rate-help.component";

const routes: Routes = [
  {
    path: "",
    component: RateHelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule {}
