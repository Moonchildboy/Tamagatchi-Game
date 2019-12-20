// CLASS
class Tamamgatchi {
	constructor(name){
		this.hunger = 1 // perhaps set an array for these
		this.sleepiness = 1 //-10 scale
		this.boredom = 1 //-10 scale
		this.age = 1 //-10 scale
		this.name = name
	}
	// consider a method inside of this constructor
}


// OBJECT
const game = {

	light: false, //
	tamamgatchi: null,
	// secondImage: 
	endImage: "http://i.imgur.com/0iowdTk.jpg",
	

	// METHOD 0 --> create an instance of the games
	gameCycle() {

		this.tamamgatchi = new Tamamgatchi("cat")

		this.timer()

		//include a handler for input of name
	},
	// METHOD 1 --> timer
	timer() {
		const intervalId = setInterval(() => {

	  		this.tamamgatchi.hunger += 1
	  		this.tamamgatchi.sleepiness += 1
	  		this.tamamgatchi.boredom += 1
	  		this.tamamgatchi.age += 1
	  		
	  		// print values on screen 
	  		const $hungerElement = $("#hunger").text(this.tamamgatchi.hunger) 
	  		const $sleepElement = $("#sleepiness").text(this.tamamgatchi.sleepiness)
	  		const $playElement = $("#boredom").text(this.tamamgatchi.boredom)
	  		const $age = $("#age").text(this.tamamgatchi.age)
			

	  		if (this.tamamgatchi.hunger === 10 || this.tamamgatchi.sleepiness === 10 || this.tamamgatchi.boredom === 10) {
	  			clearInterval(intervalId) 

	  			// swap the image to end game image
	  			$("#image1").attr("src", this.endImage)
	  			
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
		if (game.tamamgatchi.sleepiness >= 1 ) {
			game.tamamgatchi.sleepiness -= 1
		}
	},
	play() {
		if (game.tamamgatchi.boredom >= 1 ) {
			game.tamamgatchi.boredom -= 1
		}
	},
	//METHOD 3 --> MOVE 
	move() {

	},

	// METHOD 4 --> MORPH --> consider .animate()
	morph() {
		console.log("string");
	// $("#image1").attr("src", "image I will use").css(¿?)
	},
	// morph() {
	// 	if() {

	// 	}
	// }

	// METHOD 4 --> DEMISE --> stops interval
	// demise() {
	// 	const $image = $("<img id="endGame">").attr(src="http://i.imgur.com/0iowdTk.jpg">)
	// 	console.log(image);
	// },

	// METHOD 6 --> 

} // end of game object

game.gameCycle()

// LISTENERS
// input >

// click > 
$("#feed").on("click", game.feast)
$("#sleep").on("click", game.sleep)
$("#play").on("click", game.play)









