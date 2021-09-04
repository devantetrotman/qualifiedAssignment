function findAccountById(accounts, id) {
  let found = {};
  console.log("we here?");
  for (let account in accounts){
    if (accounts[account].id == id){
      found = accounts[account];
    }
  }
  return found;
}

function sortAccountsByLastName(accounts) {
  let sortedArray = [];
  sortedArray = accounts.sort((account1, account2) => account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
);
  return sortedArray;
}

function getTotalNumberOfBorrows(account, books) {
  let theID = account.id;
  let timesBorrowed = 0;
  for (let book in books){
    let borrowList = books[book].borrows;
    for (let i = 0; i < borrowList.length; i++){
      if (borrowList[i].id == theID){
        timesBorrowed++;
      }
    }
  }
  return timesBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  let theID = account.id;
  let bookObj = {};
  let possessedBooks = [];
  for (let book in books){
    let borrowList = books[book].borrows;
    for (let i = 0; i < borrowList.length; i++){
      if (borrowList[i].id == theID){
        for (let author in authors){
          if (authors[author].id == books[book].authorId){
            let authorArray = authors[author];
            console.log(authorArray);
        possessedBooks.push(Object.assign(bookObj,{id: books[book].id, title: books[book].title, genre: books[book].genre, authorId: books[book].authorId, author: authorArray, borrow: borrowList}));
      }
    }
  }
      break;
}
  }
  console.log(possessedBooks);
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
