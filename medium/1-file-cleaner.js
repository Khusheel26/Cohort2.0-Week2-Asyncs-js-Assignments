const fs = require('fs')

fs.readFile('demo.txt','utf-8',(err,data)=>{
    data = data.split(' ')  .filter(Boolean).join(' ');

    console.log(data);
})