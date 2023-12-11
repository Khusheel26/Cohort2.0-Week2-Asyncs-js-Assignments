/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    const p = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Promise resolved after ${n} seconds`);
        },n*1000);
    });
    return p;
}

let x = wait(2).then((message)=>{
    console.log(message);
});

console.log(x);