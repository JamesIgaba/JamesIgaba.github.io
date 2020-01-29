'use strict';
//create account with number 1234
let account = new Account(1234);

describe("getNumber()", function(){

    //test account.getNumber()
    it("account.getNumber() returns 1234", function(){
        assert.equal(account.getNumber(), 1234);
    });
});

describe("getBalance()", function(){

    //test account.getBalance()
    it("account.getBalance returns 0", function(){
        assert.equal(account.getBalance(), 0);
    });
});

describe("deposit(5000)", function(){

    //test account.getBalance() after depositing 5000
    it("account.getBalance returns 5000", function(){
        account.deposit(5000);
        assert.equal(account.getBalance(), 5000);
    });
});

describe("withdraw(3000)", function(){

    //test account.getBalance() after withdrawing 3000
    it("account.getBalance returns 2000", function(){
        account.withdraw(3000);
        assert.equal(account.getBalance(), 2000);
    });
});

describe("toString()", function(){

    //test account.getBalance() after withdrawing 3000
    it("account.getBalance returns Account 1234: balance 2000", function(){
        console.log(account.toString());
        assert.equal(account.toString(), 'Account 1234: balance 2000');
    });
});