

import raw from '../KML/PLAYSG.kml';
import { insertFacilities } from './DatabaseController';
//var fs = require('fs');
//var path = require('path');

//this one connect to GovDataAPI, then call database controller to store data


var parseString = require('xml2js').parseString;
export const fetchDataFromAPI= async () =>{
  console.log("Fetch Data from API");
fetch(raw)
  .then(r => r.text())
  .then(text => {
    parseString(text, function (err, result) {
        
        result.kml.Document[0].Folder[0].Placemark.forEach(element => {
            //console.log(element)
           // console.log(element);

            insertFacilities({id:element.$.id,name:element.name[0],coordinates:element.Point[0].coordinates[0]})
              //insertFacilities({id:"ID_0001"});
        })
    });
    //console.log('text decoded:', text);
  });
}
