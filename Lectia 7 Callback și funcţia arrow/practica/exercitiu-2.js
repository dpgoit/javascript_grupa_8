"use strict";
// Exemplul 2 - Funcția callback

// Adaugă metodele `withdraw(amount, onSuccess, onError)` la obiectul `account` și
// `deposit(amount, onSuccess, onError)`, unde primul parametru este suma operațiunii, iar
// al doilea și al treilea sunt callback-uri.

const account = {
  username: "Jacob",
  balance: 400,
};

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
