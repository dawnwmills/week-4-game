	
//Couldn't figure out how to display my numbers to the browser... 

	$(document).ready(function(){

	//random number selector. Display a random number between 10 and 100.

	var ranNumber=Math.floor(Math.random() * 100 + 10)

	$('#randomNumber').text(ranNumber);

	console.log(ranNumber)



	//set value for gems

	var redGem=Math.floor(Math.random() * 10 + 1)


	$('#redGem').on('click',function(){
		playerTotal=playerTotal + redGem;
		("NewTotal=" + playerTotal)
		
		if(playerTotal==ranNumber){
			winner();
		}

		else if(playerTotal > ranNumber) 
			loser();
	console.log ("NewTotal="+playerTotal);
		

	});


	var greenGem=Math.floor(Math.random() * 10 + 1)

	$('#greenGem').on('click',function(){
		playerTotal=playerTotal + greenGem;
		("NewTotal=" + playerTotal)

		if(playerTotal==ranNumber){
			winner();
		}

		else if(playerTotal > ranNumber) 
			loser();
	console.log ("NewTotal="+playerTotal);

	});


	var purpleGem=Math.floor(Math.random() * 10 + 1)

	$('#purpleGem').on('click',function(){
		playerTotal=playerTotal + purpleGem;
		("NewTotal=" + playerTotal)

		if(playerTotal==ranNumber){
			winner();
		}

		else if(playerTotal > ranNumber) 
			loser();
	console.log ("NewTotal="+playerTotal);

		});

	var yellowGem=Math.floor(Math.random() * 10 + 1)

	$('#yellowGem').on('click',function(){
		playerTotal=playerTotal + yellowGem;
		("NewTotal=" + playerTotal)

		if(playerTotal==ranNumber){
			winner();
		}

		else if(playerTotal > ranNumber) 
			loser();

	console.log ("NewTotal="+playerTotal);
	});


	//calculate wins

		var wins=0;

	$('#totalWins').text(wins);

	
	function winner() {
		alert("Great Job-YOU DID IT!");
		wins++;
		
		
	};


	//calculate and losses
		var losses=0;

	$('#totalLosses').text(losses);

	
	function loser() {
		alert("Sorry-TRY AGAIN!");
		losses++;


	


	};



	//calculate game total

	var playerTotal=0;
	var totalScores=0;

	});

//reset the game

	function reset(){

		
		redGem=Math.floor(Math.random() * 10 + 1);
		greenGem=Math.floor(Math.random() * 10 + 1);
		purpleGem=Math.floor(Math.random() * 10 + 1);
		yellowGem=Math.floor(Math.random() * 10 + 1);
		playerTotal=0;
	}
	