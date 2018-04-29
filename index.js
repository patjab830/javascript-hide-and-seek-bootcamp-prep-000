function getFirstSelector(selector) {
  return querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var elRankedList = document.querySelectorAll("ul.ranked-list li");
  
  for ( var i = 0; i < elRankedList.length; i++ ) {
    elRankedList[i].innerHTML = parseInt(elRankedList[i].innerHTML) + n;
  }
}

function deepestChild() {
  document.querySelector('div#grand-node');
}