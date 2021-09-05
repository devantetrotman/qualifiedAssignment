function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
    let numberBorrowed = 0;
  for (let j = 0; j < books.length; j++){
    for (let i = 0; i < books[j].borrows.length; i++){
      console.log(books[j].borrows[i]);
      if (books[j].borrows[i].returned == false){
        numberBorrowed++;
      }
    }
  }
  return numberBorrowed;
}

function getMostCommonGenres(books) {
  let counter = {}
  for (let book of books) {
    if (counter.hasOwnProperty(book.genre)) {counter[book.genre] = counter[book.genre]+1}
    else {counter[book.genre]=1}
    }

  let arrayOfCounts = [];
  for (let [key,value] of Object.entries(counter)) {
    arrayOfCounts.push({name: key, count: value})
    }


  arrayOfCounts.sort((a,b) => b.count-a.count);
  console.log(arrayOfCounts);
  for (let i = 5; i < arrayOfCounts.length; i++){
  arrayOfCounts.pop(arrayOfCounts[i]);
  }
  console.log(arrayOfCounts);
    return arrayOfCounts;
  
  
}

function getMostPopularBooks(books) {
  const result = books.reduce((acc, book) => {
  acc[book.title] = book.borrows.length;
  return acc;
}, {});
  
  let arrayOfCounts = [];
  for (let [key,value] of Object.entries(result)) {
    arrayOfCounts.push({name: key, count: value})
    }

  arrayOfCounts.sort((a,b) => b.count-a.count);
  for (let i = arrayOfCounts.length -1; i >= 5; i--){
    arrayOfCounts.pop();
  }
  console.log(arrayOfCounts);
    return arrayOfCounts;
  }

  
  


function getMostPopularAuthors(books, authors) {
  let counter = {}
  for (let book of books) {
    for (let author of authors){
      if (author.id == book.authorId){
        let authorKey = author.name.first + " " + author.name.last;
        if (counter.hasOwnProperty(authorKey)) {
          counter[authorKey] = counter[authorKey]+book.borrows.length}
        else {counter[authorKey]=book.borrows.length}
      }
    }
}
  let arrayOfCounts = [];
  for (let [key,value] of Object.entries(counter)) {
    arrayOfCounts.push({name: key, count: value})
    }


  arrayOfCounts.sort((a,b) => b.count-a.count);
  console.log(arrayOfCounts);
  for (let i = arrayOfCounts.length -1; i >= 5; i--){
    arrayOfCounts.pop();
  }
  console.log(arrayOfCounts);
    return arrayOfCounts;
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
