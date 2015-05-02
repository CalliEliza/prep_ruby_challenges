// function where you have players counting
// user picks number of players and the number counted to
// used javascript instead of ruby

var j = 0;
var n = 1;

var counter = function(player,number) {
	var player = document.getElementById("player");  // gets to parameters for function from user
	var number = document.getElementById("number");
	
	while (j < number) { // starts the counter
		for (i = 1; i < player; i++) {		// loops through the players until number is reached
				document.write("Player " +i+ " says " +n+ ". " + "<br/>");
		j++;
		n = j;
		}
	}
	document.write("Player " + i +" says the last number: " +n+ ".");  //anounces the player who says the last number
}
