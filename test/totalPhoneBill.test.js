let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("totalPhoneBill",function(){
    it("totalPhoneBill should equal R7.45 for total",function(){
        var total = "R"+7.45;
        assert.equal(total,totalPhoneBill("call, sms, call, sms, sms"));
    });
    it("totalPhoneBill should equal R5.50 for calls",function(){
        var callsTotal = "R"+5.50.toFixed(2);
        assert.equal(callsTotal,totalPhoneBill("call, call"));
    });
    it("totalPhoneBill should equal R1.95 for sms",function(){
        var smsTotal = "R"+1.95;
        assert.equal(smsTotal,totalPhoneBill("sms, sms , sms"));
    });
});