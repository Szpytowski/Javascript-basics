// const message = 'alert was called';
// alert(message);
//
// console.log('Hello world!');
//
// /*
//  * f(x, y) = 2x + 4y
//  * f(2, 2) = 2*2 + 4*2 = 12
//  */
// console.log('random', Math.random());
//
//
// if (confirm('Do you want to open YouTube?')) {
//     open('https://youtube.com');
// }

// if (confirm('Open MDN?')) {
//     open('https://developer.mozilla.org/en-US/');
// }


// const name = prompt('What is your name?', 'John');
//
// alert('The user is called ' + name);

/*
* call the prompt function and ask the user how much is 5 times 5
if they provided the correct answer, praise them
provide 0 as the default value in the second argument
keep in mind that the prompt function returns a string
* */


// const mathEquationAnswer = prompt('how much is 5 times 5', '0');
// const isCorrectAnswer = mathEquationAnswer === '25';
//
// if (isCorrectAnswer) {
//     alert('Well done');
// }
//
// const wantsToKnowMoreAboutIf = confirm(
//     'Do you want to know more about if...else statements?'
// );
// if (wantsToKnowMoreAboutIf) {
//     openGoogle('if...else statements');
// }
//
// const wantsToKnowMoreAboutFunctions = confirm(
//     'Do you want to know more about functions?'
// );
// if (wantsToKnowMoreAboutFunctions) {
//     openGoogle('js functions');
// }
//
// function openGoogle(searchQuery) {
//     open('https://google.com/search?q=' + searchQuery);
// }

// function askQuestion(question, correctAnswer) {
//     const answer = prompt(question);
//     if (answer === correctAnswer) {
//         alert('This is the correct answer');
//     } else {
//         alert('This is not the right answer');
//     }
// }
//
// askQuestion('What is the capital of France?', 'Paris');

/*
* create the greet function that accepts the name of the user as an argument
it should use the alert function to greet the user using their name
* */
//
// function greet(userName) {
//     alert('Hello ' + userName);
// }
//
// greet('John');


/*
* modify your greet function to accept two arguments:
the first name
and the last name
and combine them when calling the alert function in the body of your greet function
* */

// function greet(firstName, lastName) {
//     alert('Hello ' + firstName + ' ' + lastName);
// }
//
// const greeting = greet('John ', 'Smith');
//
// console.log(greeting);

// function getAverageValue(firstNumber, secondNumber) {
//     // const sum = firstNumber + secondNumber;
//     // return sum / 2;
//     return (firstNumber + secondNumber) / 2;
// }
//
// const averageValue = getAverageValue(2, 4);
// console.log(averageValue); // 3

/*
create the getTotalMealCost function that receives two arguments:
a number representing the base cost of the meal
a number that represents the tip percentage
*
* */
// const totalCost = getTotalMealCost(200, 10);
// console.log(totalCost); // 220
//
// function getTotalMealCost(mealCost, tipPercentage) {
//     return mealCost + mealCost * (tipPercentage / 100);
//     console.log('done');
// }
//
// function openGoogle(searchQuery) {
//     if (!searchQuery) {
//         console.error('The search query has to be provided');
//         return;
//     }
//     open('https://google.com/search?q=' + searchQuery);
// }

// function getAgeCategory(age) {
//     if (age < 13) {
//         return 'child';
//     } else if (age < 18) {
//         return 'teenager';
//     } else if (age < 60) {
//         return 'adult';
//     }
//     return 'senior';
// }

// function getSummedNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }
// console.log(getSummedNumbers(15, 10)); // 25


/*
*
* let's write a function that returns the total cost of a custom pizza when delivered
it should receive three arguments:
the size of the pizza - small, medium, or large
the number of toppings
the distance in kilometers between the customer and the restaurant
while the whole problem might be more significant, we can break it into smaller ones:
calculating the base cost of the pizza based on the size
calculating the cost of the toppings based on the number of them and the price per a single topping
calculating the delivery fee based on the distances
in this case, it makes sense to create separate functions where each one deals with a single problem
*
*
* */

function getCustomPizzaCost(
    size,
    numberOfToppings,
    distanceInKilometers
) {
    const pricePerTopping = 1.5;
    let orderCost = 0;

    if (size === 'small') {
        orderCost = 5;
    } else if (size === 'medium') {
        orderCost = 7;
    } else {
        orderCost = 10;
    }

    orderCost += numberOfToppings * pricePerTopping;

    if (distanceInKilometers <= 5) {
        orderCost += 2;
    } else {
        orderCost += 5;
    }


    return orderCost;
}


function getBaseCostBasedOnSize(size) {
    if (size === 'small') {
        return 5;
    }
    if (size === 'medium') {
        return 7;
    }
    return 10;
}

function getTotalToppingsCost(numberOfToppings) {
    const pricePerTopping = 1.5;
    return numberOfToppings * pricePerTopping;
}

function getDeliveryFee(distanceInKilometers) {
    if (distanceInKilometers <= 5) {
        return 2;
    }
    return 5;
}

function getCustomPizzaCost(
    size,
    numberOfToppings,
    distanceInKilometers
) {
    // 1. Calculate the base cost based on the size of the pizza
    const baseCost = getBaseCostBasedOnSize(size);

    // 2. Get the cost of all toppings
    const toppingsCost = getTotalToppingsCost(numberOfToppings);

    // 3. Calculate the delivery fee based on the distance
    const deliveryFee = getDeliveryFee(distanceInKilometers);

    // 4. Sum all parts of the cost
    return baseCost + toppingsCost + deliveryFee;
}

console.log(getCustomPizzaCost('medium', 5, 8)); // 19.5
