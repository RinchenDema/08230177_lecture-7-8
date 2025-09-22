// 1. if-else statement
const temp = 25; // You can change this value to test different outputs
if (temp > 30) {
   console.log("It's hot.");
} else if (temp >= 20) {
   console.log("It's warm.");
} else {
   console.log("It's cold.");
}

// 2. switch statement
const day = "Monday"; // You can change this value to test different outputs
switch (day) {
   case "Monday":
       console.log("Start of the week.");
       break;
   case "Friday":
       console.log("End of the workweek.");
       break;
   default:
       console.log("It's a regular day.");
       break; // It's good practice to have a break here too
}

// 3. Ternary operator
let a = 10;
console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5");

// 4. for loop
for (let i = 1; i <= 3; i++) {
   console.log("Count:", i);
}

// 5. while loop
let i = 0;
while (i < 3) {
   console.log("Number:", i);
   i++;
}

// 6. do-while loop
let j = 0;
do {
   console.log("Iteration:", j);
   j++;
} while (j < 3);

// 7. for...in loop (for objects)
const obj = { name: "Ashish", age: 25 };
for (let key in obj) {
   console.log(key, ":", obj[key]);
}

// 8. for...of loop (for arrays)
const arr = [1, 2, 3, 4, 5];
for (let val of arr) {
   console.log(val);
}