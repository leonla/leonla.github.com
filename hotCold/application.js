var c=1;
var guess = 0;

function checkinput (number){
		if(number>=1 && number<=100){
			return true;
		}
		else return false;
	};




function play(rand,lastguess){
	$("#guess").keypress(function(e){
		if(e.which==13){
			$("#guessButton").trigger('click');
			e.preventDefault();
		}
	});
	$("#guessButton").click(function(){
		guess = $("#guess").val();
		if(guess===lastguess){
			window.alert("Please chooses a different number");
		}
		else if (!checkinput(guess)){
			window.alert("please enter a number between 1-100");
		} else{
			$(".scores:last-of-type").append("<li>" + guess + "</li");
			check(rand,guess,lastguess);
			lastguess=guess;
			};
	});

};

function colder(){
	$("#mainContainer").css("background-image","-webkit-linear-gradient(top left, #FFFFFF 0%, #00A3EF 100%)");
	$("#guessButton").css("background-color","#559adb")
};

function warmer(){
	$("#mainContainer").css("background-image","-webkit-linear-gradient(top left, #FFFFFF 0%, #DE0707 100%)");
	$("#guessButton").css("background-color","#ef0e51")

};

function win(){
	$("#guessButton").text("you win");
	c=1;

}

function msg (status,miss){
	if(miss==0){
		$("#guessButton").text("That's not it, try again");
	}else if (miss==="missed"){
		$("#guessButton").text("You just missed it. you are getting " + status + ". try again");
	}else{
		$("#guessButton").text("you are getting " + status + ". try again");
	};
};

function flip (rand,guess,lastguess){
	if (((guess<rand)&&(lastguess>rand))||((guess>rand)&&(lastguess<rand))){
		return "missed";
	}
	return "same";
}

function check (rand,guess,lastguess){
	var miss = flip(rand,guess,lastguess);
	if (guess==rand){
		win();
	}
	else if (lastguess==0) {
		msg(0,0);
	}
	else if (Math.abs(guess - rand) < Math.abs(lastguess - rand)) {
		warmer();
		msg("warmer",miss);
	}
	else {
		colder();
		msg("colder",miss);
	};
};

function clean(count){
			$("#mainContainer").css("background-image","radial-gradient(circle farthest-corner at center, #FFFFFF 0%, #5FEF2B 100%)");
			$("#game").append("<ul class='scores'><li id='gameHead'> game " + count + "</li></ul>");
			//$("#game:last-child").addClass("game"+count);
			c=0;
			guess=0;
			$("#guess").val("");

};


$(document).ready(function(){
	var count=0;
	$("#startGame").click(function(){
		if(c==1){
			c=0;
			count++;
			clean(count);
			if (count===1) {$("#game").show();};
			var rand = Math.floor((Math.random()*100)+1);
			$("span").text(rand);
			play(rand,0,0);
	} else {
		window.alert("please finish this game first");
			};
	});

});