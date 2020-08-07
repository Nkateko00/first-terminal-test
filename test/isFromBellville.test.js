let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("return all registration numbers starting with'CY'",function(){
    it("should return true for registration number 'CY-223-34'",function(){
      assert.equal(true,isFromBellville("CY-223-42"));
    });
    it("should return false for registration number 'CJ-233-312'",function(){
      assert.equal(false,isFromBellville("CJ-232-23"));
    });
    it("should return false for registration number 'CAA-862-200'",function(){
        assert.equal(false,isFromBellville("CAA-862-200"));
      });
    });