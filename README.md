
# function-args

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/function-args.svg)](https://www.npmjs.com/package/function-args) [![Downloads](https://img.shields.io/npm/dt/function-args.svg)](https://www.npmjs.com/package/function-args) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Extract the function argument names.

## :cloud: Installation

```sh
$ npm i --save function-args
```


## :clipboard: Example



```js
const functionArgs = require("function-args");

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
```

## :memo: Documentation


### `functionArgs(fn)`
Extract the function argument names.

#### Params
- **Function** `fn`: The function value.

#### Return
- **Array** The function arguments as array.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`node-command`](https://github.com/node-command) (by legodude17)—A command runner with node support.
 - [`riccardo`](https://github.com/mintrupt/riccardo) (by 류형욱)—Dependency Injection Container for Node.js

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
