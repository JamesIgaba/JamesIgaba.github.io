
console.log('PART I\n\n\n');

console.log('\nPart I (JavaScript.Info exercises) \n \n');
console.log('Working with prototype \n\n');

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // null (2)

delete animal.jumps;

console.log(rabbit.jumps); // undefined (3)

console.log('\n\nSearching algorithm \n\n');

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

//my solution
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log('pockets.pen is :' + pockets.pen);
console.log('bed.glasses is :' + bed.glasses);
console.log('there is no difference in time when getting glasses as pockets.glasses or head.glasses')

console.log('\n\nWhere it writes \n\n');

let animal2 = {
    eat() {
        this.full = true;
    }
};

let rabbit2 = {
    __proto__: animal2
};

rabbit2.eat();

console.log('rabbit object gets the full property rabbit.full :' + rabbit2.full + '. animal.full :' + animal2.full);
console.log('\n\nWhy two hamsters are full \n\n');
let hamster = {
    stomach: [],

    eat(food) {// same as eat: function(food){}
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

console.log('\n\nChanging “prototype” (exercise involving the F.prototype property) \n\n');

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit3 = new Rabbit();

console.log(rabbit3.eats); // true

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit4 = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit4.eats); //true  ?

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit5 = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit5.eats); // false ?

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit6 = new Rabbit();

delete rabbit6.eats;

console.log(rabbit6.eats); // true


function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit7 = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit7.eats); // undefined?

console.log('\n\nCreate an object with the same constructor (exercise involving preserving the .constructor link in the [[Prototype]] object) \n\n');



function Customer(name) {
    this.name = name;
}

let cust = new Customer('James');
let cust2 = new cust.constructor('Brian');

console.log(cust2.name); // Brian (worked!)



function Employee(name) {
    this.name = name;

}

Employee.prototype = {
    salary: 50000
}



let emp = new Employee('James');
let emp2 = new emp.constructor('Brian');

console.log(emp2.name); //

/*................................*/

function booyah() {
    console.log('BOOYAH!!!');
}

Function.prototype.defer1 = function (ms) {
    setTimeout(this, ms);
}

booyah.defer1(2000);



Function.prototype.defer2 = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

// check it
function multiply(a, b) {
    console.log(a * b);
}

multiply.defer2(1000)(1, 2); // shows 2 after 1 sec


function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit8 = new Rabbit("Rabbit")

rabbit8.sayHi();//Rabbit
Rabbit.prototype.sayHi();//undefined
Object.getPrototypeOf(rabbit8).sayHi();//undefined
rabbit8.__proto__.sayHi();//undefined
































console.log('\n\n\n\nPART II\n\n\n\n\n');

//1....banned words
console.log(" Filter test")
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
    ).join(" ");
}
console.log("I am not smart".filter("not"));

describe('Filter test', function () {
    it("I am not smart.filter(not) is I am smart", function () {
        assert.equal("I am not smart".filter("not"), 'I am smart');
    });

});

//2.....buuble sort algorithm
console.log(" \n Bubble sort test")
Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (this[j] < this[j - 1]) {
                let tmp = this[j];
                this[j] = this[j - 1];
                this[j - 1] = tmp;
            }
        }
    }
    return this;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

describe('Bubble sort test', function () {
    it("Expected output of [6, 4, 0, 3, -2, 1].bubbleSort() is [-2,0,1,3,4,6] ", function () {
        assert.equal([6, 4, 0, 3, -2, 1].bubbleSort().toString(), '-2,0,1,3,4,6');
    });

});

//3...function Constructor
var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}

var Student = function () { };    //function
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
    return this.name + " just learned " + subject;
}




var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");
console.log(me.describe());
console.log(me.learn('English'));

//describe test
describe('describe', function () {
    it("Expected output of me.learn('English') is John just learned English", function () {
        assert.equal(me.learn('English'), 'John just learned English');
    });

});

//learn test
describe('learn', function () {
    it("Expected output of me.describe() is John, 25 years old.", function () {
        assert.equal(me.describe(), 'John, 25 years old.');
    });

});

function Teacher() {

}

Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    return this.name + " is now teaching " + subject;
}

var prof = new Teacher('Professor Levi');
prof.initialize("Professor Mary", 65);
console.log(prof.teach("English"));

//learn test
describe('teach', function () {
    it("Expected output of prof.teach(English) is Professor Mary is now teaching English", function () {
        assert.equal(prof.teach("English"), 'Professor Mary is now teaching English');
    });

});