let userInput = process.argv.slice(2); 
const urlAddress = userInput[0]; 
const filePath = userInput[1]; 
const fs = require('fs'); 
const request = require('request');

if (filePath){
  request(urlAddress, function (error, response, body) {
    if (error || response.statusCode !== 200){
      console.log("There is an error")
      return error; 
    }
    //create a file named index.html:
    fs.writeFile(filePath, body, function (err) {
      if (err) throw err;
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });


  });

} else {
  console.log("incorrect filepath")
}




