let assert = require("assert");
let isWeekDay = require("../isWeekday");

describe("Return True for Weekday", function () {
    it("should return true for Monday", function () {
        var weekDay = "Monday";
        assert.equal(true, isWeekDay(weekDay));

    });
    it("should return false for Saturday", function () {
        assert.equal(false, isWeekDay("Saturday"));
    });
    it("should return false for Sunday", function () {
        assert.equal(false, isWeekDay("Sunday"));
    });
});