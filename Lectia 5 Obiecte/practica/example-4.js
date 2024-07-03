"use strict";
// Exemplul 4 - Sarcini complexe
// Scrie un script pentru gestionarea unui cont personal într-o bancă online. Există un obiect `account` în care este necesar să implementezi metode pentru a lucra cu soldul și istoricul tranzacțiilor.

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// Fiecare tranzacție este un obiect cu proprietățile: id, tip și sumă

const account = {
  // Soldul curent al contului
  balance: 0,

  // Istoricul tranzacțiilor
  transactions: [],

  // Metoda creează și returnează un obiect tranzacție.
  // Acceptă suma și tipul tranzacției.
  createTransaction(amount, type) {
    return { id: this.transactions.length + 1, type: type, amount: amount };
  },

  // Metoda responsabilă pentru adăugarea sumei la sold.
  // Acceptă suma tranzacției.
  // Apelează createTransaction pentru a crea un obiect tranzacție
  // apoi îl adaugă la istoricul tranzacțiilor.
  deposit(amount) {
    const tranzactie = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(tranzactie);
    this.balance += amount;
  },

  // Metoda responsabilă pentru retragerea sumei din sold.
  // Acceptă suma tranzacției.
  // Apelează createTransaction pentru a crea un obiect tranzacție
  // apoi îl adaugă la istoricul tranzacțiilor.
  // Dacă suma este mai mare decât soldul curent, afișează un mesaj
  // că retragerea unei astfel de sume nu este posibilă, nu sunt suficiente fonduri.
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        "Retragerea acestei sume nu este posibila, fonduri insuficiente!"
      );

      return;
    }

    const tranzactie = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(tranzactie);
    this.balance -= amount;
  },

  // Metoda returnează soldul curent
  getBalance() {
    return this.balance;
  },

  // Metoda caută și returnează obiectul tranzacție după id
  getTransactionDetails(id) {
    for (let tranzactie of this.transactions) {
      if (tranzactie.id === id) {
        return tranzactie;
      }
    }

    return `Nu este o tranzactie cu acest id:${id}`;
  },

  // Metoda returnează suma fondurilor
  // unui anumit tip de tranzacție din întregul istoric de tranzacții
  getTransactionTotal(type) {
    let total = 0;
    for (let tranzactie of this.transactions) {
      if (tranzactie.type === type) {
        total += tranzactie.amount;
      }
    }

    return total;
  },
};

account.deposit(500);
account.deposit(1000);
account.deposit(3000);
account.withdraw(300);
account.withdraw(300);
account.withdraw(300);
account.withdraw(300);

console.log(account.getTransactionDetails(4));
console.log(account.getTransactionDetails(5));

console.log(account.getBalance());
console.log(
  "Total dopozitat",
  account.getTransactionTotal(Transaction.DEPOSIT)
);

console.log("Total Retras", account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account);
