
// Start with strings, numbers and booleans, which
// are stored by value (That is, these values are copied.)
let age = 100;
let age2 = age;
// console.log(age, age2);
age = 200;
// console.log(age, age2);

let name = 'Stephanie';
let name2 = name;
// console.log(name, name2);
name = 'Steph';
// console.log(name, name2);

/////////////////////////////////////////////////////////////////////

// Moving on to arrays
const players = ['Stephanie', 'Katherine', 'Natasha', 'Fred'];
// team is a reference to the original array, not a copy of the array
const team = players;
// console.log(team, players);
// You might think you could do something like this
// team[3] = 'Sam';
// console.log('Team:', team);
// console.log('Players:', players);
// So we updated the original array as well
// Arrays are stored by reference; they aren't copied

// How do we fix this?
// We make a copy - there are several ways to do this:
// .slice() with no parameters is one way to create a copy of an array
const team2 = players.slice();

// Or create a new array and concatenate the old one to it
const team3 = [].concat(players);

// Or use ES6 spreads
const team4 = [...players];

// Or use Array.from()
const team5 = Array.from(players);

////////////////////////////////////////////////////////////////////

// Objects are also stored by reference, not by copy (by value)
const person = {
  name: 'Stephanie',
  city: 'Los Angeles'
};

// Copies the reference to the object
const stephanie = person;

// How can we make a copy instead?
// Use Object.assign(). (Note that Object.assign() is a shallow clone method.)
const stephanie2 = Object.assign({}, person, { number: 99 });