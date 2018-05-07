const inventors = [
		      { first: 'Albert', last: 'Einstein', born: 1879, died: 1955 },
		      { first: 'Isaac', last: 'Newton', born: 1643, died: 1727 },
		      { first: 'Galileo', last: 'Galilei', born: 1564, died: 1642 },
		      { first: 'Marie', last: 'Curie', born: 1867, died: 1934 },
		      { first: 'Johannes', last: 'Kepler', born: 1571, died: 1630 },
		      { first: 'Nicolaus', last: 'Copernicus', born: 1473, died: 1543 },
		      { first: 'Max', last: 'Planck', born: 1858, died: 1947 },
		      { first: 'Katherine', last: 'Blodgett', born: 1898, died: 1979 },
		      { first: 'Ada', last: 'Lovelace', born: 1815, died: 1852 },
		      { first: 'Sarah E.', last: 'Goode', born: 1855, died: 1905 },
		      { first: 'Lise', last: 'Meitner', born: 1878, died: 1968 },
		      { first: 'Hanna', last: 'Hammarström', born: 1829, died: 1909 }
		    ];

const people = ['Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']; 

const modesOfTransport = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick']; 



/*
// 1. Filter the list of inventors for those who were born in the 1500s
// Use Array.prototype.filter()
const bornIn1500s = inventors.filter(inventor => 
	inventor.born >= 1500 && inventor.born <= 1599);

// For readability, console.table() is a good option
console.table(bornIn1500s);
*/



/*
// 2. Use map() to create an array of inventor first and last names
// Array.prototype.map()
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);
*/



/*
// 3. Sort the inventors by birthdate, oldest to youngest
// Array.prototype.sort()
const orderedByAge = inventors.sort((a, b) => a.born > b.born ? 1 : -1);
console.table(orderedByAge);
*/



/*
// 4. How many years did all the inventors live? 
// (Generate a cumulative total.)
const totalYearsLived = inventors.reduce((total, inventor) => {
	return total + (inventor.died - inventor.born);
}, 0); // pass in 0 as the initial value for the accumulator
console.log(totalYearsLived);
*/



/*
// 5. Sort the inventors by lifespan, longest to shortest
// Array.prototype.sort()
const oldest = inventors.sort(function(a, b) {
  const aInventor = a.died - a.born;
  const bInventor = b.died - b.born;
  return aInventor > bInventor ? -1 : 1;
});
console.table(oldest);
*/



/*
// 6. Sort the people alphabetically by first name
const sortByFirstName = people.sort(function(a, b) {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  return aFirst > bFirst ? 1 : -1;
});
console.log(sortByFirstName);
*/



/*
// 7. Sum up the number of instances of each unique mode of 
// transportation in the modesOfTransport array
const transportCounts = modesOfTransport.reduce(function(obj, item) {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});
console.log(transportCounts);
*/



/*
// 8. Using this Wikipedia page (https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris), 
// create a list of boulevards in Paris that contain 'de ' anywhere in the name
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const blvdsWithDe = links.map(link => link.textContent)
                         .filter(streetName => streetName.includes('de '));
console.log(blvdsWithDe);
*/