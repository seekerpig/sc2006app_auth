import Game from "./Game";

export default class User {
    uniqueId=""
    name = "";
    email = "";
    phoneNo = 0;
    description = "";
    profileImage = "";
    gameList:string[] = []
    
    constructor(uid:string, name:string, email:string, phoneNo:number, description:string, profileImage:string)
    {
        this.uniqueId = uid;
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