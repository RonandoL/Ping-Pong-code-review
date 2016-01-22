describe('errorHandling', function(){
  it("will handle text input errors with an error message", function(){
    expect(errorHandling("f")).to.eql(["error message"]);
  });

  it("will handle empty space input errors with an error message", function(){
    expect(errorHandling("")).to.eql(["error message"]);
  });
});


describe('pingPong', function(){
  it("will count up to a number and replace multiples of 3 with 'ping'.", function(){
    expect(pingPong(4)).to.eql(["ping", 1, 2, "ping", 4]);
  });
});

// describe('negativeNumbers', function(){
//   it("will handle text and empty space input errors with an error message", function(){
//     expect(negativeNumbers("error")).to.eql(["error message"]);
//   });
// });
