let assert = require("assert");
const findItemsOver20 = require("../findItemsOver20");


describe("findsItemsOver20", function (itemList) {
  it("findsItemsOver20 find items more than 20", function () {

    var itemList = [

      {name: 'pears', qty: 37},
      {name: 'bananas', qty: 12},
      {name: 'apples', qty: 13},
      {name: 'grapes', qty: 23},

    ];
    assert.deepEqual([{name: 'pears', qty: 37},{name: 'grapes', qty: 23}], findItemsOver20(itemList));
    
  });
  it("findsItemsOver20 find items more than 20", function () {

    var itemList = [

      {name: 'pears', qty: 37},
      {name: 'bananas', qty: 12},
      {name: 'apples', qty: 13}

    ];
    assert.deepEqual([{name: 'pears', qty: 37}], findItemsOver20(itemList));
    
  });


  it("should return nothing for items less than 20", function () {
    var itemList = [
      
      {name: 'pears', qty: 7},
      {name: 'bananas', qty: 12},
      {name: 'apples', qty: 12},

    ];
    assert.deepEqual([], findItemsOver20(itemList));
    

  });
});


    


