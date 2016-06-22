"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function _class() {
  _classCallCheck(this, _class);

  console.log("GOOD");
};

exports.default = _class;

var Foo = exports.Foo = function Foo() {
  _classCallCheck(this, Foo);

  console.log("FOO");
};

var url = exports.url = "http://www.kaplankomputing.com";

function bar() {
  console.log("bar");
}