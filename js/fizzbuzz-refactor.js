'strict mode';

$(document).ready(function() {

	var suppliedNumber = parseInt(prompt( "Supply a number:" ), 10);
	var ul = $('.fizzbuzzit');

	function fizzbuzzer( number ) {
		for ( var i = 1; i <= number; i++ ) {
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
	}

	fizzbuzzer( suppliedNumber );
});