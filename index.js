function getFirstSelector(selector) {
  return querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var elRankedList = document.querySelectorAll(".ranked-list");
  
  for ( var i = 0; i < elRankedList.length; i++ ) {
    for ( var j = 0; j < elRankedList[i].length; j++ ) {
      elRankedList[i]++;
    }
  }
}

function()