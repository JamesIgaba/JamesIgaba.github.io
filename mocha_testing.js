

console.log('assignment');

const arr = [1, 2, 3, 4];
const name = 'ant';
const words = ['ant', 'giraffe', 'wasp', 'jaguar'];
const arr2 = [1,2,3,4,5,6];
const arr3 = ['ant', 'jaguar'];


/* runs test to see if expected argument is === to value returned by function2test argument */
describe('W1D5 Basic JavaScript', function () {

    it("Expected output of max(20,10) is 20", function () {
        assert.equal(max(20, 10), 20);
    });

    it("Expected output of maxOfThree(5,4,44) is 44", function () {
        assert.equal(maxOfThree(5, 4, 44), 44);
    });

    it("Expected output of isVowel('e') is true", function () {
        assert.equal(isVowel('e'), true);
    });
    it("Expected output of sum(arr) is 10", function () {
        assert.equal(sum(arr), 10);
    });
    it("Expected output of multiply(arr) is 24", function () {
        assert.equal(multiply(arr), 24);
    });

    it("Expected output of reverse(name) is tna", function () {
        assert.equal(reverse(name), 'tna');
    });

    it("Expected output of findLongestWord(words) is 7", function () {
        assert.equal(findLongestWord(words), 7);
    });

});

describe('my Map function', function () {
    it("Expected output of myMap(arr3, slength) is [3,6]", function () {
        assert.equal(myMap(arr3, slength).toString(), '3,6');
    });

});

describe('my Filter function', function () {
    it("Expected output of myfilter(arr2,filtie) is [4,5,6]", function () {
        assert.equal(myfilter(arr2,filtie).toString(), '4,5,6');
    });


});



/*  2   Define a function max() that takes two numbers as arguments and
 returns the largest of them. Use the if-then-else construct available
  in Javascript.*/


function max(a, b) {
    return a > b ? a : b;
}

/*  3   Define a function maxOfThree() that takes three numbers as arguments
 and returns the largest of them.*/

function maxOfThree(x, y, z) {

    const array = new Array();
    array.push(x);
    array.push(y);
    array.push(z);

    let max = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

/* 4   Write a function isVowel() that takes a character
 (i.e. a string of length 1) and returns true if it is a vowel,
  false otherwise.*/

function isVowel(string) {

    if (string.length !== 1) {
        return false;
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let flag = false;

    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === string) {
            flag = true;
        }
    }

    return flag

}

/*Define a function sum() and a function multiply() that
 sums and multiplies (respectively) all the numbers in
  an array of numbers. For example, sum([1,2,3,4])
   should return 10, and multiply([1,2,3,4]) should return 24*/

function sum(myArray) {
    const array = myArray;

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


function multiply(myArray) {
    const array = myArray;

    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;

}

/*Define a function reverse() that computes the reversal of a string.
 For example, reverse("jag testar") should return the string "ratset gaj"*/


function reverse(string) {
    let stringy = '';

    for (let i = name.length; i >= 0; i--) {
        stringy += name.charAt(i);
    }

    return stringy;
}

/*  7   Write a function findLongestWord() that takes an array of words and
 returns the length of the longest one.*/


const findLongestWord = function (wordsy) {
    const words = wordsy;
    let maxLength = words[0].length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

/*  8 Write a function filterLongWords() that takes an array of words
 and an integer i and returns the array of words that are longer than i.*/

function filterLongWords(longWords, i) {
    let array = new Array();
    array = longWords
        .filter(w => w.length > i);
    return array;

}



console.log(arr3);

const myMap = function (array, func) {
    const innerArr = new Array();

    array.forEach(x => {
        innerArr.push(x);
    });

    for (let i = 0; i < innerArr.length; i++) {
        innerArr[i] = func(innerArr[i]);
    }

    return innerArr;

}

const slength = function (s) {
    return s.length;
}

console.log(
    myMap(arr3, slength)

);


console.log(arr3);




const myfilter = function (theArray, theFunc) {
    const innerArray = new Array();
    let returnArray = [];
    theArray.forEach(elem => innerArray.push(elem));

    for (let i = 0; i < innerArray.length; i++) {
        if (theFunc(innerArray[i]) === true) {
            returnArray.push(innerArray[i]);
        }
    }
    return returnArray;
}



const  filtie =  function (y){
    return y > 3;
}
console.log(
    myfilter(arr2,filtie).toString()

);

console.log(arr2);






