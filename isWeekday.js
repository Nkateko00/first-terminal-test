 module.exports = function isWeekDay(day){
    var weekly = day.startsWith("Monday"||"Tuesday"||"Wednesday"||"Thursday"||"Friday");
    return weekly;
   // console.log(day);
  }