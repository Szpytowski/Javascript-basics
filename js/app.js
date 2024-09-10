// const PURPLE_COLOR = '#000';
//
// let loggedInUserName = 'John';
// loggedInUserName = 'Bob';
// console.log(loggedInUserName);
//
// const websiteVisitorsNumber = 123;
// // come up with a variable name for the
// // name of the person
// // who is currently visiting
// // the website
//
// const legalDrinkingAge = 18123.12;
// const factAboutJohn = 'John is my friend';
//
// const isTheSidebarOpened = false;

// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 12
// }
// const name = user.firstName; // 'John'
//
// console.log(name);
//
// const fruits = ['Apple', 'Banana'];
//
// const myFavoriteFruit = fruits[1];
//
// console.log(myFavoriteFruit); // Apple
//
//
// let currentlyEatenVegetableName = 'Carrot';
// currentlyEatenVegetableName = null;


// const name;
// console.log(name); // undefined
//
// const isTheSidebarOpened = true;
//
// if (isTheSidebarOpened === true) {
//     console.log('The sidebar is opened');
// }
//
//
// const myAge = 17;
// const isAdult = myAge >= 18;
//
//
//
// if (isAdult) {
//     console.log('It is legal for me to drink');
// } else {
//     console.log('It is not legal for me to drink');
// }


/*
* Create two variables called width and height .
* Each of those variables should hold some number.
* Then, create a new variable that holds the area of a rectangle,
*  calculated based on the width and height variables. Print it to the console.
* */

/*
const value = 8 / 2; //
// * mnożenie
// / dzielenie
// + dodawanie
// - odejmowanie

const width = 17;
const height = 17;
const rectangleArea = width * height;

console.log(rectangleArea);

/*
* Create two variables called firstNumber and secondNumber.
* Assign each of them with a different number. Write a program that swaps both values.
* */

/*
let firstNumber = 12;
let secondNumber = 14;

const swapNumber = firstNumber;
firstNumber = secondNumber;
secondNumber = swapNumber;

console.log('secondNumber', secondNumber);
console.log('firstNumber', firstNumber);
*/

// 1 //
let width = 10;
let height = 10;

let area = width*height;
console.log('area', area);

// 2 //
let firstNumber= 11;
let secondNumber= 22;

const swapNumber = firstNumber; // if I use 'let' or 'const' i get the same result, are they both correct to use here?//
firstNumber = secondNumber;
secondNumber = swapNumber;

console.log('secondNumber', secondNumber);
console.log('firstNumber', firstNumber);

// 3 //
let physicsGrade = 3.8;
let mathGrade = 4.5;
let englishGrade = 4.7;

let avarageGrade = (physicsGrade + mathGrade + englishGrade) / 3;
const passedGrade = avarageGrade >= 4;
console.log('Your avarage grade is:' + avarageGrade);

if (passedGrade) {
    console.log('Good Job!');
} else {
    console.log('Try harder!');
}

// 4 //
let currentAge = 30;
const retirenmentAgeInPoland = 67;
let yearsLeftToRetirenment = retirenmentAgeInPoland;

yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

console.log(yearsLeftToRetirenment);

// 5 //
const isPayingVAT = true;
const VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;
let taxToPay = 0;

if (isPayingVAT) {
    taxToPay = monthlyIncome * VATRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

console.log('tax to pay: ' + taxToPay);

// 6 //
let isSunny = false;

if (isSunny) {
    console.log("don't forget your sunglasses!");
} else {
    console.log("you might need an umbrella.");
}

// 7 //
let currentMonth = 9

if (currentMonth <4 || currentMonth === 12) {
    console.log("it's winter");
} else {
    console.log("it's not winter");
}

// 8 //
let personWeight = 66
let personHeight  = 1.74

let BMI = personWeight / (personHeight * personHeight)
console.log("BMI", BMI)

if (BMI =>18.5 | BMI <= 25) {
    console.log("Healthy");
} else if (BMI < 18.5) {
    console.log("Unhealthy");
}

// 9 //
let votersAge = 27;

if (votersAge >= 18) {
    console.log("Can vote");
} else {
    console.log("Can't vote");
}

// 10 //
let currentColor = "yellow";

if (currentColor === "red") {
    console.log("Stop");
} else if (currentColor === "yellow") {
    console.log("Speed up");
} else if (currentColor === "green") {
    console.log("Go");
} else {
    console.log("Invalid color");
}

// 11 //
let month = 9;

if (month === 1) {
    console.log("Jan");
} else if (month === 2) {
    console.log("Feb");
} else if (month === 3) {
    console.log("Mar");
} else if (month === 4) {
    console.log("Apr");
} else if (month === 5) {
    console.log("May");
} else if (month === 6) {
    console.log("Jun");
} else if (month === 7) {
    console.log("Jul");
} else if (month === 8) {
    console.log("Aug");
} else if (month === 9) {
    console.log("Sept");
} else if (month === 10) {
    console.log("Oct");
} else if (month === 11) {
    console.log("Nov");
} else if (month === 12) {
    console.log("Dec");
}

// 12 //
let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by 3 and 5");
} else if (number % 3 === 0) {
    console.log("Divisible by 3");
} else if (number % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 3 or 5");
}

// 13 //
let radius = 5;

let circleArea = Math.PI * radius * radius;
console.log("The area of the circle is: " + circleArea);

// 14 //
let studentScore = 95;

if (studentScore >= 90) {
    grade = 'A';
} else if (studentScore >= 80) {
    grade = 'B';
} else if (studentScore >= 70) {
    grade = 'C';
} else if (studentScore >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log("The student's grade is: " + grade);

// 15 //
let carSpeed = 70;
let speedLimit = 65;

if (carSpeed <= speedLimit) {
    console.log("Speed is fine");
} else {
    console.log("Speeding!");
}

// 16 //
let age = 21;
let isAdult= false;

if(age >= 18) {
    isAdult = true;
}

alert(isAdult)

// 17 //
const driversAge = 21;
const hasDrivingLicense = true;

let isAdultDriver = driversAge >= 18;
let canDriveLegally = isAdultDriver && hasDrivingLicense;

if (canDriveLegally) {
    console.log("The user can drive legally.");
} else {
    console.log("The user cannot drive legally.");
}
