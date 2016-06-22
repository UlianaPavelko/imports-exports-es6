'use strict';

var _module = require('./module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//We instantiate our default export which we named Custom.
var custom = new _module2.default();
// We instantiate our named class Foo
// Here we import everthing. Custom goes outside of the brackets because it is the
// default export. Every named export goes inside the brackets. We specify the file
// location after from.
var foo = new _module.Foo();
// We call our named function bar()
(0, _module.bar)();
// We log our named const url
console.log(_module.url);