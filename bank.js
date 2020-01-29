'use strict';

class Bank {
    // static next Number that tracks the next account number
    static nextNumber = 64001;

    //constructor
    constructor() {
        this.bankAccounts = [];
    }

    //add an account
    addAccount() {
        let acctNo = Bank.nextNumber;
        let account = new Account(acctNo);
        Bank.nextNumber++;
        this.bankAccounts.push(account);
        return account.getNumber();
    }

    // add a savings account
    addSavingsAccount(interest) {
        let acctNo = Bank.nextNumber;
        let savings = new SavingsAccount(acctNo);
        Bank.nextNumber++;
        savings.setInterest(interest);
        this.bankAccounts.push(savings);
        return savings.getNumber();

    }
    //add a checking account
    addCheckingAccount(overdraft) {
        let acctNo = Bank.nextNumber;
        let checking = new CheckingAccount(acctNo);
        Bank.nextNumber++;
        checking.setOverdraft_limit(overdraft);
        this.bankAccounts.push(checking);
        return checking.getNumber();
    }

    //close a specific account by number
    closeAccount(number) {
        for (const value of this.bankAccounts) {
            if (value.getNumber() === number) {
                const index = this.bankAccounts.indexOf(value);
                this.bankAccounts.splice(index, 1);
            }
        }
    }

    //a general account report for all bank accounts
    accountReport() {
        let string = '';
        for (let i = 0; i < this.bankAccounts.length; i++) {
            string += this.bankAccounts[i].toString() + '\n';
        }
        return string;
    }

    //end of month
    endOfMonth() {
        this.bankAccounts.forEach(account => {
            console.log(account.endofMonth());
        });
    }
}
//create a bank object barclays
let barclays = new Bank();

describe("addAccount()", function () {

    //test barclays.addAccount()
    it("addAccount() returns 64001", function () {
        assert.equal(barclays.addAccount(), 64001);
    });
});

describe("addSavingsAccount(10)", function () {

    //test barclays.addSavingsAccount(10)
    it("addSavingsAccount(10) returns 64002", function () {
        assert.equal(barclays.addSavingsAccount(10), 64002);
    });
});

describe("addCheckingAccount(1000)", function () {

    //test barclays.addCheckingAccount(1000)
    it("addCheckingAccount(1000) returns 64003", function () {
        assert.equal(barclays.addCheckingAccount(1000), 64003);
    });
});

describe("closeAccount(64002) and accountReport()", function () {

    //test accountReport()
    it("closeAccount(64002) and toString() returns all accounts without 64002", function () {
        //closeAccount(64002)
        barclays.closeAccount(64002);
        assert.equal(barclays.accountReport(), "Account 64001: balance 0\nAccount 64003: balance 0: Overdraft_limit 1000\n");
    });
});