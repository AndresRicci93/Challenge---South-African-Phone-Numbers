import csv from 'csvtojson';
import fs from 'fs';

const csvFilePath='./Pre-selezione.South_African_Mobile_Numbers.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    const jsonString = JSON.stringify(jsonObj)
    fs.writeFile("toJson2.json", jsonString ,  (err) => {
      if (err) {
          console.log(err);
      }
  } )

})
