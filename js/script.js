// Creating variables and selecting elements
var red;
var green;
var blue;
var rgbColor;
var rndBox;
var winColor;
var boxesList = document.querySelectorAll(".box");
var buttonsList = document.querySelectorAll("button");
var p = document.querySelector("p");
var lowerRow = document.querySelector(".lower-row");
var header = document.querySelector("header");


start();

// Adding event listeners to buttons
buttonsList[0].addEventListener("click", refresh);

buttonsList[1].addEventListener("click", function() {
	refresh("none");
	this.classList.add("active");
	buttonsList[2].classList.remove("active");
});

buttonsList[2].addEventListener("click", function() {
	refresh("flex");
	this.classList.add("active");
	buttonsList[1].classList.remove("active");
});

// Adding event listeners to boxes and chekching for hits and misses
for (var i = 0; i<boxesList.length; i++) {
	boxesList[i].addEventListener("click", function() {
		if(winColor === this.style.background) {
			for (var i = 0; i<boxesList.length; i++) {
				boxesList[i].style.background = winColor;
			};
			p.textContent = "Correct!";
			header.style.background = winColor;
			buttonsList[0].textContent = "Play again?";		
		} else {
			this.style.background = "black";
			p.textContent = "Try again!";
		}
	});
};

// Assigns colors to all boxes and randomly chooses one box's color
function start() {
	// Loop through the node list of boxes and assign a randomly generated color to each box
	for(var i = 0; i<6; i++) {
		red = Math.floor(Math.random()*256);
		green = Math.floor(Math.random()*256);
		blue = Math.floor(Math.random()*256);
		rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
		boxesList[i].style.background = rgbColor;
	};
	// Generate a random number from 0 to 5 or from 0 to 2 
	if(lowerRow.style.display !== "none") {
		rndBox = Math.floor(Math.random()*6);	
	} else {
		rndBox = Math.floor(Math.random()*3);
	}
	// Pick a random box (selected by our random number), extract its background color and change the text in h1 
	winColor = boxesList[rndBox].style.background
	document.querySelector(".colorRGB").textContent = winColor;
}

// Cleans the wrong/correct text, resets the header bg-color and reset button text, and reboots the functionality
function refresh(hide) {
	p.textContent = "";
	buttonsList[0].textContent = "New Colors";
	header.style.background = "#4682B4";
	// The hide parameter tells if the function is called by hard or easy mode, or by "new colors"
	lowerRow.style.display = hide;
	start();
}

