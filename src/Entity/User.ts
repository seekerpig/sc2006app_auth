
export default class User {
    private userID:string;
    private name:string;
    private email:string;
    private phoneNo:number;
    private description:string;
    private profileUrl:string;
    private gameList:string[] = []
    
    constructor(userID:string, name:string, email:string, phoneNo:number, description:string, profileURL:string,gameList:string[])
    {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.description = description;
        this.profileUrl = profileURL;
        this.gameList = gameList;
    }


    //getter and setter functions to prevent users from editing attributes directly!
    public getUserID(){
        return this.userID;
    }
    public getName(){
        return this.name;
    }
    public getEmail(){
        return this.email;
    }
    public getPhoneNo(){
        return this.phoneNo;
    }
    public getDescription(){
        return this.description;
    }
    public getProfileUrl(){
        return this.profileUrl;
    }
    public getGameList(){
        return this.gameList;
    }

    public setUserID(value:string){
        this.userID = value;
    }
    public setName(value:string){
        this.name = value;
    }
    public setEmail(value:string){
        this.email = value;
    }
    public setPhoneNo(value:number){
        this.phoneNo = value;
    }
    public setDescription(value:string){
        this.description = value;
    }
    public setProfileUrl(value:string){
        this.profileUrl = value;
    }
}