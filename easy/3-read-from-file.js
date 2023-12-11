const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log(data);
});

function calculateSum(n){
    let sum =0;
    for (let index = 0; index < n; index++) {
        sum+=index;
    }
    return sum;
}

const value = calculateSum(100000000);
console.log(value);
