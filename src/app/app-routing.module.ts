import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "assistance",
    loadChildren: () =>
      import("./modules/assistance/assistance.module").then(
        mod => mod.AssistanceModule
      )
  },
  {
    path: "evaluation",
    loadChildren: () =>
      import("./modules/evaluation/evaluation.module").then(
        mod => mod.EvaluationModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
