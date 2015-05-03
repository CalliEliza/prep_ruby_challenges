// 1, power
var power = function (base, exponent) {
  var result = base;
  for (i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}

// 2. factorial
var factorial = function (number) {
  var result = number;
  for (i = 1; i < number; i++) {
    result *= i;
  }
  return result;
}




// 3. Uniques
var uniques = function (array) {
	for (i = 0; i <= array.length; i++) {
		if (array[0] === array[1]) {
			array.remove([1]);
		}
		else if (array[0] === array[2]) {
			array.remove([2]);
		}
		else if (array[0] === array[3]) {
			array.remove([3]);
		}
		else if (array[0] === array[4]) {
			array.remove([4]);
		}
	}	
}
