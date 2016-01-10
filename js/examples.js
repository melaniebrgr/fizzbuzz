'use strict'

function log(args) {
	console.log(args);
}

/* ----- Compliments ----- 

Passed by value
var a = 4;
function add(value) {
	return value + 5;
}
log(add(a)); //9
log(a); //4

Passed by reference: first try
var names =  ['Bob', 'Brenda', 'Ishmael', 'Earl'];
var compliment = " is great!";

function complementGiver(arr, str) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] + str;
	}
	return arr;
}
log(complementGiver(names, compliment)); //["Bob is great!", "Brenda is great!", "Ishmael is great!", "Earl is great!"]
log(names); //["Bob is great!", "Brenda is great!", "Ishmael is great!", "Earl is great!"]

Passed by reference: second try
function complementGiver(arr, str) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		newArray.push(arr[i] + str);
	}
	return newArray;
}
log(complementGiver(names, compliment));
log(names);
*/


/* ----- Counter----- 
var count = 0;

function counter() {
	return count++;
}
log(counter());
log(counter());
log(counter());
}

*/

/* RESET METHOD 

var user = {
    name: "mr smith",
    profession: "dandy fella",
    age: 100000,
    reset: function() {
    	for ( var prop in this ) {
    		if ( !(prop == "reset") ) { 
    			this[prop] = undefined;
    		}
    	}
    }
 }

*/

/* I'm a little teapot

function LittleTeapot() {
this.short = true;
  this.stout = true;
  this.steamedUp = false;
  this.pourRatio = 2;
}

LittleTeapot.prototype.putKettleOn = function(callback) {
	// This method should change the value of steamedUp
  // and call shout after 4 seconds It should also pass 
	// the callback to shout
  var self = this;
  
  setTimeout(function() {
  	self.steamedUp = true;
  	self.shout(callback);
  }, 4000);
};

LittleTeapot.prototype.useHandle = function(pourTime) {
	// This method should change the value of 
  // steamed up, and call useSpout, returning the value
  // of useSpout.
  this.steamedUp = false;
  return this.useSpout(pourTime);
};

LittleTeapot.prototype.useSpout = function(pourTime) {
  // This method should return an integer equal to
  // the pourTime scaled by the pourRatio to indicate
  // the total number of ounces of tea poured over
  // the passed time. It should only do so if steamedUp
  // is false.
  if (this.steamedUp === false) {
  	return this.pourRatio * pourTime;
  }
};

LittleTeapot.prototype.shout = function(callback) {
	// This method should call the callback, but only
  // if steamedUp is true.
  if (this.steamedUp === true) {
  	callback();
  }
};



function User(teapot) {
  this.teapot = teapot;
  this.thirsty = false;
  this.awakeTime = 120000;
}

User.prototype.wakeUp = function(teaIntervalSeconds) {
	// This method should set an interval, indicating
  // the times during the day when the user is thirsty.
  // It should change the value of thirsty, and call
  // makeTea on the interval, and also call it right away. 
  // After the awake time has passed, it should put the user 
  // to sleep. It should also log out: 'Time for Tea!"
  var self = this;
  var timeAwake = 0;
  this.thirsty = true;
  
  var callback = (function() {
    timeAwake += teaIntervalSeconds;
    
    if (timeAwake >= this.awakeTime) {
    	this.sleep();
    } else {
    	console.log('Time for tea!');
  		this.makeTea();
    }
  }).bind(this);
  
  this.teaInterval = setInterval(callback, teaIntervalSeconds);
  callback();
};

User.prototype.makeTea = function() {
	// If the user is thirsty, this method should use
  // the teapot to put the kettle on. It should pass
  // this.drink as a callback. It should also log
  // "Teapot: Tea, Earl Gray, Hot..."
  if (this.thirsty === true) {
  	this.teapot.putKettleOn(this.drink.bind(this));
  }
};

User.prototype.drink = function() {
	// This method should use the handle to get some
  // tea, passing a random integer between 1 and 4,
  // and drink the tea, logging out "Mmm, tea..."
  // for each ounce returned from using the
  // teapot.
  var pourTime = Math.ceil(Math.random() * 4);
  var ounces = this.teapot.useHandle(pourTime);
  
  for (var i = 0; i < ounces; i++) {
  	console.log('Mmm, tea...');
  }
};

User.prototype.sleep = function() {
	// This method should stop the interval from running,
  // and log "To sleep and dream of tea..."
  clearInterval(this.teaInterval);
  console.log('To sleep and dream of tea...');
};

// And here is the code to run it and test your work:

var teapot = new LittleTeapot();
var ryan = new User(teapot);

ryan.wakeUp(12000);

*/

/* ----- Houses pseudoclass creation ----- */

/* Create a pseudo class that creates "house" objects. The objects the 
pseudo class creates should have a customizable number of rooms, a color 
and size. You should also have a method that returns a sentence that says 
"Your house has x number of rooms is x color and x size". */

//Object.create()
/*
var house = {
	rooms: 0,
	color: "",
	size: 0,
	houseSpecs: function() {
		return "Your house has " + this.rooms + " number of rooms is " + this.color + " in color and is " + this.size + " square feet in size.";
	}
};

var whitehouse = Object.create(house);
whitehouse.rooms = 132;
whitehouse.color = "white";
whitehouse.size = 5100;

log(whitehouse.houseSpecs());


//Factory function

function house( rooms, color, squrFt ) {
	var house = {};
	house.rooms = rooms;
	house.color = color;
	house.size = squrFt;
	house.houseSpecs = function() {
		return "Your house has " + this.rooms + " number of rooms is " + this.color + " in color and is " + this.size + " square feet in size.";
	}
	return house;
}

var whitehouse = house( 132, "white", 5100 );

log(whitehouse.houseSpecs());


//Constructor function

function House( rooms, color, squrFt ) {
	this.rooms = rooms;
	this.color = color;
	this.size = squrFt;
}
House.prototype.houseSpecs = function() {
	return "Your house has " + this.rooms + " number of rooms is " + this.color + " in color and is " + this.size + " square feet in size.";
}

var whitehouse = new House( 132, "white", 5100 );
log(whitehouse.houseSpecs());


//Hybrid OLOO and Factory Function

function house( rooms, color, squrFt ) {
	var house = {};
	house.rooms = rooms;
	house.color = color;
	house.size = squrFt;
	house.houseSpecs = function() {
		return "Your house has " + this.rooms + " number of rooms is " + this.color + " in color and is " + this.size + " square feet in size.";
	}
	return house;
}

var whitehouse = Object.create( house( 132, "white", 5100 ) );
log(whitehouse.houseSpecs());

*/




