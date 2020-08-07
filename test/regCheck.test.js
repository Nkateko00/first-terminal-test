let assert = require ("assert");
let regCheck = require("../regCheck");

describe("check if a registration number is for GP, CY, ND, MP & return true for GP", function () {
    it("should return true for GP ", function () {
      var isGP = regCheck('DV 23 NB GP', 'GP');
      assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it("should return false for MP", function () {
      var isMP = regCheck('DV 23 LP GP', 'MP');
      assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
    it("should return false for CY", function () {
      var isBellville = regCheck('CY189-012', 'CY');
      assert.equal(false, regCheck('CY189-012', 'CY'));
    });
    it("should return false for ND", function () {
      assert.equal(false, regCheck('CY189-012', 'ND'));
    });
  });