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
    const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
    // Log the result
    console.log(`Is any number over 25: ${isOver25}`);
    return isOver25; // Return if any number is larger than 25
}

// Call the function to check and store the result
const isOver25 = checkIsOver(n1, n2, n3, n4);
checkIsOver(10, 15, 20, 5);  // Will log false (none are over 25)
checkIsOver(30, 15, 20, 5);  // Will log true (one number is over 25)
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
checkUniqueNum(1, 2, 3, 4); // Will log true
checkUniqueNum(1, 2, 2, 3); // Will log false
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