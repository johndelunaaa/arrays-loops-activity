/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies - DONE
 * 2. Write a loop that logs out each hobby - DONE
 * 3. After the loop, log out the total number of
 *    hobbies - DONE
 */

let hobbies = ['Skateboarding', 'Snowboarding', 'Traveling', 'Biking'];
console.log('hobbies', hobbies);

hobbies.forEach(hobby => {
     console.log('hobbies', hobby);
});

console.log ('Total hobbies: ' + hobbies.length);0


// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3



/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

const colors = ['black', 'teal', 'baby blue', 'lime green'];
console.log(colors);

const tealCount = colors.filter(color => color === 'teal').length;

console.log('Number of times that teal was found:', tealCount);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times



/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

const numbers = [1, 3, 22, 36, 43, 90];
console.log(numbers);

const oddNumbers = [];
const evenNumbers = [];

console.log('Odd Numbers', oddNumbers);
console.log('Even Numbers', evenNumbers);

for (const number of numbers) {
     if (number % 2 === 0) {
          evenNumbers.push(number);
     } else {
          oddNumbers.push(number);
     }
}





// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2



/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

const boolArray = [true, true, true, false, true, false];
console.log(boolArray);

let toggledArray = [];

for (const value of boolArray) {
     toggledArray.push(!value);
}

console.log('Toggled', toggledArray);



// Example output
// true, false, true, true
// Toggled false, true, false, false









/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */


// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
