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
var uniques = function (array) {
		
}

// 4. combinations



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
