import { Component, OnInit } from "@angular/core";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { typeWithParameters } from "@angular/compiler/src/render3/util";

@Component({
  selector: "app-index-home",
  templateUrl: "./index-home.component.html",
  styleUrls: ["./index-home.component.scss"]
})
export class IndexHomeComponent implements OnInit {
  token: string;
  constructor(private afMessaging: AngularFireMessaging) {}

  ngOnInit() {}

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      token => {
        this.token = token;
        console.log("Permission granted! Save to the server!", token);
      },
      error => {
        console.error(error);
      }
    );
  }
}
