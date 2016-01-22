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


// User Interface Logic
$(document).ready(function() {
  $("form.pingPong").submit(function(event) {
    var userInput = parseInt($("input.userInput").val());
    var ul = $(".countResults");  // variable pointing to <ul> output

    // Variables pointing to Business Logic functions
    var errorCheck = errorHandling(userInput);  //  errorHandling function
    var pingPong = pingPong(userInput);  // pingPong function
    var negativeCheck = negativeNumbers(userInput)  // negativeNumbers function

    if (errorCheck === "error message") {
      console.log(errorCheck);
      $(".errorMessage").append("Please input only a number");
    } else {

    }

// ("<li>" + "Please input only a number" + "</li>")





    event.preventDefault();

  });  // .submit

});  // .ready



//
