import fs from "fs";
import { Console } from "console";

let content = fs.readFileSync("./toJson2-copy.json");

let jsonContent = JSON.parse(content);

let object = {

    "correctNumbers":[],
    "incorrectNumbers": [],
    "AddedPrefix": [],
    "PreFixModified":[] 
    
   }




let correctPattern = /^27\d{9}/;
let modifiablePattern = /^[2][0-6]\d{9}/;

let keyCount = Object.keys(jsonContent).length;

const numFilter = (jsonContent, keyCount) => {
  for (let i = 0; i <= keyCount - 1; i++) {

    if (jsonContent[i].sms_phone.length == 11) {
     if(correctPattern.test(jsonContent[i].sms_phone)) {
        object.correctNumbers.push(jsonContent[i]);
      }

    } else if (jsonContent[i].sms_phone.length == 9) {
   
       let ninedigits = jsonContent[i].sms_phone;
       let id = jsonContent[i].id;
       let prefix = "27";
       let result = prefix.concat(ninedigits);
       //console.log(result)
       object.AddedPrefix.push({id,result})

    }  
    
    if (jsonContent[i].sms_phone.length == 11) {
        if (modifiablePattern.test(jsonContent[i].sms_phone)) {

         let id = jsonContent[i].id;
         let prefix = "27"
         let str = jsonContent[i].sms_phone;
         let sub = str.substring(2)
         let result = prefix.concat(sub);
          object.PreFixModified.push({id,result})

         }
         
    } else if (jsonContent[i].sms_phone.length < 9 || jsonContent[i].sms_phone.length > 9) {
      object.incorrectNumbers.push(jsonContent[i]);
    
    }

  }
 
  var json = JSON.stringify(object);
 

  fs.writeFile("correct.json", json, (err) => {
    if (err) {
      console.log(err);
    }
  });
 
};


console.log(numFilter(jsonContent, keyCount));
