import { Component, OnInit } from "@angular/core";
import { WaitlistService } from "src/app/services/waitlist.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-request-help",
  templateUrl: "./request-help.component.html",
  styleUrls: ["./request-help.component.scss"]
})
export class RequestHelpComponent implements OnInit {
  hall = new FormControl("");
  clientName = new FormControl("");
  halls: any = [];

  constructor(private waitlist: WaitlistService) {}

  ngOnInit() {
    this.waitlist.getHallName().subscribe((store: any) => {
      console.log(store[0]);
      this.halls = store[0].halls;
      this.hallName();
    });
  }

  hallName() {
    let output = this.halls.filter(
      hall => hall.number === parseInt(this.hall.value)
    );
    console.log(output[0]);
    return output[0];
  }

  saveClient() {
    let halldata = this.hallName();
    this.waitlist.addToWailist(
      halldata.name,
      halldata.number,
      this.clientName.value
    );
  }
}
