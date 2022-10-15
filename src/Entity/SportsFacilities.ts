/**
 * Creates Sports Facilities
 */
export default class SportsFacilities
{
    private locationName:string;
    private coordinates:string;
    /**
     * Create Sports facilities
     * @param {string} locationName Name of the location
     * @param {string} coordinates Coordinates of the location
     */
    constructor(locationName:string, coordinates:string)
    {
        this.locationName = locationName;
        this.coordinates = coordinates;

    }
    /**
     * Getter function for returning location name
     * @returns {string} locationName
     */
    public getLocationName()
    {
        return this.locationName;
    }
    /**
     * Setter function for setting location name
     * @param {string} value locationName
     */
    public setLocationName(value:string)
    {
        this.locationName = value;
    }
    /**
     * Getter function for returning coordinates
     * @returns {string} coordinates
     */
    public getCoordinates()
    {
        return this.coordinates;
    }
    /**
     * Setter function for setting coordinates
     * @param {string} value coordinates
     */
    public setCoordinates(value:string)
    {
        this.coordinates = value;
    }

}