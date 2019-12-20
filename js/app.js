// CLASS
class Tamamgatchi {
	constructor(name){
	this.hunger = 1 // perhaps set an array for these
	this.sleepiness = 1 //-10 scale
	this.boredom = 1 //-10 scale
	this.age = 8 //-10 scale
	this.name = name
	}
	// consider a method inside of this constructor
}
// argument is the thing we pass to a function

// parameter is the thing the function receive as input



// OBJECT
const game = {

	light: false, //
	tamamgatchi: null,
	// METHOD 0 -->
	startGame() {

		this.tamamgatchi = new Tamamgatchi("cat")

		this.timer()
	},
	// METHOD 1 --> timer
	timer() {
	const intervalId = setInterval(() => {

  		this.tamamgatchi.hunger += 1
  		this.tamamgatchi.sleepiness += 1
  		this.tamamgatchi.boredom += 1
  		this.tamamgatchi.age += 1

  		// console.log(this.tamamgatchi);
  		
  		const $hungerElement = $("#hunger").text(this.tamamgatchi.hunger) 
  		const $sleepElement = $("#sleepiness").text(this.tamamgatchi.sleepiness)
  		const $playElement = $("#boredom").text(this.tamamgatchi.boredom)
  		const $age = $("#age").text(this.tamamgatchi.age)
		
  		if (this.tamamgatchi.hunger === 10 || this.tamamgatchi.sleepiness === 10 || this.tamamgatchi.boredom === 10) {
  			clearInterval(intervalId)
  		}
    	}, 1000)
	},

	// METHOD 2 --> Vitals should decrement
	feast() {
		if (game.tamamgatchi.hunger >= 1 ) {
			game.tamamgatchi.hunger -= 1

		}
	},
	sleep() {
		if (game.tamamgatchi.sleep >= 1 ) {
			game.tamamgatchi.sleep -= 1
		}
	},
	play() {
		if (game.tamamgatchi.play >= 1 ) {
			game.tamamgatchi.play -= 1
		}
	}
	// METHOD 3 --> Decrement based on buttons 

	// METHOD 4 --> pet dies

} // end of game object



game.startGame()

// LISTENERS
// click > 
$("#feed").on("click", game.feast)
$("#sleep").on("click", game.sleep)
$("#play").on("click", game.play)









