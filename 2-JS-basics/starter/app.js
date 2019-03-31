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
	teamMaryWins, teamJohnWins;

	/* variable assignment
*/

// Mike's team scores
teamMikeGame1 = 90;
teamMikeGame2 = 94;
teamMikeGame3 = 90;
teamMikeTotal = teamMikeGame1 + teamMikeGame2 + teamMikeGame3;
teamMikeAverage = teamMikeTotal / 3;

// John's team scores
teamJohnGame1 = 89;
teamJohnGame2 = 120;
teamJohnGame3 = 103;
teamJohnTotal = teamJohnGame1 + teamJohnGame2 + teamJohnGame3;
teamJohnAverage = teamJohnTotal / 3;

// Mary's team scores
teamMaryGame1 = 89;
teamMaryGame2 = 120;
teamMaryGame3 = 103;
teamMaryTotal = teamMaryGame1 + teamMaryGame2 + teamMaryGame3;
teamMaryAverage = teamMaryTotal / 3;

// winner condition
if (teamJohnAverage > teamMikeAverage){
	teamJohnWins = true;
} else {
	teamJohnMike = false;
}

// winner alert
if (teamJohnWins) {
	alert('John\'s team won with an average score of ' + teamJohnAverage);
} else {
	alert('Mike\'s team won with an average score of ' + teamMikeAverage);
}