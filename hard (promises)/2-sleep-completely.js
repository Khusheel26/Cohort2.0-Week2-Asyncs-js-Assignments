/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
// One way to keep thread busy

// function sleep (seconds) {
//     setTimeout(()=>{
//         console.log(`Thread was busy here for ${seconds/1000} seconds`)
//     },seconds);
// }

// async function sleepCompletely(){
//     console.log("Calling my sleep function");
//     const x = await sleep(4000);
//     console.log("JS thread is busy");
// }

// sleepCompletely();



// 2nd Way 


function sleep(seconds){
    console.log(`after me the thread will be busy.`)
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Thread was busy here for ${seconds/1000} seconds`)
            resolve();
        },seconds);
    })
}

const x = sleep(6000).then(()=>{
    console.log("After the delay was completed I was logged.")
})