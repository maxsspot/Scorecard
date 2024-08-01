// Name input variables
var p1Input = document.getElementById("p1namein");
var p2Input = document.getElementById("p2namein");
var p3Input = document.getElementById("p3namein");
var p4Input = document.getElementById("p4namein");
var p5Input = document.getElementById("p5namein");

// Player score variables
var p1score = 0;
var p2score = 0;
var p3score = 0;
var p4score = 0;
var p5score = 0;

// Player score input variables
var p1scoreinput = document.getElementById("p1");
var p2scoreinput = document.getElementById("p2");
var p3scoreinput = document.getElementById("p3");
var p4scoreinput = document.getElementById("p4");
var p5scoreinput = document.getElementById("p5");

// Shown scores input variables
var p1ShownScore = document.getElementById("p1score");
var p2ShownScore = document.getElementById("p2score");
var p3ShownScore = document.getElementById("p3score");
var p4ShownScore = document.getElementById("p4score");
var p5ShownScore = document.getElementById("p5score");
var p1ShownScore2 = document.getElementById("p1score2");
var p2ShownScore2 = document.getElementById("p2score2");
var p3ShownScore2 = document.getElementById("p3score2");
var p4ShownScore2 = document.getElementById("p4score2");
var p5ShownScore2 = document.getElementById("p5score2");

// Other variables
var endScreen = document.getElementById("gameEnd");
var playersAmount = document.getElementById("playersAmount");

// Updates player names where it needs to be shown
setInterval(function() {
	document.getElementById("p1name").innerHTML = p1Input.innerHTML;
	document.getElementById("p2name").innerHTML = p2Input.innerHTML;
	document.getElementById("p3name").innerHTML = p3Input.innerHTML;
	document.getElementById("p4name").innerHTML = p4Input.innerHTML;
	document.getElementById("p5name").innerHTML = p5Input.innerHTML;
	document.getElementById("p1name2").innerHTML = p1Input.innerHTML;
	document.getElementById("p2name2").innerHTML = p2Input.innerHTML;
	document.getElementById("p3name2").innerHTML = p3Input.innerHTML;
	document.getElementById("p4name2").innerHTML = p4Input.innerHTML;
	document.getElementById("p5name2").innerHTML = p5Input.innerHTML;
}, 100);

// Updates player score and what not
function nextHole() {
	if (p1scoreinput.value != "") {
		p1score += parseFloat(p1scoreinput.value);
		p1ShownScore.innerHTML = p1score;
		p1ShownScore2.innerHTML = p1score;
		document.getElementById("p1sect").style.opacity = "1";
	}
	if (p2scoreinput.value != "") {
		p2score += parseFloat(p2scoreinput.value);
		p2ShownScore.innerHTML = p2score;
		p2ShownScore2.innerHTML = p2score;
		document.getElementById("p2sect").style.opacity = "1";
	}
	if (p3scoreinput.value != "") {
		p3score += parseFloat(p3scoreinput.value);
		p3ShownScore.innerHTML = p3score;
		p3ShownScore2.innerHTML = p3score;
		document.getElementById("p3sect").style.opacity = "1";
	}
	if (p4scoreinput.value != "") {
		p4score += parseFloat(p4scoreinput.value);
		p4ShownScore.innerHTML = p4score;
		p4ShownScore2.innerHTML = p4score;
		document.getElementById("p4sect").style.opacity = "1";
	}
	if (p5scoreinput.value != "") {
		p5score += parseFloat(p5scoreinput.value);
		p5ShownScore.innerHTML = p5score;
		p5ShownScore2.innerHTML = p5score;
		document.getElementById("p5sect").style.opacity = "1";
	}

	p1scoreinput.value = "";
	p2scoreinput.value = "";
	p3scoreinput.value = "";
	p4scoreinput.value = "";
	p5scoreinput.value = "";
}

// Ends game
function endGame() {
	endScreen.style.opacity = "1";
	endScreen.style.pointerEvents = "all";

	if (p1score > 0) {
		document.getElementById("p1sect2").style.display = "inline-block";
	} else {
		document.getElementById("p1sect2").style.display = "none";
	}

	if (p2score > 0) {
		document.getElementById("p2sect2").style.display = "inline-block";
	} else {
		document.getElementById("p2sect2").style.display = "none";
	}

	if (p3score > 0) {
		document.getElementById("p3sect2").style.display = "inline-block";
	} else {
		document.getElementById("p3sect2").style.display = "none";
	}

	if (p4score > 0) {
		document.getElementById("p4sect2").style.display = "inline-block";
	} else {
		document.getElementById("p4sect2").style.display = "none";
	}

	if (p5score > 0) {
		document.getElementById("p5sect2").style.display = "inline-block";
	} else {
		document.getElementById("p5sect2").style.display = "none";
	}
}

function removeAllPlayers() {
	document.getElementById("p1row").style.display = "none";
	document.getElementById("p2row").style.display = "none";
	document.getElementById("p3row").style.display = "none";
	document.getElementById("p4row").style.display = "none";
	document.getElementById("p5row").style.display = "none";
}

function updatePlayerCount() {
	if (playersAmount.value == 1) {
		removeAllPlayers();
		document.getElementById("p1row").style.display = "block";
	} else if (playersAmount.value == 2) {
		removeAllPlayers();
		document.getElementById("p1row").style.display = "block";
		document.getElementById("p2row").style.display = "block";
	} else if (playersAmount.value == 3) {
		removeAllPlayers();
		document.getElementById("p1row").style.display = "block";
		document.getElementById("p2row").style.display = "block";
		document.getElementById("p3row").style.display = "block";
	} else if (playersAmount.value == 4) {
		removeAllPlayers();
		document.getElementById("p1row").style.display = "block";
		document.getElementById("p2row").style.display = "block";
		document.getElementById("p3row").style.display = "block";
		document.getElementById("p4row").style.display = "block";
	} else if (playersAmount.value == 5) {
		removeAllPlayers();
		document.getElementById("p1row").style.display = "block";
		document.getElementById("p2row").style.display = "block";
		document.getElementById("p3row").style.display = "block";
		document.getElementById("p4row").style.display = "block";
		document.getElementById("p5row").style.display = "block";
	}
}
