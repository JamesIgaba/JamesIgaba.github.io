"use strict";
class Clock {

    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);

    }

    stop() {
        clearInterval(this.timer);
    };


    timer = null;
    start() {
        this.render();
        let runner = 0;
        this.timer = setInterval(() => {
            runner += 1;
            if (runner === 10) { this.stop(); }
            this.render()
        }, 1000);
        //clearInterval(this.timer, 10000);
    };
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

/*Questions and Answers
What is the inner function of the constructor function?
  - reduce()
  - start()
  - stop()

What is the local variable of the constructor function?
  - template
  - timer

What is the clock “interface” returned by the constructor function?
  - start()

What are the closures?
  - start()

What are the private variables and functions?
  variables
  -timer
  -template

  functions
  - render()
  - stop()

What are the public methods?
  - start()
How does this example illustrate that a JavaScript class is really
a function and not an object?
  - From the example, the class was simplybcreated from a function
  Better still, the class is composed of a constructor and methods
  which are clearly functions.
*/