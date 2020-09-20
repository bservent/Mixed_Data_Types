/* 1. Data types

#### Refresher

So far we have seen:

* Strings
* Numbers
* Booleans
* Arrays
* Objects

When these datatypes are combined, we get a **data structure**, for example, an array that contains objects that each contain booleans.

Suppose you are tasked with creating some software, and it is up to **you** to determine which datatypes and what data structure to use.  For each of the following, write which **data types** you would use to represent the data, and then give a small example of the **data structure**:

  * A light switch that can be either on or off. */

/* Boolean
Ex: 
light on = true;
light off = false;

if (the light is on) {
    console.log('the ligth is on');
}

if (the light is off) {
    console.log('the light is off');
} */
/*   * A user's email address. */

/* String
Ex:
const email = 'bservent@gmail.com'; */

/*   * A spaceship with a hull, laser blasters, tractor beam, and warp drive. */

/* Array
Ex:
var spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']; */

 /*  * A list of student names from our class. */

/*  Array
 Ex:
 var classNames = ['thing1', 'thing2', 'thing3', 'thing4']; */

 /*  * A list of student names from our class, each with a location. */
/* 
String within String

var classNameLocation = [['thing1','oaxaca city'], ['thing2', 'beverly hills'], ['thing3','middle earth'], ['thing4', 'over the rainbow']]; */
 
/*   * A list of student names from our class, each with a location and each with a list of favorite tv shows.
 */
/*   Class object  */

/*   class Person {
      constructor(name, location, movieList) {
        this.name = name;
        this.location = location;
        this.movieList = movieList;
      }
  }

  let person1 = new Person ('Britt', 'Seattle','The Departed, Gladiator, Constant Gardener') */

/* 2. Take it Easy */

/* 1. Make an array that holds all of the colors of the rainbow. */

/* let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(rainbow[4]); */

/* 2. Write code that will access "blue" from the rainbow array.

3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype. */

/* let person = {
    name: 'Britt',
    favoriteFood: 'Pizza',
    hobby: 'Circus',
    city: 'Seattle',
    favoriteDatatype:'Objects'
}; */

/* 4. Write code that will access your hobby from the object that you just created. */

/*  console.log(person.hobby); */

/* 3. Crazy Object! */

/* const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
} */


/* Use crazyObject to log the following. */

/*   * "omg my mouth is burning" */
 /*  console.log(crazyObject.taco[1].salsa[5]); */
/*   * "Pretty pretty prettayyyyy good" */
/*   console.log(crazyObject.larry.quotes[0]); */
/*   * "Swearing at Larry and Jeff" */
/*   console.log(crazyObject.larry.characters[2].favourtieHobby); */
/*   * "Chicken Teriyaki Boyyyyyy" */
/*   console.log(crazyObject.larry.nicknames[1]); */
 /*  * The object the contains the name `funkhauser` */
/*  console.log(crazyObject.larry.characters) */

/*  4. Object-ception */

/* With the following object: */


/* const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
 */

/* Change the value of `limbo` to `null`. */
/* inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo); */

