let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("yearsAgo",function(){
    it("yearsAgo How long ago 1976 is from 2020",function(){
        var year = 44;
       assert.equal(year,yearsAgo("1976"));
    });
    it("yearsAgo How long ago 2000 is from 2020",function(){
       var year = 20;
      assert.equal(year,yearsAgo("2000"));
   });
   it("yearsAgo How long Ago 1950 is from 2020",function(){
      var year = 70;
     assert.equal(year,yearsAgo("1950"));
   });
   it("yearsAgo How long ago 2019 is from 2020",function(){
      var year = 1;
     assert.equal(year,yearsAgo("2019"));
   });
   
   });