class CheckingAccount extends Account {
    //constructor
    constructor(number) {
        super(number);
        this.overdraft_limit = 0;
    }

    setOverdraft_limit(limit) {
        this.overdraft_limit = limit;
    }

    getOverdraft_limit() {
        return this.overdraft_limit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this.getOverdraft_limit())) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    endofMonth() {
        if (super.getBalance() === 0) {
            return "Warning, low balance CheckingAccount 3:" + this._balance + " overdraft limit:" + this.overdraft_limit;
        } else {
            return "";
        }

    }

    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": Overdraft_limit " + this.overdraft_limit;
    }

}




//CHECKING ACCOUNT


let mychecking = new CheckingAccount('110110075');
mychecking.setOverdraft_limit(10000);
mychecking.deposit(10000);
mychecking.withdraw(20000);



describe("withdraw() and setOverdraft_limit()  ", function () {
    it("'Expected output of mychecking.getBalance() after mychecking.deposit(10000) and mychecking.withdraw(20000) is -10000'", function () {
        assert.equal(mychecking.getBalance(), -10000);
    })
});

describe(" checking toString()  ", function () {
    it("'Expected output of  mychecking.toString() is Account 110110075: balance -10000: Overdraft_limit 10000", function () {
        assert.equal(mychecking.toString(), 'Account 110110075: balance -10000: Overdraft_limit 10000');
    })
});