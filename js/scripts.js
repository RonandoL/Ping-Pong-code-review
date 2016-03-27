// Business Logic

// Main PingPong:
var pingPong = function(number){
  var ping = "ping";   // variables used instead of hardcoding values into code
  var pong = "pong";   // makes for happier coder who has to change a lot later on
  var number1 = "3";
  var number2 = "5";
  var output = [];    // numbers pushed to array that is spit out to browser

  if (isNaN(number) || (number === "")) {
    return (false);     // error message not working;
  }

    // user enters negative number
  if (number < 0) {
    for (var i = -1; i >= number; i--) {
      if ((i % number1 === 0) && (i % number2 === 0)) {
        output.push(ping + pong);
      } else if (i % number1 === 0) {
        output.push(ping);
      } else if (i % number2 === 0) {
        output.push(pong);
      } else {
        output.push(i);
      }
    }
    return output;
  }

    // user enters positive number
  for (var i = 1; i <= number; i++) {
    if ((i % number1 === 0) && (i % number2 === 0)) {
      output.push(ping + pong);
    } else if (i % number1 === 0) {
      output.push(ping);
    } else if (i % number2 === 0) {
      output.push(pong);
    } else {
      output.push(i);
    }
  }
  return output;

};


// User Interface Logic 
$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    $('.countResults').empty(); // clears out results
    $('.resultHeader').empty();  // empty number display header
    $('.red').empty();  // clears error message

    var input = parseInt($('.userInput').val());
    var result = pingPong(parseInt($('.userInput').val())); // spits out Array

    if (result === false) {  // Error Handling
      $('.userInput').after('<p class="red">&nbsp;* Please input a number</p>');
    } else {
      for (var i = 0; i < result.length; i++) {
        $('.countResults').append('<li>' + result[i] + '</li>');
      }

      $('.userNumber').after('<h4 class="resultHeader">Your number is: ' + result.length + '</h4>')
    }





  });  // .submit

});  // .ready



//
