const books = ['Zero to One', 'Black Swan', 'Calvin and Hobbes', 'The Structure and Interpretation of Computer Programs', 'The Four', 'Cryptonomicon', 'Sapiens', 'The Way Things Work', 'How Computers Work', 'How To Solve It', 'Eloquent JavaScript', 'Homo Deus', 'Gödel, Escher, Bach', 'The Daily Stoic'];

function removeArticles(bookName) {
  return bookName.replace(/^(a |the |an )/gi, '').trim();
}

const sortedBooks = books.sort(function(a, b) {
  // We compare the data without the articles, but we don't 
  // actually change the data. We temporarily strip off the articles just
  // to do the comparison
  return removeArticles(a) > removeArticles(b) ? 1 : -1;
});  

document.querySelector('#books').innerHTML = 
  sortedBooks
    .map(book => `<li>${book}</li>`)
    .join('');