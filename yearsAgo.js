module.exports = function yearsAgo(year){
    // console.log(year);
    var day = new Date();
    //console.log(year);
    var date = day.getFullYear() - year;
    console.log(date);
    return date;
  }