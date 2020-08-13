let assert = require("assert");
const findItemsOver = require("../findItemsOver");

describe("findsItemsOver the threshold", function (itemList) {
  it("findsItemsOverThreshold return all over the threshold (20)", function () {
    var itemList = [

      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 10 },
      { name: 'apples', qty: 22 },
      { name: 'grapes', qty: 11 },


    ];
    assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'apples', qty: 22 }], findItemsOver(itemList, 20));

  });
  it("findsItemsOverThreshold return all below the threshold (25)", function () {
    var itemList = [

      { name: 'pears', qty: 17 },
      { name: 'bananas', qty: 26 },
      { name: 'apples', qty: 22 },
      { name: 'grapes', qty: 13 },


    ];

    assert.deepEqual([{ name: 'bananas', qty: 26 }], findItemsOver(itemList, 25));


  });
});