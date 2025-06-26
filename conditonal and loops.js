// Q1. What are conditional statements? Explain conditional statements with syntax and examples.
console.log("ans 1 . conditional statements are used to make desisions in code based on certain conditions and it exutes differnnt code bocks based on the constions provided if it is true it exutes and false it does not exectue the code block");

// Q2. Write a program that grades students based on their marks^
// 8 If greater than 90 then A GradE
// 8 If between 70 and 90 then a B gradE
// 8 If between 50 and 70 then a C gradE
// 8 Below 50 then an F grade
let marks = 80;
if(marks> 90){
    console.log("A grade");
}
else if(marks >=70 && marks <= 90){
    console.log("B grade");
}
else if(marks >=50 && marks < 70){
    console.log("C grade");
}
else{
    console.log("F grade");
}

// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and
// examples.

console.log("ans 3 . loops are used to exutes block of codes multiple times without writing the same code again and again and it is easy and after using loops and repetion of code is avoided by loops there are 3 types of loops in js for loop, while loop and do while loop");

// Q4. Generate numbers between any 2 given numbers.

// Ex
// 8 const num1 = 10
// 8 const num2 = 25;

// Output: 11, 12, 13, …., 25

const num1 = 10;
const num2 = 25;
for( i = num1+1; i <= num2; i++) {
    console.log(i);
}

// Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.


// Ascending order
let a = 1;
while ( a <= 25)
{
    console.log(a);
    a++;
}
// Descending order
let b = 25;
while( b >=1)
{
    console.log(b);
    b--;
}