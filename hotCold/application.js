var startgame = $("#startGame");
var $field = $("#guess");
var $guess = $("#guessButton");
var $main = $("#mainContainer");
var $scan = $("#gameMain");
var $msg = $("#msg");
var $p = $("#msg p");
var $track = $("#track");
var r = 0;
var guess = 0;
var gameon = 0;
var lastguess = 0;
var st =0;
var count = 0 ;
var countBest = 0;
var print;

$(document).ready(function(){
	$scan.remove();
	$msg.remove();
	$track.remove();

	$("#startGame").click(function(){
		if(!gameon){
			$("#startGame").hide();
			newGame();
			$msg.remove();
			random();
			gameon = 1;
			scan();
		}else {
			window.alert("please first finish the current game");
		};

	});
});

function newGame(){

	$("#mainContainer").css("background-image","url('green.jpg')");
	
	r = 0;
	guess = 0;
	lastguess = 0;
	st = 0 ;
	count = 0 ;
	$("#next").show();
	$(".gu").remove();


};

function random(){
	r = Math.floor((Math.random()*100)+1);
	if (r === 0){
		r++;
	};
};

function scan(){
	count++;
	$main.append($scan);
	colderDesign();
	if(lastguess>0){
		$main.append($track);
	};

	if(count>2){
		if(st == 1){
			warmer();
		} else if(st == 2) {
			colder();
		};
	};


	$field.val("");
	$field.select();
	
	$field.keypress(function(e){
		if(e.which==13){
			$("#guessButton").trigger('click');
			e.preventDefault();
		};
	});


	$guess.click(function(){
		guess = $field.val();
		if(check()){
			$scan.remove();
			$track.remove();
			$main.append($msg);
			$main.append($track);
			compare(guess,r);
			flip(r,guess,lastguess);
			status();
			next();
		};
	});

};

function check(){
	if(guess>=1 && guess<=100){
		return true;
	}
	else {window.alert("please entere a number between 1-100")};
};

function status (){
	if (st === 100){
		win();
	} else if (lastguess === 0) {
		$p.text("This is not the answer. You should try again.");
	} else if (st === 2) {
		colder();
	} else {
		warmer();
	};
};

function next (){
	if(gameon){
	$track.append("<li class='gu'> " + guess + "</li>")

	};

	$("#next").click(function(){
		lastguess = guess;
		$msg.remove();
		scan();
	});
};

function compare(guess,r){
	if(guess == r){
		 st = 100;
	} else if (Math.abs(guess - r) < Math.abs(lastguess - r)){
		 st = 1;
	} else {
		 st = 2;
	};
};

function flip (rand,guess,lastguess){
	flipmsg = "";
	if (((guess<rand)&&(lastguess>rand))||((guess>rand)&&(lastguess<rand))){
		flipmsg = "you just missed it, and ";
	};
};

function colderDesign(){
	$(".game").css("background-image","-webkit-linear-gradient(top left, #FFFFFF 0%, #00A3EF 100%)");
	$(".game").css("border-color","blue")
	$("button").css("background-color","blue")
	$("button").css("border-color","blue")

};

function colder(){
	colderDesign();
	$("#mainContainer").css("background-image","url('colder.jpg')");

	$p.text(flipmsg + "you are colder");
};

function warmer(){
	$(".game").css("background-image","-webkit-linear-gradient(top left, #FFFFFF 0%, #DE0707 100%)");
	$(".game").css("border-color","red")
	$("button").css("background-color","#ba1414")
	$("button").css("border-color","#ba1414")

	$("#mainContainer").css("background-image","url('warmer.jpg')");
	$p.text(flipmsg + "you are warmer");
};

function win (){

	colder();
	$("#next").hide();
	$("#mainContainer").css("background-image","url('win.jpg')");
	print = " keep playing.";
	if (countBest ===0 ) {
		countBest = count;
	}else if (countBest > count) {
		print = "this is your best game! try to get it better!";
		countBest = count;
	} else{
		print = "this is not your best game that was " + countBest +" attempts. Try again";
	};

	$p.text("Great work! you guessed it in " + count + " attempts. " + print);
	
	gameon = 0;
	$(".gu").remove();
	$track.remove();
	$("#startGame").show();
};