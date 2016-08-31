console.log("meow")

var array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'];
var values = [];
var card_ids = [];
var cardFlipped = 0;

//fisher-yates shuffle method
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
    output += '<div id="card_'+i+'" onclick="flippedCard(this,\''+array[i]+'\')"></div>';
  	}
  	document.getElementById('container').innerHTML = output;
  }
    function flippedCard(card,val){
    	if(card.innerHTML == "" && values.length < 2){
    		card.innerHTML = '<img src="images/' + val +'.jpg">';
        card.style.height = '150px';
        card.style.width = '170px';
    		if(values.length == 0){
    			values.push(val);
    			card_ids.push(card.id);
    		} else if(values.length == 1){
    			values.push(val);
    			card_ids.push(card.id);
    			if(values[0] == values[1]){
    				cardFlipped += 2;
    				values = [];
            card_ids = [];
    				if(cardFlipped == array.length){
              swal({  title: "The North Remembers",
                      text: "Winter is Coming..",
                      imageUrl: "banners/B.png" });
    					document.getElementById('container').innerHTML = "";
    					newGame();
    				}
    			} else {
    				function flipBack(){
    				    var card_1 = document.getElementById(card_ids[0]);
    				    var card_2 = document.getElementById(card_ids[1]);
    				    card_1.style.background = 'url(images/throne.jpg)';
                card_1.style.backgroundSize = '11em 9em';
                	    card_1.innerHTML = "";
    				    card_2.style.background = 'url(images/throne.jpg)';
                card_2.style.backgroundSize = '11em 9em';
                	    card_2.innerHTML = "";
    				    values = [];
                	    card_ids = [];
    				}
    				setTimeout(flipBack, 700);
    			}
    		}
    	}
    }
