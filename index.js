// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) === 50;

if (isSum50) {
    console.log(true);
  } else {
    console.log(false);
  }

//--------------------------------------------------------------------------------------------------

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.

//Added function for local scope
function checkOddNum(n1,n2,n3,n4) {
const oddCount = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
 // Log the odd count for debugging
 console.log(`Odd Count: ${oddCount}`);
const isTwoOdd = oddCount >= 2;
   // Log the result of the check
   console.log(`isTwoOdd: ${isTwoOdd}`);

if (isTwoOdd) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkOddNum(n1,n2,n3.n4)
//--------------------------------------------------------------------------------------------------

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//Added function
function checkIsOver(n1,n2,n3,n4) {
// Check if any number is larger than 25 using or (||) condition
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
  // Use the correct condition
  if (isOver25) {
    console.log(true);  // If any number is larger than 25
  } else {
    console.log(false);  // If no numbers are larger than 25
  }
}

// Call the function to check
checkIsOver(n1,n2,n3,n4)
checkIsOver(10, 15, 20, 5);  // Will log false (none are over 25)
checkIsOver(30, 15, 20, 5);  // Will log true (one number is over 25)
//-----------------------------------------------------------------------------------------------------------

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
//Added function 
function checkUniqueNum(n1,n2,n3,n4) {
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
if (isUnique) {
    console.log(true);
} else {
    console.log(false)
 }
}
checkUniqueNum(n1,n2,n3,n4);
checkUniqueNum(1,2,3,4) //Will console.log true
checkUniqueNum(1,2,2,3) //Will console.log false
//--------------------------------------------------------------------------------------------------------

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);