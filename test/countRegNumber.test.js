let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe("should return the number of registration numbers in string", function () {
    it("should return 1 for 'CA 182736'", function () {
        assert.equal(1,countRegNumber('CA 182736'));

    });
    it("should return 3 for 'CA 182736,CY 523519,CJ 812328'" , function () {
        var expectedCount = 3;
        assert.equal(expectedCount,countRegNumber('CA 182736,CY 523519,CJ 812328'));

    });
});