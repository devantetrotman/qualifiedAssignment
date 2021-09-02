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

}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
