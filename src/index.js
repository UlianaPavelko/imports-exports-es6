// Here we import everthing. Custom goes outside of the brackets because it is the
// default export. Every named export goes inside the brackets. We specify the file
// location after from.
import Custom, {Foo, url, bar} from './module';
//We instantiate our default export which we named Custom.
const custom = new Custom();
// We instantiate our named class Foo
const foo = new Foo();
// We call our named function bar()
bar();
// We log our named const url
console.log(url);
