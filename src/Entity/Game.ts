import User from "./User";

export default class Game
{
    private _gameId = "";
    private _title = "";
    private _sportType = "";
    private _description = "";
    private _startTime = new Date();
    private _endTime = new Date();
    private _location = "";
    private _maxPlayers = 0;
    private _currentPlayers = 0;
    private _userList: string[] = [];
    


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
    public get gameId() {
        return this._gameId;
    }
    public set gameId(value) {
        this._gameId = value;
    }

    public get title() {
        return this._title;
    }
    public set title(value) {
        this._title = value;
    }
    public get sportType() {
        return this._sportType;
    }
    public set sportType(value) {
        this._sportType = value;
    }

    public get description() {
        return this._description;
    }
    public set description(value) {
        this._description = value;
    }

    public get startTime() {
        return this._startTime;
    }
    public set startTime(value) {
        this._startTime = value;
    }

    public get endTime() {
        return this._endTime;
    }
    public set endTime(value) {
        this._endTime = value;
    }

    public get location() {
        return this._location;
    }
    public set location(value) {
        this._location = value;
    }

    public get maxPlayers() {
        return this._maxPlayers;
    }
    public set maxPlayers(value) {
        this._maxPlayers = value;
    }

    public get currentPlayers() {
        return this._currentPlayers;
    }
    public set currentPlayers(value) {
        this._currentPlayers = value;
    }
    public get userList(): string[] {
        return this._userList;
    }
    public set userList(value: string[]) {
        this._userList = value;
    }

}