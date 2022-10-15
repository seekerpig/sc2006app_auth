/**
 * Class representing a User Object
 */
export default class User {
    private userID:string;
    private name:string;
    private email:string;
    private phoneNo:number;
    private description:string;
    private profileUrl:string;
    private gameList:string[] = []
    
    /**
     * Create a User Obect
     * @param {string} userID unique identifier for the user
     * @param {string} name name of the user
     * @param {string} email email address of the user
     * @param {number} phoneNo phone number fo the user
     * @param {string} description bio description of the user
     * @param {string} profileURL profile URL for the profile image of the user
     * @param {string[]} gameList array of unique identifier of the games joined by the user
     */
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

    // Getter and Setter functions to prevent users from editing attributes directly!
    
    /**
     * Getter function for userID
     * @returns {string} userID
     */
    public getUserID(){
        return this.userID;
    }

    /**
     * Getter function for name
     * @returns {string} name
     */
    public getName(){
        return this.name;
    }

    /**
     * Getter function for email
     * @returns {string} email
     */
    public getEmail(){
        return this.email;
    }

    /**
     * Getter function for phoneNo
     * @returns {number} phoneNo
     */
    public getPhoneNo(){
        return this.phoneNo;
    }

    /**
     * Getter function for description
     * @returns {string} description
     */
    public getDescription(){
        return this.description;
    }

    /**
     * Getter function for profileUrl
     * @returns {string} profileUrl
     */
    public getProfileUrl(){
        return this.profileUrl;
    }

    /**
     * Getter function for gameList
     * @returns {string[]} gameList
     */
    public getGameList(){
        return this.gameList;
    }

    /**
     * Setter function for userID
     * @param value userID
     */
    public setUserID(value:string){
        this.userID = value;
    }

    /**
     * Setter function for name
     * @param value name
     */
    public setName(value:string){
        this.name = value;
    }

    /**
     * Setter function for email
     * @param value email
     */
    public setEmail(value:string){
        this.email = value;
    }

    /**
     * Setter function for phoneNo
     * @param value phoneNo
     */
    public setPhoneNo(value:number){
        this.phoneNo = value;
    }

    /**
     * Setter function for description
     * @param value description
     */
    public setDescription(value:string){
        this.description = value;
    }

    /**
     * Setter function for profileUrl
     * @param value profileUrl
     */
    public setProfileUrl(value:string){
        this.profileUrl = value;
    }
}