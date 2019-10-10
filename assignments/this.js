/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. No scope will make this go global
* 2. Makes an object to something that is inside the function
* 3. Creates new objects.
* 4. Holds a value and can be used at a later time. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function name(newName){
    console.log(this)
    return newName;
}
name('Matt');

// Principle 2

// code example for Implicit Binding
const myBinding={
    greeting: 'Hello',
    getmyBinding: function(name){
        console.log(`${this.greeting} ${name}`)
    }
}
myBinding.getmyBinding('Implicit binding');

// Principle 3

// code example for New Binding
function Cat(Dog) {
    this.Dog = Dog;
    this.end = "chases the Cat!"
    this.callingoutside = function() {
        console.log(`${this.Dog} ${this.end}`)
    }
}

const Chiuahua = new Cat("Chihuahua");
const GermanS = new Cat("German sherpard");
const BorderCollie= new Cat("Border Collie");



Chiuahua.callingoutside();
GermanS.callingoutside();
BorderCollie.callingoutside();
// Principle 4

// code example for Explicit Binding

const sports = {
    name: "Football"
  }
  
  const Favoriteplayers = ["Steve Young", "Pattrick Willis", "Jerry Rice"];
  
function FootballFavplayers(Favoriteplayers) {
     console.log(`${Favoriteplayers} are three of my favorite players to ever play ${this.name}`);
    }

  FootballFavplayers.call(sports, Favoriteplayers);