import Game from "./Game";

export default class User {
    userID=""
    name = "";
    email = "";
    phoneNo = 0;
    description = "";
    profileImage = "";
    gameList:string[] = []
    
    constructor(userID:string, name:string, email:string, phoneNo:number, description:string, profileImage:string)
    {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.description = description;
        this.profileImage = profileImage;
    }

    addGameToUser(game:string)
    {
        this.gameList.push(game);
    }

    


}