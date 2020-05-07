const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({
            name:'Daniel Agustin',
            edad: '43',
            note: 'promise resolved'
        });
        //reject('promise rejected');
    }, 4000);
});

console.log('antes');

//callback, se dispara con el resolve
promise
.then( (data)=> {
    console.log('1', data);
    return 'Dato devuelto al promise chain'
})
.then((str)=>{
    console.log('Dato recibido-->', str)
})
.catch((e) => {
    console.log('Error:', e)
});

console.log('despues');