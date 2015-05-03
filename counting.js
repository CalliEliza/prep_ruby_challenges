
// uses 10 players to count to 100
var counter = function() {
		var j = 1;
		var text = "";
		while (j < 101) {
				for (i = 1; i < 11; i++) {
					  text += "Player " + i + " says " + j + ". " + "<br/>";
						document.getElementById('result').innerHTML = text;
				j++;
				}
		}
		
};

// resets div to empty.
var reset = function() {
		document.getElementById('result').innerHTML = " ";
};

// function skips player after a number is divisible by 11 is called.
var Skip = function() {
		var j = 1;
	
		var text = "";
		while (j < 101) {
				for (i = 1; i < 11; i++) {
						if ( j % 11 === 0) {  // checks divisibility by 11
							text += "Player " + i + " says " + j + ". " + "<br/>";
							document.getElementById('result').innerHTML = text;
							i++;
						}
						else {
					  text += "Player " + i + " says " + j + ". " + "<br/>";
						document.getElementById('result').innerHTML = text;
						}
				j++;
			
				}
		}	
};

// takes user input to set player# and number counted to.
var cntr = function(player, number) {
		var j = 1;
		var text = "";
		while (j <= number) {
				for (i = 1; i <= player; i++) {
					  text += "Player " + i + " says " + j + ". " + "<br/>";
						document.getElementById('result').innerHTML = text;
				j++;
				}
		}	
};

//switches directions when a number is divisible by 7
var reverse = function() {
		var j = 1;
		var text = "";
		var forward = true;
		
				var i = 1;
				while (j < 101 && i < 11) {
					if ( j % 7 === 0 ) {
							forward =  !forward;	
					}
					  text += "Player " + i + " says " + j + ". " + "<br/>";
						document.getElementById('result').innerHTML = text;
				j++;
				if (forward === true) {
					i++;	
				}
				else {
					i--;		
				}
				}
		
		
};
