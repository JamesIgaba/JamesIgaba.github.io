
'use strict';
class SavingsAccount extends Account {
    //constructor
    constructor(number) {
        super(number); // the account number
        this._interest = 0;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(newInterest) {
        this._interest = newInterest;
    }

    addInterest() {
        let interestAmount = this.getBalance() * (this.getInterest() / 100);
        this.deposit(interestAmount);

    }

    endofMonth() {
        this.addInterest()
        return "Interest added SavingsAccount 2: balance" + this._balance + " interest: " + this._interest;
    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }
}


let mysavings = new SavingsAccount('0141075400');
mysavings.deposit(135000);
mysavings.setInterest(10);
mysavings.addInterest();


describe('setInterest() and getInterest()', function () {
    it('Expected output of getInterest() after setInterest(10) is 10', function () {
        assert.equal(mysavings.getInterest(), 10);
    })
});

describe('addInterest()', function () {
    it('Expected output of getBalance() after smysavings.addInterest(); is 148500', function () {
        assert.equal(mysavings.getBalance(), 148500);
    })
});

describe('toString()', function () {
    it('Expected output of toString() after call to mysavings.toString(); is Account 0141075400: balance 148500: interest 10', function () {
        assert.equal(mysavings.toString(), 'Account 0141075400: balance 148500: interest 10');
    })
});