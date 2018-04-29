function getFirstSelector(selector) {
  return document.querySelector(selector);
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
  var nextEl = document.querySelector('div#grand-node');
  
  while ( nextEl.querySelector("div") !== null && nextEl.innerHTML !== null ) {
    nextEl = nextEl.querySelector("div");
  } 
  
  return nextEl;
}