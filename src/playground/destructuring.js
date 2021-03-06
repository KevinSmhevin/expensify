// 
// Object Destructuring
// 

// const person = {
//     // name: 'Kevin',
//     age: 23,
//     location: {
//         city: 'Las Vegas',
//         temp: 100
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// 
// Array Destructuring
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address 


console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ hotCoffee, , medium] = item

console.log(`A medium ${hotCoffee} costs ${medium}`)