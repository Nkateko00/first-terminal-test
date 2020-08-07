module.exports = function mostProfitableDepartment(salesList){
    var latestSales = {};
 for(var i=0;i<salesList.length;i++){
           var newList = salesList[i].department;
   if(latestSales[newList] === undefined){
      latestSales[newList] = 0;
      }
    else {
        latestSales[newList] += salesList[i].sales
    }    
 }
 var mostSale = 0;
 var mostDept = "";
 //console.log(latestSales);
 for(var i in latestSales){
 if(latestSales[i] > mostSale){
   mostSale = latestSales[i];
   mostDept = i;
 }
}
 return  mostDept;
}  