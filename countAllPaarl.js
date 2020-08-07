module.exports = function countAllPaarl(regNum){
    console.log(regNum);
    var registration = [];
   var regNumList = regNum.split(", ");
    
    for(var i =0;i<regNumList.length;i++){
          var reggie = regNumList[i];
     if(reggie.startsWith("CJ")){
            registration.push(reggie);
           
    }  }
    
    return registration.length;
  }
  