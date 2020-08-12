let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe("findsItemsOver20", function () {
  it("findsItemsOver20 find items more than 20", function () {
    var itemList = [

      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
      { name: 'apples', qty: 23 },

    ];
    var results = findItemsOver20(itemList, 20)
    var results = [
      { name: 'apples', qty: 23 },
      { name: 'bananas', qty: 27 },
      { name: 'pears', qty: 37 },
    ];
    assert.deepEqual([], findItemsOver20(itemList, results));


  });
  it("findsItemsOver20 return all items more than 25", function () {
    var itemList = [

      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
      { name: 'apples', qty: 23 },

    ];
    var results = findItemsOver20(itemList, 25)
    var results = [
      { name: 'bananas', qty: 27 },
      { name: 'pears', qty: 37 },
    ];
    assert.deepEqual([], findItemsOver20(itemList, results));


  });
});