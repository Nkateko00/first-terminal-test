module.exports = function totalPhoneBill(call){
    var mobilePhone = call.split(", ")
    // console.log(mobilePhone);
    var totalBill =0;
      for(var i =0;i<mobilePhone.length;i++){
      if(mobilePhone[i]==='call'){
       totalBill += 2.75;
       //turn totalPhoneBill();
      }else{
        totalBill += 0.65;
      }
    
    }
      return "R"+ totalBill.toFixed(2);
    }