/*jshint esversion: 6  */
/* global assert */
(function () {
    "use strict";

    /**
     *
     * @param arr
     * @returns {[]}
     */
    function reverseArray(arr) {
        let newArray = [];
        for (let i = 0; i < arr.length; i++) {
            newArray[i] = arr[arr.length - i - 1];
        }
        return newArray;
    }

    /**
     *
     * @param arr
     * @returns {*}
     */
    function reverseArrayInPlace(arr) {
        for (let i = 0; i < arr.length / 2; i++) {
            let tmp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = tmp;
        }
        return arr;

    }

    /**
     *
     */
    Array.prototype.reverseArray = function () {
        let i = 0;
        let middle = Math.floor(this.length / 2);
        let temp = null;

        for (let i = 0; i < middle; i += 1) {
            temp = this[i];
            this[i] = this[n - 1 - i];
            this[n - 1 - i] = temp;
        }
    };

    describe("reverse", function () {
        it("reverseArray(Z,Y,X) returns XYZ", function () {
            assert.equal(reverseArray(["Z","Y","X"]).toString(), ["X","Y","Z"]);
        });

        it("reverseArrayInPlace(Z,Y,X) returns XYZ", function () {
            assert.equal(reverseArrayInPlace(["Z","Y","X"]).toString(), ["X","Y","Z"]);
        });

    });


    /**
     *
     * @param number
     * @param list
     * @returns {{}}
     */
    function prepend(number, list) {
        let obj = {};
        obj.value = number;
        obj.rest = list;
        return obj;
    }

    console.log(prepend(100, prepend(50, null)).value);

    describe("prepend", function () {
        it("prepend(10, prepend(20, null))", function () {
            assert.equal(prepend(100, prepend(50, null)).value, 100);
        });

    });

    /**
     *
     * @param arr
     * @returns {{rest: null}}
     */

    function arrayToList(arr) {
        let retVal = {
            rest : null
        };

        for (let i = 0; i < arr.length; i++) {

            if (retVal.rest === null) { // if its first element in list
                retVal.value = arr[i]; // dynamically adding value attribute to
                // retVal object
                retVal.rest = {

                    rest : null
                };
            } else {
                let counter = retVal;
                while (counter.rest !== null) {
                    counter = counter.rest;
                }
                counter.value = arr[i];
                counter.rest = {

                    rest : null
                };

            }

        }

        return retVal;
    };
    console.log();

    /**
     *
     * @param list
     * @returns {[]}
     */

    function listToArray(list) {

        let arr = [];

        while (list !== null) {
            if (list.value !== undefined)
                arr.push(list.value);
            list = list.rest;
        }

        return arr;

    }


    describe("array -> List", function () {
        it("arrayToList([ 1, 2, 3 ]", function () {
            assert.equal(arrayToList([ 1, 2, 3 ]).toString(),"[object Object]")
        })

        it("listToArray({\n" +
            "        value : 1,\n" +
            "        rest : {\n" +
            "          value : 2,\n" +
            "          rest : {\n" +
            "            value : 3,\n" +
            "            rest : null\n" +
            "          }\n" +
            "        }\n" +
            "\n" +
            "      } -> 123", function () {
            assert.equal(listToArray({
                value : 1,
                rest : {
                    value : 2,
                    rest : {
                        value : 3,
                        rest : null
                    }
                }

            }).toString(),"1,2,3")
        })

    });

    /**
     *
     * @param list
     * @param index
     * @returns {null|*}
     */
    function nth(list, index) {
        let i = 0;
        while (list != null && list.value != null) {
            if (i == index) {
                return list.value;
            }
            list = list.rest;
            i++;
        }
        return null;
    }


    /**
     *
     * @param list
     * @param index
     * @returns {*}
     */
    function recNth(list, index) {
        if (index === 0) {
            return list.value;
        }
        return recNth(list.rest, --index);

    }

    console.log(recNth({
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }

    }, 0));
    console.log(nth({
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }

    }), 0);

    describe("nth", function () {
        it("nth({\n" +
            "    value: 1,\n" +
            "    rest: {\n" +
            "      value: 2,\n" +
            "      rest: {\n" +
            "        value: 3,\n" +
            "        rest: null\n" +
            "      }\n" +
            "    }\n" +
            "\n" +
            "  }, 0) -> 1", function () {
            assert.equal(nth({
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: null
                    }
                }

            },0), 1)
        })

        it("recNth({\n" +
            "    value: 1,\n" +
            "    rest: {\n" +
            "      value: 2,\n" +
            "      rest: {\n" +
            "        value: 3,\n" +
            "        rest: null\n" +
            "      }\n" +
            "    }\n" +
            "\n" +
            "  }, 0) -> 1", function () {
            assert.equal(recNth({
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: null
                    }
                }

            }, 0),1)
        })

    });

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

    context("testing deepEqual" , function () {
        let longWords;
        beforeEach(function () {
            let obj = {here: {is: "an"}, object: 2};
        });

        describe("", function () {
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