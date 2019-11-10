//DESTRUCTURANDO ARRAYS
const direccion = ['Alvear 1397', 'San Fernado', 'Buenos Aires', '1646'];

const [ calle, loc, provincia, cp] = direccion;

console.log(`Estas en ${loc} ${provincia}`);

const item = ['Cafe (caliente)', '$2,00', '$2,50', '$2,75'];

const [tipoCafe, , medPrice] = item; 

console.log(`Un ${tipoCafe} mediano cuesta ${medPrice}.`);



//DESTRUCTURANDO OBJETOS

const persona = {
    nombre: 'Daniel',
    edad: 42,
    lugar: {
        ciudad: 'San Fernando',
        temp: 32,
    }

}

//VALOR POR DEFECTO  nombre=' '
const { nombre: primerNombre = 'ANONIMO', edad } = persona;

console.log(`La persona se llama ${primerNombre} y tiene ${edad} años`);

//PUEDO ASIGNAR NOMBRES
const { ciudad, temp:temperatura} = persona.lugar;

if (ciudad && typeof temperatura ) 
{
    console.log(`Estan haciendo ${temperatura}F en ${ciudad} ahora.`);
}

// const book = {
//     titulo: 'El ego es el enemigo',
//     autor: 'Ryan Holiday',
//     publica: {
//         //nombre: 'Penguin'
//     }
// }

// const { nombre: publicaNombre = 'Auto Publicado'} = book.publica;

// console.log(publicaNombre);

console.log("Challenge");

const book = {
    title: '20000 Leguas de Viaje Submarino',
    author: 'Julio Verne',
    publisher: {
        name:'Santillana'
    }
}

const  {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);