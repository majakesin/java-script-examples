
let promise = new Promise((resolve,reject)=> {

    setTimeout(function() { resolve("Uspesno se izvrsilo")},5);
})
promise.then((message) => {
    console.log(message); });


let promiseError = new Promise((resolve,reject) => {
    let a = 2;
    if(a == 2) {
        reject("Nije uspjelo");
    }
});

promiseError.then().catch((message)=> {
    console.log(message);
})