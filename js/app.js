let width = 10;
let height = 10;

let area = width * height;
console.log('area', area);

let firstNumber = 11;
let secondNumber = 22;

const swapNumber = firstNumber; // if I use 'let' or 'const' i get the same result, are they both correct to use here?//
firstNumber = secondNumber;
secondNumber = swapNumber;

console.log('secondNumber', secondNumber);
console.log('firstNumber', firstNumber);

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

let currentAge = 30;
const retirenmentAgeInPoland = 67;
let yearsLeftToRetirenment = retirenmentAgeInPoland;

yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

console.log(yearsLeftToRetirenment);

const isPayingVAT = true;
const VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;

if (isPayingVAT) {
    taxToPay = monthlyIncome * VATRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

console.log('tax to pay: ' + taxToPay);

let isSunny = false;

if (isSunny) {
    console.log("don't forget your sunglasses!");
} else {
    console.log("you might need an umbrella.");
}


if (currentMonth < 4 || currentMonth === 12) {
    console.log("it's winter");
} else {
    console.log("it's not winter");
}

let personWeight = 66
let personHeight = 1.74

console.log("BMI", BMI)

if (BMI => 18.5 | BMI <= 25) {
    console.log("Healthy");
} else if (BMI < 18.5) {
    console.log("Unhealthy");
}

let votersAge = 27;

if (votersAge >= 18) {
    console.log("Can vote");
} else {
    console.log("Can't vote");
}

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

let radius = 5;

let circleArea = Math.PI * radius * radius;
console.log("The area of the circle is: " + circleArea);

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

let carSpeed = 70;
let speedLimit = 65;

if (carSpeed <= speedLimit) {
    console.log("Speed is fine");
} else {
    console.log("Speeding!");
}

let age = 21;
let isAdult = false;

if (age >= 18) {
    isAdult = true;
}


const driversAge = 21;
const hasDrivingLicense = true;

let isAdultDriver = driversAge >= 18;
let canDriveLegally = isAdultDriver && hasDrivingLicense;

if (canDriveLegally) {
    console.log("The user can drive legally.");
} else {
    console.log("The user cannot drive legally.");
}
