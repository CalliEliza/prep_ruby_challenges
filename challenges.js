//All challenges were completed using JavaScript.

// 1, power
var power = function (base, exponent) {
  var result = base;
  for (i = 1; i <= exponent; ++i) {
    result = result * base;
  }
  return result;
}


// 2. factorial
var factorial = function (number) {
  var result = number;
  for (i = 1; i < number; ++i) {
    result *= i;
  }
  return result;
}


// 3. Uniques
var uniques = function (array1) {
    var noDups = [];


    for (var i = 0; i < array1.length; ++i) {  // loops through orig array
        var exist = false;
        for (var j = 0; j < noDups.length; ++j) { // loops through noDups array

            if (noDups[j] === array1[i]) {  // checks to see if item is in noDups array,
                exist = true;
            }
        }
        if (exist === false) {
            noDups.push(array1[i]);
        }
    }
    return noDups;
};


// 4. combinations
var combinations = function (array1, array2) {
	var combo = [];
	for (i = 0; i < array1.length; ++i) {
		combo.push(array1[i].concat(array2[i]));
	}
	return combo;
}


// 5. Is it prime?
var is_prime = function (num) {
	for (i = 1; i< 10; ++i) {
		if (num % i === 0 ) {
			return false;
		}
		else {
			return true;
		}
	}
}


// 6. Overlapping rectangles
var overlap = function (array1, array2) {
    var overLap = true;
    var bottomLeftY= array2[0][1] > array1[0][1];
    var topRightY = array2[1][1] > array1[1][1];
    var bottomLeftX = array2[0][0] > array1[1][0];
    var topRightX = array1[0][0] > array2[0][0];
    if ( bottomLeftX === true || topRightY === true || bottomLeftY === true || topRightX === true)
    {
       overLap = false;
    }
    return overLap;
};
