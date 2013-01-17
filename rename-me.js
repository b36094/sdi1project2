//Andrei Birsan
//1-16-2013
//SDI 1
//Story Title: "The Adventures of Mount Murrat." 

//initial variables----------------------------------------------
var groupNames = [" Andreies"," Porktornado"," TheUglyStick"," Chellindae"], 
	storyTitle = "The Adventures of Mount Murrat.",
	playerNum = 4;
	

	
// functions and procedure implementation------------------------

//"procedure" implementation
    function firstProcedure(num) {
	//output first line of story
	console.log("Welcome to the game:\""+storyTitle,"\"");	
	console.log("There are " + playerNum, "players in the game: " + groupNames,".");
	//checks to see if the parameter "a" is a number	
	if (!isNaN(a)) {
		console.log("The Mount Murrat has " + a, "level/s.");	
	}
	else {
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
	console.log("But while they were celebrating their victory,"+ boss);
	console.log("appeared from nowhere, furiously attacking the group.");
	
	while (totalPlayers > 1 ) {
		
		console.log(+ totalPlayers," player/s alive.");
		totalPlayers--;
				
	}
	
	return 	totalPlayers;
};


//"string function" implementation
var stringFunction = function (toDo,place) {
	
	//local variables
	var mainChar = "Chellindae ",
		firstPart = "hides and " + toDo,
		secondPart = " into her " + place,
		thirdPart = " for a resurrection scroll.";
	
	return mainChar + firstPart + secondPart + thirdPart;
};



//"array function" implementation
var arrayFunction = function (num,array){
	
	//local variables
	//use .length
	var lengthGroupNames = groupNames.length,
		deadPlayerNo = lengthGroupNames -1;
	
	for (var i = 0; i < lengthGroupNames -1; i++) {
		console.log("The number of dead player is: "+ deadPlayerNo);
		deadPlayerNo --;
		console.log("Chellindae resurrects " + groupNames[i]);	
	}
	//use .shift() to delete the first entry in the array 
	groupNames.shift();
	return groupNames;	
};
//---------------------------------------------------------------

//calls first procedure, 1 argument
var firstProcedureRt = firstProcedure(2);


//calls boolean function, 2 arguments --> boss1, boss2
var firstBossesRt = firstBosses("Anael","Grotesk");
console.log("It is "+ firstBossesRt, "that the first bosses are defeated.");

//calls number function, 1 argument --> playerNum
var numberFunctionRt = numberFunction(playerNum);
console.log("The number of players still alive is: "+ numberFunctionRt);

//calls string function, 2 arguments --> verb, location
var stringFunctionRt = stringFunction("looks","backpack");
console.log(stringFunctionRt);

//calls array function, 2 arguments -->numberFunctionRt, array 
var arrayFunctionRt = arrayFunction(numberFunctionRt,groupNames);
console.log("One member of the group got disconnected.");
console.log("The players left in the group are:");
console.log(""+ arrayFunctionRt);
