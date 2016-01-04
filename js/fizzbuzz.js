'strict mode'

$(document).ready(function() {

	var ul = $('.fizzbuzzit');

	for ( i = 1; i <= 100; i++ ) {
		if ( i%3 === 0 && i%5 === 0 ) {
			ul.append("<li>FizzBuzz</li>");
		} else if ( i%3 === 0 ) {
			ul.append("<li>Fizz</li>");
		} else if ( i%5 === 0 ) {
			ul.append("<li>Buzz</li>");
		} else {
			ul.append("<li>" + i + "</li>");
		}
	}

});