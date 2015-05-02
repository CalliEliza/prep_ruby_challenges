// function where you have players counting
// user picks number of players and the number counted to
// used javascript instead of ruby
var j = 0;
var n = 1;
var output = document.getElementById("result");

var counter = function() {
	var j = 0;
	var n = 0;
		while (j < 101) {
				for (i = 1; i < 11; i++) {
					if ( j % 11 === 0 ) { //checks to see if number is divisble by 11
						document.write("Player " + i + " says " + n + ". " + "<br/>");
						i++;
					}
					else {
						document.write("Player " + i + " says " + n + ". " + "<br/>");	
					}
					j++;
					n = j;
				}
		}
		//output.innerHTML = "Player " + i +" says the last number: " +n+ ".";
};

/*var reset = function() {
		output.innerHTML = " ";

};*/

counter();
