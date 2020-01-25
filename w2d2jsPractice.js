/*jshint esversion: 6  */
/* global assert */
(function () {
    "use strict";

    function reverseArray( array ) {
        const cloneArray = [...array];
        let reversedArray = [];
        let i;
        while( i = cloneArray.pop() )
            reversedArray.push( i );
        return reversedArray;
    }

    function reverseArrayInPlace( array ) {
        for( let i = 0; i < Math.floor( array.length/2 ); i++ ) {
            let temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }
    }

    const arr1 = ["A", "B", "C"];
    console.log(reverseArray(arr1));
    console.log(arr1);
// → ["C", "B", "A"];
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
// → [5, 4, 3, 2, 1]


    function arrayToList(array) {
        let result = {};
        if (Array.isArray(array)) {
            let currListItem = result;
            for (let item of array) {
                let newListItem = {
                    value: item,
                    rest: null
                };
                if (typeof currListItem.rest === 'undefined') {
                    result = newListItem;
                } else {
                    currListItem.rest = newListItem;
                }
                currListItem = newListItem;
            }
        }
        return result;
    }

    function listToArray(list) {
        let result = [];
        if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
            return result;
        } else {
            result.push(list.value);
            while (list.hasOwnProperty('rest') && list.rest !== null) {
                list = list.rest;
                if (list.hasOwnProperty('value')) {
                    result.push(list.value);
                }
            }
        }
        return result;
    }

    function prepend(element, list) {
        return {
            value: element,
            rest: list
        };
    }

    function nth(list, number) {
        return listToArray(list)[number];
    }

    function nthRecursive(list, number) {
        if (number === 0) {
            return list.value;
        } else if (list.rest === null) {
            return undefined;
        } else {
            return nthRecursive(list.rest, number-1);
        }
    }

    console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
    console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

    /**
     * Compares two objects for equal values in all properties and recursively for any objects that are property values
     * @param a any object
     * @param b another object to be compared
     * @returns {boolean} true if they are deep equal, else false
     */
    function deepEqual(a, b) {
        /* check to see if equal primitive values or same object reference */
        if (a === b) {return true; }

        /* must both be objects or else cannot have equal values (after first test)*/
        if (a === null || typeof a !== "object" ||
            b === null || typeof b !== "object") { return false;}

        let keysA = Object.keys(a), keysB = Object.keys(b);

        /* must have same number of properties */
        if (keysA.length !== keysB.length) {return false; }

        /* must have all the same properties and the values of properties must be the same */
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {return false; }
        }

        return true;
    }

    let obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
// → true
    console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
    console.log(deepEqual(null, null));
    const x = {a:1, b:2};
    const y = x;
    console.log(deepEqual(x, y));




    context("test cases from assignment" , function () {
        let longWords;
        beforeEach(function () {
            let obj = {here: {is: "an"}, object: 2};
        });

        describe("testing deepEqual", function () {
            it("object equal to itself", function () {
                assert.isTrue(deepEqual(obj, obj));
            });
            it("2 objs of equal values", function () {
                assert.isTrue(deepEqual(obj, {here: {is: "an"}, object: 2}));
            });
            it("similar but not equal objs", function () {
                assert.isFalse(deepEqual(obj, {here: 1, object: 2}));
            });
        });
    });


}());