// Guessing Game

document.querySelector(".btn").addEventListener("click", function(){
	var numOfWon = 0;
	var numOfLost = 0;

	for(var x = 1; x <= 5; x = x + 1){
		var guessNumber = parseInt(prompt("Enter your guess between 1 to 5"));
		var randomNumber = Math.floor(Math.random()*5) + 1;

		if(guessNumber == randomNumber){
			document.write("You have won!" + "<br/>");
			numOfWon++;
		}else{
			document.write("You have lost! Random number was : " + randomNumber + "<br/>");
			numOfLost++;
		}
	};
	document.write("<br/>" + "<br/>" + "Total number of won : " + numOfWon + "<br/>");
	document.write("Total number of Lost : " + numOfLost);
});