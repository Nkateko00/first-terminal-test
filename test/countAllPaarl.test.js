let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("countAllPaarl",function(){
    it("countAllPaarl should count all registration Numbers from Paarl",function(){
        var fromPaarl = countAllPaarl('CJ 123-125,CA 345-123,CA 234-215','CJ');

        //fromStellies should contains
        assert.deepEqual(fromPaarl, 1)
      
    }); 
    it("countAllPaarl should count all registration Numbers from Paarl",function(){
        var fromTown = countAllPaarl('CJ 123-212,CA 345-122,CAA 234-215','CJ');

        //fromStellies should contains
        assert.deepEqual(fromTown, 1)
});
it("countAllPaarl should count all registration Numbers from Cape Town",function(){
    var fromTown = countAllPaarl('CJ 123-212,CA 345-123,CAA 234-215,CJ 212-212','CJ');

    //fromStellies should contains
    assert.deepEqual(fromTown, 1)
});
});