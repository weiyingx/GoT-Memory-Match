console.log("meow")

var array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
var values = [];
var card_ids = [];
var cardFlipped = 0;

Array.prototype.shuffle = function () {
  var i = this.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

function newGame () {
  cardFlipped = 0;
  var output = '';
  array.shuffle();
  for (var i = 0; i < array.length; i++) {
    output += '<div id="card_'+i+'" onclick="flipCard(this,\''+array[i]+'\')"></div>';
    	}
    	document.getElementById('memory_board').innerHTML = output;
    }
