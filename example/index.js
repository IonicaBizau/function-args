"use strict";

const functionArgs = require("../lib");

console.log(functionArgs(x => x * x));
// [ 'x' ]

console.log(functionArgs((a, b) => a + b));
// [ 'a', ' b' ]

console.log(functionArgs(function (a, b) { return a + b; }));
// [ 'a', ' b' ]

class Foo {
    static bar (a, b) {}
    baz (a, b) {}
}

console.log(functionArgs(Foo.bar));
// [ 'a', ' b' ]

console.log(functionArgs((new Foo()).baz));
// [ 'a', ' b' ]

console.log(functionArgs(function () {}));
// []

console.log(functionArgs(() => {}));
// []
