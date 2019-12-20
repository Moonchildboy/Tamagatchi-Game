// CLASS
class Tamamgatchi {
	constructor(hunger, sleepiness, boredom, age, name){
	this.hunger = 1 // perhaps set an array for these
	this.sleepiness = 1 //-10 scale
	this.boredom = 1 //-10 scale
	this.age = 1 //-10 scale
	this.name = name
	}
	// consider a method inside of this constructor
}

const pet = new Tamamgatchi("cat")
console.log(pet);

// OBJECT
const game = {

	feed: 1,
	sleep: 1,
	play: 1, 
	age: 1,
	light: false, //
	// METHOD 0 --> timer
	timer() {
	const intervalId = setInterval(() => {
  		this.feed += 1
  		this.sleep += 1
  		this.play += 1
  		this.age += 1
  		const $hungerElement = $("#hunger").text(this.feed) 
  		const sleepElement = $("#sleepiness").text(this.sleep)
  		const playElement = $("#boredom").text(this.play)
  		const age = $("#age").text(this.age)
    	}, 1000)
	
	// METHOD 1 --> Vitals should increment

	// METHOD 2 --> Decrement based on buttons 

	// METHOD 3 --> pet dies

	} // end of game object

}

game.timer()

// LISTENERS
// click > 