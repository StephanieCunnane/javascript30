const people = [  
  { name: 'Alice', year: 1988 },
  { name: 'Joey', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Meh', id: 823423 },
  { text: 'The best EVER!', id: 2039842 },
  { text: 'No thank you', id: 123523 },
  { text: 'YES PLEASE', id: 542328 }
];



// // 1. Is at least one person an adult? (18 or over)
// // Use Array.prototype.some()
// const currentYear = (new Date).getFullYear();
// const includesAdult = people.some(person => currentYear - person.year >= 18);
// console.log('includesAdult:', includesAdult);



// // 2. Is everyone an adult? (18 or over)
// // Use Array.prototype.every()
// const allAdults = people.every(person => currentYear - person.year >= 18);
// console.log('allAdults:', allAdults);



// // 3. Find the comment with an ID of 823423
// // Array.prototype.find()
// const commentFound = comments.find(comment => comment.id === 823423);
// console.log('commentFound:', commentFound);



// // 4. Delete the comment with an ID of 823423 
// // Array.prototype.findIndex()
// const commentToDelete = comments.findIndex(comment => comment.id === 823423);
// console.log('commentToDelete:', commentToDelete);

// comments.splice(commentToDelete, 1);
// // Use console.table for readability
// console.table(comments);



