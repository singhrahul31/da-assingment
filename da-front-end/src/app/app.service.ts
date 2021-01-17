import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Capability } from "protractor";
import { map } from "rxjs/operators";

let usersImage = [
  {
    id: "1",
    image: "../assets/images/icons8-boy-96.png",
  },
  {
    id: "2",
    image: "../assets/images/icons8-cartoon-boy-64.png",
  },
  {
    id: "3",
    image: "../assets/images/icons8-boy-96.png",
  },
  {
    id: "4",
    image: "../assets/images/icons8-girl-96.png",
  },
  {
    id: "5",
    image: "../assets/images/icons8-cartoon-boy-64.png",
  },
];

export interface User {
  id: string;
  name: String;
  city: String;
  image: String;
}

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    //return users;
    return this.http.get<User[]>("http://localhost:8080/users").pipe(
      map((users) => {
        let updatedArray = [];
        for (let user of users) {
          updatedArray.push(this.mapImage(user));
        }
        return updatedArray;
      })
    );
  }

  getUser(id: number) {
    return this.http.get("http://localhost:8080/user?id=" + id).pipe(
      map((users) => {
        //console.log("1 user data", users);
        return this.mapFriendsData(users);
      })
    );
  }

  private mapImage(userData: User) {
    for (let user of usersImage) {
      if (user.id === userData.id) {
        return {
          ...userData,
          image: user.image,
        };
      }
    }
  }

  private mapFriendsData(usersData) {
    let friendsList: User[] = [];
    let friendsSuggestedList: User[] = [];
    let userData: User[] = [];
    usersData.forEach((element) => {
      userData.push({
        id: element["userId"],
        name: element["userName"],
        city: element["userCity"],
        image: "",
      });
      friendsList.push({
        id: element["friendsId"],
        name: element["friendName"],
        city: element["friendCity"],
        image: "",
      });
      friendsSuggestedList.push({
        id: element["friendsSuggestedId"],
        name: element["friendSuggestedName"],
        city: element["friendSuggestedCity"],
        image: "",
      });
    });
    userData = this.distinctArray(userData);
    friendsList = this.distinctArray(friendsList);
    friendsSuggestedList = this.distinctArray(
      friendsSuggestedList,
      friendsList
    );
    return {
      user: userData,
      friends: friendsList,
      friendsSuggestions: friendsSuggestedList,
    };
  }

  private distinctArray(array, parentArray?) {
    const result = [];
    const map = new Map();
    if (parentArray) {
      parentArray.forEach((item) => {
        map.set(item.id, true);
      });
    }
    for (const item of array) {
      if (!map.has(item.id)) {
        map.set(item.id, true);
        result.push(this.mapImage(item));
      }
    }
    return result;
  }
}
