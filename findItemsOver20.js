module.exports = function findItemsOver20(lists) {
  var totalPty = [];
  for (var i = 0; i < lists.length; i++) {
    var nextList = lists[i];
    if (nextList.qty > 20) {
      totalPty.push(nextList);

    }
  }
}