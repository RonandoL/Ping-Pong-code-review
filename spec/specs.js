describe('errorHandling', function(){
  it("will handle text input errors with an error message", function(){
    expect(errorHandling("f")).to.eql(["error message"]);
  });

  it("will handle empty space input errors with an error message", function(){
    expect(errorHandling("")).to.eql(["error message"]);
  });
});


describe('pingPong', function(){
  it("will count up to number inputted by the user and output the count from 1 to that number, replacing multiples of 3 with 'ping'.", function(){
    expect(pingPong(4)).to.eql([1, 2, "ping", 4]);
  });

  it("will count up to number inputted by the user and output the count from 1 to that number, replacing multiples of 5 with 'pong', multiples of 3 with 'ping'.", function(){
    expect(pingPong(7)).to.eql([1, 2, "ping", 4, "pong", "ping", 7]);
  });

  it("will count up to number inputted by the user and output the count from 1 to that number, replacing multiples of 5 with 'pong' and multiples of 3 with 'ping', multiples of (3x5) with 'pingpong'.", function(){
    expect(pingPong(16)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong", 16]);
  });
});

describe('negativeNumbers', function(){
  it("will count DOWN to number inputted by the user and output the count from -1 to that number, replacing multiples of 5 with 'pong', multiples of 3 with 'ping' and multiples of (3x5) with 'pingpong'.", function(){
    expect(negativeNumbers(-16)).to.eql(["pingpong",-1, -2, "ping", -4, "pong", "ping", -7, -8, "ping", "pong", -11, "ping", -13, -14, "pingpong", -16]);
  });
});
