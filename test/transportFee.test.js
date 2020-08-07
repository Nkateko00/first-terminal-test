let assert = require("assert");
let transportFee = require("../transportFee");

describe("transportFee funtion",function(){
    it("should return R20 for the morning fee",function(){
        var time = "morning";
        assert.equal("R20",transportFee(time));
    });
    it("should return R10 for the afternoon fee",function(){
        var time = "afternoon";
        assert.equal("R10",transportFee(time));
    });
    it("should return free for the nightshift fee",function(){
        var time = "nightshift";
        assert.equal("free",transportFee(time));
    });
});