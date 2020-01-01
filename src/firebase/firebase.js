import * as firebase from 'firebase';

const yourAPI_key= 'AIzaSyCMuZdVuszEGBrBIJHEFsIfIcZLJOvQanY';

const config = {
    apiKey: yourAPI_key,
    authDomain: "controlgastos-5b51a.firebaseapp.com",
    databaseURL: "https://controlgastos-5b51a.firebaseio.com",
    projectId: "controlgastos-5b51a",
    storageBucket: "controlgastos-5b51a.appspot.com",
    messagingSenderId: "580417984576"
  };

//inicializo firebase
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('gastos').on('child_changed', (snapshot) => {
//     console.log(snapshot.key);
//     console.log(snapshot.val());
// });



//Ejemplo .forEach()

// database.ref('gastos').on('value', (snapshot) => {
//     const gastos= [];
//     snapshot.forEach((childSnapShot) => {
//         //este push() es method del array no de FireBase.
//         gastos.push({
//             id: childSnapShot.key,
//             ...childSnapShot.val(),
//         });
//     });
//     console.log(gastos);
// });

//METODO on()
//eventType -> "value", "child_added", "child_changed", "child_removed", or "child_moved."

// database.ref().on('value', (snapshot) => {
//     const valor = snapshot.val();
//     console.log(snapshot.val());
//     console.log(`Edad: ${valor.age}. `);
// })


//METODO push() genera automaticamente un ID unico en la db
// database.ref('gastos').push({
//     descrip: 'gasto 1',
//     notas: 'una nota',
//     importe: 125.50,
//     creadoAt: Date()
// });

// database.ref().set({
//     name: 'Daniel Agustin',
//     age: 42,
//     isSingle: false,
//     stressLevel: 6,
//     trabajo: {
//         titulo:'Desarrolador de Software',
//         compañia: 'Google',
//     },
//     location: {
//         city: 'San Fernando',
//         country: 'Argentina'
//     }
// }).then(() => {
//     console.log('Datos guardados en Firebase');
// }).catch((e) => {
//     console.log('Error: ', e);
// });

//METODO update()

// database.ref().update({
//     stressLevel: 8,
//     '/trabajo/compañia': 'Amazon II',
//     '/location/city': 'San Isidro II'
// }).then(() => {
//     console.log('Datos acualizados en Firebase');
// }).catch((e) => {
//     console.log('Error: ', e);
// });

//METODO remove() de firebase para borrar en db
// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('Datos borrados');
//     }).catch((e) => {
//         console.log('Error: ', e);
//     });

// //agrego nodo
// database.ref('attributes').set(
//     {
//     height: 178,
//     weight: 75
//     }
// ).then(() => {
//     console.log('Nodo nuevo guardado');
// }).catch((e) => {
//     console.log('Error: ', e);
// });

