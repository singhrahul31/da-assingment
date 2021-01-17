import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-mini-card",
  templateUrl: "./mini-card.component.html",
  styleUrls: ["./mini-card.component.css"],
})
export class MiniCardComponent implements OnInit {
  @Input() singleUser;
  @Input() index;

  ngOnInit() {
    //console.log(this.singleUser);
  }

  constructor() {}
}
