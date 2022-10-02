import Game from "./Game";

export default class User {
    userID=""
    name = "";
    email = "";
    phoneNo = 0;
    description = "";
    profileUrl = "";
    gameList:string[] = []
    
    constructor(userID:string, name:string, email:string, phoneNo:number, description:string, profileImage:string,gameList:string[])
    {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.description = description;
        this.profileUrl = profileImage;
    }

    addGameToUser(game:string)
    {
        this.gameList.push(game);
    }

    


}