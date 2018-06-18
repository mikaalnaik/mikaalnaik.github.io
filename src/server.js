var fetch = require('node-fetch')
const express = require('express');
var convert = require('xml-js');
var moment = require('moment');

const app = express();
const port = process.env.PORT || 3001;

app.get('/beach', async (req, res) => {
  let response = await fetch('http://app.toronto.ca/tpha/ws/beaches.xml?v=1.0')
   response = await response.text()
   var result2 = convert.xml2json(response, {
     compact: false,
     spaces: 4
   });
   var parsed = JSON.parse(result2)
   let beachNames = {
     '1': "Marie Curtis Park East Beach",
     '2': "Sunnyside Beach",
     '3': "Hanlan's Point Beach",
     '4': "Gibraltar Point Beach",
     '5': "Centre Island Beach",
     '6': "Ward's Island Beach",
     '7': "Cherry Beach",
     '8': "Woodbine Beaches",
     '9': "Kew Balmy Beach",
     '10': "Bluffer's Beach Park",
     '11': "Rouge Beach"
   }
   let beachData = [];
   let beachArray = parsed.elements[0].elements[1].elements;

   for (let i = 1; i < beachArray.length; i++) {
     let tempBeach = {};
     tempBeach['beachId'] = beachArray[i].attributes.beachId
     tempBeach['date'] = moment(beachArray[i].elements[0].elements[0].text, "YYYY-MM-DD").format('MMMM DD YYYY')
     tempBeach['eColi'] = beachArray[i].elements[2].elements[0].text
     for (var keys in beachNames) {
       if (keys === tempBeach.beachId) {
         tempBeach['beachName'] = beachNames[keys]
       }
     }
     beachData.push(tempBeach)
   }
   beachData = JSON.stringify(beachData)
   // console.log('Whole Data Set', result2);
   // console.log('BeachData', beachData);
  res.send(beachData);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
