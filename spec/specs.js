describe('errorHandling', function(){
  it("will handle text input errors with an error message", function(){
    expect(errorHandling("f")).to.eql(["error message"]);
  });

  it("will handle empty space input errors with an error message", function(){
    expect(errorHandling("")).to.eql(["error message"]);
  });
});


describe('pingPong', function(){
  it("will handle text and empty space input errors with an error message", function(){
    expect(pingPong("error")).to.equal("error message");
  });
});

// describe('negativeNumbers', function(){
//   it("will handle text and empty space input errors with an error message", function(){
//     expect(negativeNumbers("error")).to.equal("error message");
//   });
// });
