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
