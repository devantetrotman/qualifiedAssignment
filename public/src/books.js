function findAuthorById(authors, id) {
  for (let author in authors){
    if (authors[author].id == id){
      return authors[author];
    }
  }
}

function findBookById(books, id) {
  for (let book in books){
    if (books[book].id == id){
      return books[book];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returned = [];
  let inputs = [];
  for (let book in books){
    let borrowedBooks = books[book].borrows;
    for (let borrow in borrowedBooks)
    if (borrowedBooks[borrow].returned == false){
      checkedOut.push(books[book]);
      break;
    }
  else {returned.push(books[book]); break;}
  }
  inputs.push(checkedOut,returned);
  return inputs;
}

function getBorrowersForBook(book, accounts) {
  let borrowArray = [];
  let borrowedBooks = book.borrows;
  for (let person of borrowedBooks){
    if(borrowArray.length >= 10 ) {
      break;
    }
    for (let account of accounts){
      if (person.id == account.id){
        //console.log(book.borrows);
        borrowArray.push({...account, returned: person.returned});
      }
    }
    }
  console.log(borrowArray);
  return borrowArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
