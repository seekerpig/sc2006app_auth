import User from "./User";

export default class Game
{
    private gameId:string;
    private title:string;
    private sportType:string;
    private description:string;
    private startTime:Date;
    private endTime:Date;
    private location:string;
    private maxPlayers:number;
    private currentPlayers:number;
    private userList: string[] = [];
    


    constructor (id:string,title:string, sportType:string, description:string, startTime: Date, endTime:Date, location:string, maxPlayers:number, currentPlayers:number, uid:string[])
    {
        this.gameId = id;
        this.title = title;
        this.sportType = sportType;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.maxPlayers = maxPlayers;
        this.currentPlayers = currentPlayers;
        this.userList = uid;
        //this.addUserToGame(uid)
        
    }

    //add a new user into userList.
    public addUserToGame(user:string)
    {
        this.userList.push(user);
    }


    //getter and setter functions to prevent users from editing attributes directly!
    public getGameId() {
        return this.gameId;
    }
    public setGameId(value:string) {
        this.gameId = value;
    }

    public getTitle() {
        return this.title;
    }
    public setTitle(value:string) {
        this.title = value;
    }
    public getSportType() {
        return this.sportType;
    }
    public setSportType(value:string) {
        this.sportType = value;
    }

    public getDescription() {
        return this.description;
    }
    public setDescription(value:string) {
        this.description = value;
    }

    public getStartTime() {
        return this.startTime;
    }
    public setStartTime(value:Date) {
        this.startTime = value;
    }

    public getEndTime() {
        return this.endTime;
    }
    public setEndTime(value:Date) {
        this.endTime = value;
    }

    public getLocation() {
        return this.location;
    }
    public setLocation(value:string) {
        this.location = value;
    }

    public getMaxPlayers() {
        return this.maxPlayers;
    }
    public setMaxPlayers(value:number) {
        this.maxPlayers = value;
    }

    public getCurrentPlayers() {
        return this.currentPlayers;
    }
    public setCurrentPlayers(value:number) {
        this.currentPlayers = value;
    }
    public getUserList(): string[] {
        return this.userList;
    }
    public setUserList(value: string[]) {
        this.userList = value;
    }

}