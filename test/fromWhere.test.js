let assert = require ("assert");
let fromWhere = require("../fromWhere");

describe("fromWhere",function(){
    it("return registration number CA for Cape Town",function(){
       var capeTown = "CA";
       assert.equal("Cape Town",fromWhere(capeTown));
   });
   it("return registration number CY for Bellviille",function(){
       var bellVille = "CY";
       assert.equal("Bellville",fromWhere(bellVille));
   });
   it("return registration number CJ for Paarl",function(){
       var paarl = "CJ";
       assert.equal("Paarl",fromWhere(paarl));
   });
   it("return registration number GP for Gauteng",function(){
       var joburg = "GP";
       assert.equal("Some other place!",fromWhere(joburg));
   
   });
   });