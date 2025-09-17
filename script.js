/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/

// TODO-1: OBJECT with GETTERS & SETTERS

const student = {
  firstName: "John",
  lastName: "Doe",
  _gpa: 3.5, // private-like variable

  // Getter for full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Getter for GPA
  get gpa() {
    return this._gpa;
  },

  // Setter for GPA with validation
  set gpa(newGpa) {
    if (newGpa >= 0.0 && newGpa <= 4.0) {
      this._gpa = newGpa;
    } else {
      console.log("Invalid GPA. Must be between 0.0 and 4.0.");
    }
  }
};


console.log("Student Full Name:", student.fullName);
console.log("Student GPA:", student.gpa);

student.gpa = 3.9;  // valid update
console.log("Updated GPA:", student.gpa);

student.gpa = 5.0;

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courses = {
  "CS101": "Intro to Programming",
  "CS201": "Data Structures",
  "CS301": "Algorithms",
  "CS401": "Databases"
};

console.log("Course Codes and Titles:");
for (let key in courses) {
  console.log("Course code",key, "→ Titles:",courses[key]);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
let MyString = "Hello World";

console.log("String:", MyString);
console.log("Length of string:", MyString.length);

for (let i = 0; i < MyString.length; i++) {
  console.log("Character at index", i, ":", MyString.charAt(i));
}

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

let currentDate = new Date();

let Day = currentDate.getDate();
let Month = currentDate.getMonth() + 1; 
let Year= currentDate.getFullYear();
 
console.log("Today is", Day+ "/", Month+ "/", Year);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/

let num = [55, 62, 11, 2, 7, 46, 31, 9, 13, 6];
let minVal = Math.min(...num);
let maxVal = Math.max(...num);

console.log("The Numbers: ", num);
console.log("Min: ", minVal);
console.log("Max: ", maxVal);


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

function getMax (arr) {
   try {
      if (arr.length === 0) {
      throw new Erorr ("Array is empty");
   }
   return Math.max (...arr);
   }catch (e){
      console.error("Error cuaght", e.message);
   }finally {
      console.log ("Done");
   }
}

console.log("The Max number is:", getMax([4, 5, 6, 2, 15]));
console.log("The Max number is:", getMax([]));

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const  words = ["ban", "babble", "make", "flab"];

const pattern = /ab/;

words.forEach (word => {
   if (pattern.test(word)) {
      console.log (`${word} matches!`)
   }
})
// End of Advance JavaScript Lab — good luck!
