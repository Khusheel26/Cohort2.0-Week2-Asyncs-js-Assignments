 let initialTime =0;

// for (let index = 0; index <60; index++) {

//     setTimeout(()=>{
//         initialTime++;
//         console.log(initialTime);
//      },1000);
// }
function timerWithoutSetInterval(startSec,duration){
    if(startSec<=duration){
        
        setTimeout(()=>{
            console.log(startSec);
            timerWithoutSetInterval(startSec+1,duration);
        },1000)
    }
}

timerWithoutSetInterval(1,30);
