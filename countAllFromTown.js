module.exports = function countAllFromTown(regNumb,regStart){
    var newList = [];
    var reggie = regNumb.split(",");
     console.log(reggie);
     for(var i =0;i<reggie.length;i++){
       var reg = reggie[i].trim();
       if(reg.startsWith(regStart)){
          newList.push(reg);
       //  return newList.length
          }
     }
   return newList.length;
   }