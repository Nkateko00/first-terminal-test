let assert = require("assert");
const findItemsOver20 = require("../findItemsOver20");

describe("findsItemsOver the threshold",function(){
    it("findsItemsOverThreshold return all over the threshold",function(){
      var itemList = [
  
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 23},
          {name : 'grapes', qty : 13},
  
  
      ];
      var results = findItemsOver20(itemList, 20);
     var results = [
        {name : 'bananas', qty : 27},
        {name : 'pears', qty : 37},
        {name : 'apples', qty : 23},
  
      ];
      assert.deepEqual(findItemsOver20(itemList,results));
     
        
    
    });
    it("findsItemsOverThreshold return all below the threshold",function(){
      var itemList = [
  
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 23},
          {name : 'grapes', qty : 13},
  
  
      ];
      var results = findItemsOver20(itemList, 20);
     var results = [
      {name : 'grapes', qty : 13},
      ];
      assert.deepEqual(findItemsOver20(itemList,results));
        
    
    });
  });