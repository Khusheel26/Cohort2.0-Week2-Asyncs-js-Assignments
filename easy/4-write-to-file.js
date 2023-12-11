const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log("Before writing to the file: "+data);

    data +=" This Cohort is going really smooth and fun for me exicited for the upcoming challenges."
    fs.writeFile('a.txt',data,'utf-8',(err)=>{
        console.log("After writing to the file: "+data);
    });
    console.log("Just to check the inside fs.write is also async in nature :) as I was logged after the writefile was called  \n \n\n");
});

console.log("If I am logged before the fs content then this clearly state that the fs is async in nature \n\n\n\n");

