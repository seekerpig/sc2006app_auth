/**
 * Class representing a Message
 */
export default class Message
{
    private createdAt : Date;
    private text:String;
    private gameID: String;
    private uid:String;
    private photoURL:String;

    /**
     * Constructor for creating a Message Object
     * @param createdAt 
     * @param text 
     * @param gameID 
     * @param uid 
     * @param photoURL 
     */
    constructor(createdAt:Date, text:String, gameID:String,  uid:String, photoURL:String)
    {
        this.createdAt = createdAt;
        this.text = text;
        this.gameID = gameID;
        this.uid = uid;
        this.photoURL = photoURL;
    }

    /**
     * Getter function for returning message created date & time
     * @returns createdAt
     */
    public getCreatedAt(){
        return this.createdAt;
    }
    /**
     * Setter function for setting message created date & time
     * @param {Date} value 
     */
    public setCreatedAt(value:Date){
        this.createdAt = value;
    }
    /**
     * Getter function for returning message text
     * @returns text
     */
    public getText(){
        return this.text;
    }
    /**
     * Setter function for setting message text
     * @param {String} value 
     */
    public setText(value:String){
        this.text = value;
    }
    /**
     * Getter function for returning message game ID
     * @returns gameID
     */
    public getGameID(){
        return this.gameID;
    }
    /**
     * Setter function for setting message Game ID
     * @param {String} value 
     */
    public setGameID(value:String){
        this.gameID = value;
    }
    /**
     * Getter function for returning message UID
     * @returns UID
     */
    public getUID(){
        return this.uid;
    }
    /**
     * Setter function for setting message UID
     * @param {String} value 
     */
    public setUID(value:String){
        this.uid = value;
    }
    /**
     * Getter function for returning Photo URL
     * @returns photoURL
     */
    public getPhotoURL(){
        return this.photoURL;
    }
    /**
     * Setter function for setting message Photo URL
     * @param {String} value 
     */
    public setPhotoURL(value:String){
        this.photoURL = value;
    }
}