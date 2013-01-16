//Andrei Birsan
//1-16-2013
//SDI 1
//Story Title: "The adventures of mount Murrat." 

//initial variables----------------------------------------------
var groupNames = ["Andrei"," Zach"," Chrissy"," Jonathan"], 
	storyTitle = "The Adventures of Mount Murrat.",
	playerNum = 4;
	

	
// functions and procedure implementation------------------------

//"procedure" implementation
    function firstProcedure(a) {
	//output first line of story
	console.log("Welcome to "+storyTitle);	
	console.log("There are " +playerNum, "players in the game: " +groupNames,".");
	//checks to see if the parameter "a" is a number	
	if (!isNaN(a)) {
		console.log("The Mount Murrat has " +a, "level/s.");	
	}
	else if (isNaN(a)) {
		console.log("The Mount Murrat has no level/s. Please specify the level number.");	
	}
};


// "boolean function" implementation
var firstBosses = function (boss1,boss2){
	if (boss1 === "Anael" && boss2 ==="Grotesk") {
		console.log("They entered the 'Chamber of Fire', and defeated 'Lord Anael',");
		console.log("and his servant 'Grotesk'.");
		return true;	
	}
	else {
		console.log("They entered the 'Chamber of Water'. A dangerous path lays before them.");
		return false;	
	}		
};


//"number function" implementation
var numberFunction = function (num) {
	
		
		
};

//---------------------------------------------------------------
//calls first procedure, 1 argument
firstProcedure(1);

//calls boolean function, 2 arguments and catches the return value into the var. "FirstBossesRt"
var firstBossesRt = firstBosses("Anael","Grotesk");
