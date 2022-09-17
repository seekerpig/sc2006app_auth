export default class Game
{
    gameId = "";
    title = "";
    sportType = "";
    description = "";
    date="";
    startTime="";
    endTime="";
    location = "";
    maxPlayers = 0;
    currentPlayers = 0;

    constructor (id:string,title:string, sportType:string, description:string, date:string, startTime: string, endTime:string, location:string, maxPlayers:number)
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
        
    }
}