/*
let firstName = 'wisest';
let lastName = 'Chijioke';
let age = '32';
let nameAge = firstName + " " + age;
alert(nameAge);
*/

// Math operators
/*
let birthYear,currentYear,age; 
currentYear =parseInt(prompt('what year are we in?'));
age = parseInt(prompt('how old are you?'));
birthYear = currentYear - age;
alert('your year of birth is ' + birthYear);
*/

//compare BMI
/*
let heightGloria, heightChijioke, weightGloria, weightChijioke,
bmiGloria, bmiChijioke, isBMIGloriaGreater;

heightGloria = 1.76;
heightChijioke = 1.86;
weightChijioke = 55;
weightGloria = 70;
bmiGloria = weightGloria/(heightGloria * heightGloria);
bmiChijioke = weightChijioke / (heightChijioke * heightChijioke);

isBMIGloriaGreater = bmiGloria > bmiChijioke;

alert("Is Gloria's BMI greater than Chijioke's? " + isBMIGloriaGreater);
*/

/*
let firstName = 'Wisest';
let age = 19;
let drink;

if(age < 13) {
	alert(firstName + ' is a boy');
} else if (age > 12 && age < 20) {
	alert(firstName + ' is a teenager');
} else {
	alert(firstName + ' is an adult');
}

drink = age < 18 ? 'juice' : 'beer';
alert(drink);
*/

// variable declarations

let teamMike, teamJohn, teamMary,
	teamMikeGame1, teamMikeGame2, teamMikeGame3,
	teamJohnGame1, teamJohnGame2, teamJohnGame3,
	teamMaryGame1, teamMaryGame2, teamMaryGame3,
	teamMikeTotal, teamJohnTotal, teamMaryTotal,
	teamMikeAverage, teamJohnAverage, teamMaryAverage,
	teamMaryWins, teamMikeWins, teamJohnWins,
	teamsMikeMaryDraw, teamsMikeJohnDraw, teamsJohnMaryDraw;

	/* variable assignment
*/

// Mike's team scores
teamMikeGame1 = 90;
teamMikeGame2 = 120;
teamMikeGame3 = 150;
teamMikeTotal = teamMikeGame1 + teamMikeGame2 + teamMikeGame3;
teamMikeAverage = teamMikeTotal / 3;

// John's team scores
teamJohnGame1 = 120;
teamJohnGame2 = 90;
teamJohnGame3 = 150;
teamJohnTotal = teamJohnGame1 + teamJohnGame2 + teamJohnGame3;
teamJohnAverage = teamJohnTotal / 3;

// Mary's team scores
teamMaryGame1 = 50;
teamMaryGame2 = 20;
teamMaryGame3 = 50;
teamMaryTotal = teamMaryGame1 + teamMaryGame2 + teamMaryGame3;
teamMaryAverage = teamMaryTotal / 3;

// winner condition
if(teamMikeAverage === teamMaryAverage) {
	teamsMikeMaryDraw = true;
} else if (teamMikeAverage === teamJohnAverage) {
	teamsMikeJohnDraw = true;
} else if (teamMaryAverage === teamJohnAverage) {
	teamsJohnMaryDraw = true;
} else if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage){
	teamJohnWins = true;
} else if (teamMaryAverage > teamMikeAverage && teamMaryAverage > teamJohnAverage) {
	teamMaryWins = true;
}
else {
	teamMikeWins = true;
}

// winner alert
if (teamsMikeMaryDraw && teamMikeAverage > teamJohnAverage){
	alert("Replay for Mary and Mike as both teams have a tie");
} else if (teamsMikeJohnDraw && teamMikeAverage > teamMaryAverage) {
	alert("Replay for John and Mike as both teams have a tie");
} else if (teamsJohnMaryDraw && teamMikeAverage < teamJohnAverage) {
	alert("Replay for Mary and John as both teams have a tie");
} else if (teamJohnWins) {
	alert('John\'s team won with an average score of ' + teamJohnAverage);
} else if (teamMaryWins) {
	alert('Mary\'s team won with an average score of ' + teamJohnAverage);
} else {
	alert('Mike\'s team won with an average score of ' + teamMikeAverage);
}