//Andrei Birsan
//1-16-2013
//SDI 1
//Story Title: "The adventures of mount Murrat." 

//initial variables----------------------------------------------
var groupNames = ["Andreies"," Porktornado"," Chellindae"," TheUglyStick"], 
	storyTitle = "The Adventures of Mount Murrat.",
	playerNum = 4;
	

	
// functions and procedure implementation------------------------

//"procedure" implementation
    function firstProcedure(a) {
	//output first line of story
	console.log("Welcome to the game:\""+storyTitle,"\"");	
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
		console.log("The players entered the 'Chamber of Fire', and defeated 'Lord Anael',");
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
	//local vars
	var boss = "the drakonian beast",
		totalPlayers = playerNum;
	console.log("But while they were celebrating their victory,"+boss);
	console.log("appeared from nowhere, furiously attacking the group.");
	
	while (totalPlayers > 1 ) {
		
		console.log(+totalPlayers," player/s alive.");
		totalPlayers--;
				
	}
	console.log("Chellindae is the only player left alive.");	
	return 	totalPlayers;
};


//"string function" implementation
var stringFunction = function (a,b) {
	
	//local variables
	var mainChar = "Chellindae ",
		firstPart = "hides and " +a,
		secondPart = " into her " + b,
		thirdPart = " for a resurrection scroll.";
	
	return mainChar + firstPart + secondPart + thirdPart;
};
//---------------------------------------------------------------

//calls first procedure, 1 argument
var firstProcedureRt = firstProcedure(2);


//calls boolean function, 2 arguments and catches the return value into the var. "FirstBossesRt"
var firstBossesRt = firstBosses("Anael","Grotesk");


//calls number function, 1 argument --> playerNum and catches the number of players left alive
var numberFunctionRt = numberFunction(playerNum);
console.log(numberFunctionRt);

//calls string function, 2 arguments --> verb and location and catches the returned string
var stringFunctionRt = stringFunction("looks","backpack");
console.log(stringFunctionRt);
