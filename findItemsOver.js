module.exports = function findItemsOver(quantity,threshold){
    var totalThreshold =[];
    for(var i =0;i<quantity.length;i++){
         var newThreshold = quantity[i];
      if(newThreshold.qty>threshold){
        totalThreshold.push(newThreshold);
      }
    }
    //console.log(totalThreshold);
    return totalThreshold;
    }