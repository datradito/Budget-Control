const promise = new Promise( (resolve, reject) => {
    setTimeout( () => (
        resolve('esto es mi dato resolve')
    ), 4000);
});

console.log('antes');

//callback, se dispara con el resolve
promise.then( (data)=> {
    console.log(data);
});

console.log('despues');