// export class Bank {
//   constructor(bankName) {
//     this.bankName = bankName;
//   }

//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   showBalance() {
//     return this.#balance;
//   }

// }





// const App = () => {
//   const newOb = new Bank('prabhu');
//   newOb.deposit(90000);
//   console.log(newOb.showBalance());
// }

import React from 'react'

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
  }

  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

  shows() {
    console.log('hello show');
  }

}


class A extends Bank {


  shows() {

    console.log('hello A');
  }

}

