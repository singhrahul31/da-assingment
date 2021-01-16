import { Injectable } from "@angular/core";


let users = 
[{
    "id": 1,
    "name": "Alice",
    "city": "Dublin",
    "friends": [3],
    "image": "../assets/images/icons8-boy-96.png"
},
{
    "id": 2,
    "name": "Bob",
    "city": "Dublin",
    "friends": [3, 4, 5],
    "image": "../assets/images/icons8-cartoon-boy-64.png"
},
{
    "id": 3,
    "name": "Charlie",
    "city": "London",
    "friends": [1, 2, 5],
    "image": "../assets/images/icons8-boy-96.png"
},
{
    "id": 4,
    "name": "Davina",
    "city": "Belfast",
    "friends": [2, 5],
    "image": "../assets/images/icons8-girl-96.png"
},
{
    "id": 5,
    "name": "John",
    "city": "Galway",
    "friends": [2, 3, 4],
    "image": "../assets/images/icons8-cartoon-boy-64.png"
}];

let friendsList = [
    {
        "id": 3,
        "name": "Charlie",
        "city": "London",
        "friends": [1, 2, 5],
        "image": "../assets/images/icons8-boy-48.png"
    },
    {
        "id": 4,
        "name": "Davina",
        "city": "Belfast",
        "friends": [2, 5],
        "image": "../assets/images/icons8-female-user-40.png"
    },
    {
        "id": 5,
        "name": "John",
        "city": "Galway",
        "friends": [2, 3, 4],
        "image": "../assets/images/icons8-boy-48.png"
    }

];

let friendsSuggestion = [
    {
        "id": 2,
        "name": "Bob",
        "city": "Dublin",
        "friends": [3, 4, 5],
        "image": "../assets/images/icons8-cartoon-boy-48.png"
    },

];


@Injectable({
    providedIn: 'root'
})
export class AppService {


    getAllUsers() {

        return users;

    }


    getUser(id: number) {
        // console.log(users);
        let chosenUser = {};
      users.forEach(user => {
          //  console.log(user);
            if(user.id === id) {
                chosenUser = user;
            }
        })
        return chosenUser;
    }

    getFriendsList() {
        return friendsList;
    }

    getFriendsSugegstions() {
        return friendsSuggestion;
    }
}