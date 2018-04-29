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
  var grandNodeEl = document.querySelector('div#grand-node');
  var nextEl = grandNodeEl;
  
  do {
    nextEl = nextEl.querySelector("#div");
  } while ( nextEl)
}