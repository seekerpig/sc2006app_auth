export default class SportsFacilities
{
    private locationName:string;
    private coordinates:string;

    constructor(locationName:string, coordinates:string)
    {
        this.locationName = locationName;
        this.coordinates = coordinates;

    }

    public getLocationName()
    {
        return this.locationName;
    }

    public setLocationName(value:string)
    {
        this.locationName = value;
    }

    public getCoordinates()
    {
        return this.coordinates;
    }

    public setCoordinates(value:string)
    {
        this.coordinates = value;
    }

}