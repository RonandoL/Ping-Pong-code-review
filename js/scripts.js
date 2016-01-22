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
      output.push("pingpong");
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

// Negative Numbers
// var negativeNumbers = function(number){
//   var output = [];
//
//
// };








// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {
//     // variables and shit go here, bitch!
//
//     // link your muthafuckin' variables to yo bad-ass bidness logic function, Yo!
//
//     // Make shit happen here...BITCH!
//
//     // Muthafuckin' variables connect to your output down here hommie.
//
//     // Show me some money, hunny, and reveal that hiddin fine shit you got stashed.
//
//     // It's all good baby.'
//     event.preventDefault();
//   });
// });
