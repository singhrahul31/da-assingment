import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'da-front-end';
  users = [];

  
  ngOnInit(): void {
    this.showAllUsers();
  }

  constructor(private appService: AppService) {}

  showAllUsers() {
    this.users = this.appService.getAllUsers();
  }
}
