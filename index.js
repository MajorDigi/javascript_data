// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) === 50;
console.log(`Sum is 50: ${isSum50}`); // Log result of sum check
//--------------------------------------------------------------------------------------------------

// Check two: at least two odd numbers
function checkOddNum(n1, n2, n3, n4) {
    const oddCount = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2);
    const isTwoOdd = oddCount >= 2; // Check if at least two odd numbers
    // Log the odd count and result
    console.log(`Odd Count: ${oddCount}, isTwoOdd: ${isTwoOdd}`);
    return isTwoOdd; // Return if at least two odd numbers
}

// Call the function and store the result
const isTwoOdd = checkOddNum(n1, n2, n3, n4);
//--------------------------------------------------------------------------------------------------

// Check three: no number larger than 25
function checkIsOver(n1, n2, n3, n4) {
    const isOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
    // Log the result
    console.log(`Are all numbers less than or equal to 25: ${isOver25}`);
    return isOver25; // Return if any number is larger than 25
}

// Call the function to check and store the result
const isOver25 = checkIsOver(n1, n2, n3, n4);
// checkIsOver(10, 15, 20, 5);  // Will log false (none are over 25)
// checkIsOver(30, 15, 20, 5);  // Will log true (one number is over 25)
//-----------------------------------------------------------------------------------------------------------

// Check four: all unique numbers
function checkUniqueNum(n1, n2, n3, n4) {
    const isUnique = n1 !== n2 && n1 !== n3 && n1 !== n4 && n2 !== n3 && n2 !== n4 && n3 !== n4;
    // Log the result
    console.log(`All numbers are unique: ${isUnique}`);
    return isUnique; // Return if all numbers are unique
}

// Store results from checks
const isUnique = checkUniqueNum(n1, n2, n3, n4); // Check uniqueness
// checkUniqueNum(1, 2, 3, 4); // Will log true
// checkUniqueNum(1, 2, 2, 3); // Will log false
//--------------------------------------------------------------------------------------------------------

// Combine results into a single variable for validation
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(`Final validation result: ${isValid}`); // Log the final result

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
//-----------------------------------------------------------------------------------------------------------
//Check if all numbers are divisible by 5 

const t1 = 10;
const t2 = 15;
const t3 = 20;
const t4 = 5;

const NumberChecker ={
    DivByFive: (t1,t2,t3,t4) => {
        const numbers =[t1,t2,t3,t4];
        const allDivisibleByFive = numbers.every(num => num %5 ===0);
        console.log(`All numbers divisible by 5 : ${allDivisibleByFive}`);
        return allDivisibleByFive;
    },


// NumberChecker.DivByFive(t1, t2, t3, t4); // Should log "All numbers divisible by 5: true"

//------------------------------------------------------------------------------------
// Check if the first number is larger than the last number
isFirstLargerThanLast: (t1,t2,t3,t4) => {
    const isLarger =t1 > t4;
    console.log (`First number (${t1}) is larger than the last number (${t4})`);
    return isLarger
    }
};
// Example usage:
NumberChecker.DivByFive(t1, t2, t3, t4); // Should log "All numbers divisible by 5: true"
const firstIsLarger = NumberChecker.isFirstLargerThanLast(t1, t2, t3, t4); // Will log and cache the result
//-----------------------------------------------------------------------------------------------------------------------
/*Arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.*/

// Function to perform the arithmetic chain
function ArithmeticChain() {
    const t1 = 10, t2 = 15, t3 = 20, t4 = 5;
    return ((t2 - t1) * t3) % t4;
}

// Call the function with no arguments
const chainResult = ArithmeticChain(); // Works fine since no arguments are needed
console.log(`The result is: ${chainResult}`);

//---------------------------------------------------------------------------------------------------------
/*Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
in other logic comparisons. Rename the variable as appropriate.*/

/*Before:
// Check three: no number larger than 25
function checkIsOver(n1, n2, n3, n4) {
    const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
    // Log the result
    console.log(`Is any number over 25: ${isOver25}`);
    return isOver25; // Return if any number is larger than 25*/
/*Updated code: function checkIsOver(n1, n2, n3, n4) {
    const isOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
    // Log the result
    console.log(`Are all numbers less than or equal to 25: ${isOver25}`);
    return isOver25; // Return if any number is larger than 25
}*/

//----------------------------------------------------------------------------------------------------
/*Part 2: Practical Math
Let’s look at a more practical scenario.
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?*/

const g1 = 75;  // speed in mph
const g2 = 1500; // total distance in miles
const g3 = 3; // not used in this example
const g4 = 23; // miles per gallon
const pricePerGallon = 3; // cost per gallon in dollars
const fuelBudget = 175; // fuel budget in dollars

//At 75 miles per hour, you get 23 miles per gallon.
//How many gallons of fuel will you need for the entire trip?

function gallonsOfFuel() {
    const fuel = g2 / g4
    return fuel;
}
const numberOfGallons = gallonsOfFuel();
console.log(`The number of gallons of fuel equals: ${numberOfGallons}`);
//-----------------------------------------------------------------------------------------
//You have a fuel budget of $175
//Will your budget be enough to cover the fuel expense?
//The number of gallons of fuel equals: 65

function expense() {
    const gallonsNeeded = gallonsOfFuel();
    const totalCost = gallonsNeeded * pricePerGallon; // multiply by the price per gallon
    return totalCost;
}

// Calculate if the budget is enough
const totalCost = expense();
const isBudgetEnough = fuelBudget >= totalCost;

// Log the results
console.log(`You will need ${gallonsOfFuel()} gallons of fuel for the trip.`);
console.log(`The total fuel cost for the trip is: $${totalCost}`);
console.log(`Your fuel budget is $${fuelBudget}.`);
console.log(isBudgetEnough ? "Your budget is enough to cover the trip." : "Your budget is NOT enough to cover the trip.");
//---------------------------------------------------------------------------------------------------------------------
//How long will the trip take, in hours?

function calculateTime() {
    const time = g2 /g1;
    return time;
}
//Log results
const tripTime = calculateTime(); //Call the function
console.log(`It will take : ${tripTime} hours`);