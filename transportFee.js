module.exports = function transportFee(time){
    switch(time){
    case  "morning":
    return 'R20';
    break;
    case "afternoon":
    return 'R10';
    break;
    case "nightshift":
    return 'free';
    break;
    }
}
    // if(time==="morning"){
    //   return 'R20';
    // }else if (time === "afternoon"){
    //  return "R10"; 
    // }else if (time === "nightshift"){
    //   return "free"
    // }
  