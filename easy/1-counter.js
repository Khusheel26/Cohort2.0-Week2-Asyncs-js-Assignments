let initialTime=0;

const  timerId = setInterval(()=>{
    initialTime++;
    console.log(initialTime);
},1000)


setTimeout(()=>{
    clearInterval(timerId);
},60000);