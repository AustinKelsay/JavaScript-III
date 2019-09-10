/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding principle: In the global scope, "this" always refers to the window object(s). 
* 2. Implicit binding principle: inside of an objects scope, "this" always refers to the object you are inside of.
* 3. New binding principle: When using a contructor function with the "this" keyword, one can create new objects dynamically using the "new" keyword.
* 4. Explicit binding principle: using .call, .bind, and .apply, one can override the current object "this" is pointing to and redirect it to another object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    school: "Lambda School",
    track: "Full-stack web",
    speak: function(){
    console.log(`I am doing ${this.track} at ${this.school}`)
    }
}
myObj.speak();
// Principle 3

// code example for New Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
      console.log(`this new binding`, this);
      return `Hello, my name is ${this.name}, and I am ${this.age} years old.`;
    }
  }
  const austin = new Person({name: "Austin", age: 25});
  austin.speak();
// Principle 4

// code example for Explicit Binding
const jana = new Person({name: "Jana", age: 23});

austin.speak.call(jana);
jana.speak.apply(austin);