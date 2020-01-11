import * as firebase from 'firebase';

const FirebaseKEY='YOUR APIKEY'

const config = {
    apiKey: FirebaseKEY,
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

//ARRAY DATA I
//push() genera automaticamente un ID unico en la db

// database.ref('gastos').push({
//     descrip: 'gasto 1',
//     notas: 'una nota',
//     importe: 125.50,
//     creadoAt: Date()
// });


//ARRAY DATA II
//

// database.ref('gastos').on('value', (snapshot) => {
//   const gastos= [];
//   snapshot.forEach((childSnapShot) => {
//       //este push() es method del array no de FireBase.
//       // .key() me trae el ID del childSnapShot
//       gastos.push({
//           id: childSnapShot.key,
//           ...childSnapShot.val(),
//       });
//   });
//   console.log(gastos);
// });

//FETCH DATA

// database.once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log('DATA', val);
//   })
//   .catch((e)=>{
//     console.log('Error:', e);
//   })

//   const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log('Data: ', snapshot.val());
//   }, (e) => {
//     console.log('Hubo un error al obtener los datos.', e);
//   });

//   setTimeout(()=>{
//     database.ref('age').set(29);
//   }, 3500);

//   //anulo el seguimiento de los datos en la db
//   setTimeout(()=>{
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(()=>{
//     database.ref('age').set(31);
//   }, 10500);

  //METODO on() devuelve el snapshot de la db cada vez q se modifica un dato
//eventType -> "value", "child_added", "child_changed", "child_removed", or "child_moved."

// database.ref().on('value', (snapshot) => {
//     const valor = snapshot.val();
//     console.log(snapshot.val());
//     console.log(`Edad: ${valor.age}. `);
// })


// database.ref('gastos').on('child_changed', (snapshot) => {
//     console.log(snapshot.key);
//     console.log(snapshot.val());
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

