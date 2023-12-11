/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve,1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve,2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(resolve,3000);
    });
}

async function   calculateTime() {
    const startingTime = Date.now();

    const a = await waitOneSecond();
    const b = await waitTwoSecond();
    const c = await waitThreeSecond();

    const endTime =Date.now();
    console.log(`Time taken for all the promises to resolve sequentially is ${(endTime-startingTime)/1000}s`);
}

calculateTime();


// Results generated : As we can see when the promises were resolved sequentially they tooked more time then when they were executed together using Promise.all