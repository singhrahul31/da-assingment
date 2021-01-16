import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  routeId: String;
  userDetail;
  friendsList = [];
  friendsSuggestion = [];

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    //this.userDetail = this.appService.getUser(this.route.params.);
   // console.log(this.userDetail);
    this.route.params
      .subscribe((params: Params) => {
        this.userDetail = this.appService.getUser(+params['id']);
      });
    this.friendsList = this.appService.getFriendsList();
    this.friendsSuggestion = this.appService.getFriendsSugegstions();
  }

}
