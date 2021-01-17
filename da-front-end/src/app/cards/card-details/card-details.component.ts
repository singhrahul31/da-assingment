import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AppService, User } from "src/app/app.service";
import { UserModel } from "src/app/User.model";

@Component({
  selector: "app-card-details",
  templateUrl: "./card-details.component.html",
  styleUrls: ["./card-details.component.css"],
})
export class CardDetailsComponent implements OnInit {

  userDetail = new UserModel("", "", "", "");
  friendsList: User[] = [];
  friendsSuggestion: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params) {
        this.appService.getUser(+params["id"]).subscribe((users) => {
          this.userDetail = users["user"][0];
          this.friendsList = users["friends"];
          this.friendsSuggestion = users["friendsSuggestions"];
        });
      }
    });
  }

  closeDisplay() {
    this.router.navigate(["../"]);
  }
}
