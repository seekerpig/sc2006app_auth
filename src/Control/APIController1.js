//import raw from ;

//Fetching direct from URL
var parseString = require('xml2js').parseString;
export const fetchDataFromAPI2= async () =>{
    console.log("Fetch Data from API 2");
  fetch('https://geo.data.gov.sg/sportsg-sport-facilities/2019/12/17/kml/sportsg-sport-facilities.kml')
    .then(r => r.text())
    .then(text => {
      parseString(text, function (err, result) {
          
          result.kml.Document[0].Folder[0].Placemark.forEach(element => {
              //console.log(element)
             console.log(element);
  
              //insertFacilities({id:element.$.id,name:element.name[0],coordinates:element.Point[0].coordinates[0]})
                //insertFacilities({id:"ID_0001"});
          })
      });
      //console.log('text decoded:', text);
    });
  }