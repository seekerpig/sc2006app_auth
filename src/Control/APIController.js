//import raw from ;
//"use strict";
//Fetching direct from URL
import { insertFacilities } from './DatabaseController';
var http = require("http");
var url = require("url");
var JSZip = require("jszip");
var parseString = require('xml2js').parseString;


export const fetchDataFromAPI= async () =>{
    console.log("Fetch Data from API");
  var req = http.get(url.parse('https://geo.data.gov.sg/playsg/2014/04/17/kml/playsg.zip'), function (res) {
    if (res.statusCode !== 200) {
      console.log(res.statusCode);
      // handle error
      return;
    }
    var data = [];
  
    // don't set the encoding, it will break everything !
    // or, if you must, set it to null. In that case the chunk will be a string.
  
    res.on("data", function (chunk) {
      data.push(chunk);
      //dataLen += chunk.length;
    });
  
    res.on("end", function () {
      var buf = Buffer.concat(data);
  
      // here we go !
      JSZip.loadAsync(buf).then(function (zip) {
        return zip.file("PLAYSG.kml").async("string");
      }).then(function (text) {
        parseString(text, function (err, result) {
        
            result.kml.Document[0].Folder[0].Placemark.forEach(element => {
                //console.log(element)
               // console.log(element);
    
                insertFacilities({id:element.$.id,name:element.name[0],coordinates:element.Point[0].coordinates[0]})
                  //insertFacilities({id:"ID_0001"});
            })
        });
      });
    });
  });
  
  req.on("error", function(err){
    // handle error
  }); 
    
  }