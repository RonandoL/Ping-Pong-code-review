// Business Logic

// Error Handling: (text and empty input)
var errorHandling = function(number){
  var output = [];

  if (isNaN(number) || (number === "")) {
    output.push("error message");
  }
  return output;
};

// Main PingPong:
var pingPong = function(number){
  var ping = "ping";   // variables used instead of hardcoding values into code
  var pong = "pong";   // makes for happier coder who has to change a lot later on
  var number1 = "3";
  var number2 = "5";
  var output = [];

  for (var i = 1; i <= number; i++) {
    if ((i % number1 === 0) && (i % number2 === 0)) {
      output.push("<li>" + ping + "-" + pong + "</li>");
    } else if (i % number1 === 0) {
      output.push("<li>" + ping + "</li>");
      console.log(output);
    } else if (i % number2 === 0) {
      output.push("<li>" + pong + "</li>");
    } else {
      output.push("<li>" + i + "</li>");
    }
  }
  return output.join(' ');
};

//Negative Numbers
var negativeNumbers = function(number){
  var ping = "ping";
  var pong = "pong";
  var number1 = "3";
  var number2 = "5";
  var output = [];

  if (number < 0) {
    for (var i = 0; i >= number; i--) {
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
};

// --------------------------------------------------------

// User Interface Logic
$(document).ready(function() {
  $("form.pingPong").submit(function(event) {
    var result = pingPong(parseInt($("input.userInput").val()));
    $(".countResults").append("<li>" + result + "</li>");
    event.preventDefault();

  });  // .submit

});  // .ready



//
