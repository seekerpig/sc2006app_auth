import User from "./User";

export default class Game
{
    gameId = "";
    title = "";
    sportType = "";
    description = "";
    date = new Date();
    startTime = new Date();
    endTime = new Date();
    location = "";
    maxPlayers = 0;
    currentPlayers = 0;
    userList: string[] = [];


    constructor (id:string,title:string, sportType:string, description:string, date: Date, startTime: Date, endTime:Date, location:string, maxPlayers:number, currentPlayers:number, uid:string)
    {
        this.gameId = id;
        this.title = title;
        this.sportType = sportType;
        this.description = description;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.maxPlayers = maxPlayers;
        this.currentPlayers = currentPlayers;
        this.addUserToGame(uid)
        
    }

    addUserToGame(user:string)
    {
        this.userList.push(user);
    }

}