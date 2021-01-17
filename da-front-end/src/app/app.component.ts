import { Component, OnInit } from "@angular/core";
import { AppService, User } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "da-front-end";
  users: User[];

  ngOnInit(): void {
    this.showAllUsers();
  }

  constructor(private appService: AppService) {}

  showAllUsers() {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
