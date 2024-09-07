const { promises } = require("dns");
const fs = require("fs");

function PR(){
    return new promises(function(resolve){
        const timeout = fs.readFileSync('a.txt', 'utf-8', function(err,data){
            resolve;
        })
    }) 
}


console.log(timeout);
