import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderAppComponent } from "./header-app/header-app.component";
import { FooterAppComponent } from "./footer-app/footer-app.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderAppComponent, FooterAppComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderAppComponent, FooterAppComponent]
})
export class ReusableModule {}
