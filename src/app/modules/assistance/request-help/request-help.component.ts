import { Component, OnInit } from "@angular/core";
import { WaitlistService } from "src/app/services/waitlist.service";

@Component({
  selector: "app-request-help",
  templateUrl: "./request-help.component.html",
  styleUrls: ["./request-help.component.scss"]
})
export class RequestHelpComponent implements OnInit {
  constructor(private waitlist: WaitlistService) {}

  ngOnInit() {
    this.waitlist.getWaitlistFromHall(12);
  }
}
