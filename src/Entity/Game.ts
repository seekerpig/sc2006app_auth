/**
 * Class representing a game
 */
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
    

    /**
     * Create A Game
     * @param {string} gameId Uniquely generated game ID
     * @param {string} title Title of the game
     * @param {string} sportType Type of Sport
     * @param {string} description Description of the game session
     * @param {Date} startTime Start Time & Date
     * @param {Date} endTime End Time & Date.
     * @param {string} location Location of the game event.
     * @param {number} maxPlayers Maximum players allowed for game
     * @param {number} currentPlayers Current players for the game
     * @param {string[]} userList List of users who are in this game
     */
    constructor (id:string,title:string, sportType:string, description:string, startTime: Date, endTime:Date, location:string, maxPlayers:number, currentPlayers:number, userList:string[])
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
        this.userList = userList;
        
    }


    //getter and setter functions to prevent users from editing attributes directly!


    /**
     * Getter function for returning Game ID
     * @returns {string} gameId
     */
    public getGameId() {
        return this.gameId;
    }
    
    /**
     * Setter function for setting Game ID
     * @param value 
     */
    public setGameId(value:string) {
        this.gameId = value;
    }
    /**
     * Getter function for returning Title
     * @returns {string} title
     */
    public getTitle() {
        return this.title;
    }
    /**
     * Setter function for setting Title
     * @param value value of new Title
     */
    public setTitle(value:string) {
        this.title = value;
    }
    /**
     * Getter function for returning sport type
     * @returns {string} sportType
     */
    public getSportType() {
        return this.sportType;
    }
    /**
     * Setter function for setting Sport Type
     * @param value value of new sport Type
     */
    public setSportType(value:string) {
        this.sportType = value;
    }
    /**
     * Getter function for returning description
     * @returns {string} description
     */
    public getDescription() {
        return this.description;
    }
    /**
     * Setter function for setting new description
     * @param value value of new description
     */
    public setDescription(value:string) {
        this.description = value;
    }
    /**
     * Getter function for returning start time and date
     * @returns {Date} startTime
     */
    public getStartTime() {
        return this.startTime;
    }
    /**
     * Setter function for setting new start time and date
     * @param value value of new date
     */
    public setStartTime(value:Date) {
        this.startTime = value;
    }
    /**
     * Getter function for returning end time and date
     * @returns {Date} endTime
     */
    public getEndTime() {
        return this.endTime;
    }
    /**
     * Setter function for setting new end time and date
     * @param value value of new date
     */
    public setEndTime(value:Date) {
        this.endTime = value;
    }
    /**
     * Getter function for returning location
     * @returns {string} location
     */
    public getLocation() {
        return this.location;
    }
    /**
     * Setter function for setting new location
     * @param value value of new location
     */
    public setLocation(value:string) {
        this.location = value;
    }
    /**
     * Getter function for returning maxPlayers
     * @returns {number} maxPlayers
     */
    public getMaxPlayers() {
        return this.maxPlayers;
    }
    /**
     * Setter function for setting new max players count
     * @param value value new max players
     */
    public setMaxPlayers(value:number) {
        this.maxPlayers = value;
    }
    /**
     * Getter function for returning current players
     * @returns {number} currentPlayers
     */
    public getCurrentPlayers() {
        return this.currentPlayers;
    }
    /**
     * Setter function for setting new current players count
     * @param value value of new current players count
     */
    public setCurrentPlayers(value:number) {
        this.currentPlayers = value;
    }
    /**
     * Getter function for returning a list of users who is in the game
     * @returns {number} userList
     */
    public getUserList(): string[] {
        return this.userList;
    }
    /**
     * Setter function for setting the new list of users in the game
     * @param value list of users in the game
     */
    public setUserList(value: string[]) {
        this.userList = value;
    }

}