          // chapter "2"
   //Practice exercise 2.1
     let stringVariable = "Hello, World"; // String
     let numberVariable = 62; // Number
     let booleanVariable = true; // Boolean
     let arrayVariable = ["maliha", "waleed", "22"]; // Array
     let objectVariable = { key: "75" }; // Object
     let undefinedVariable; // Undefined
     let nullVariable = null; // Null
     
     console.log(typeof stringVariable); // Output: string
     console.log(typeof numberVariable); // Output: number
     console.log(typeof booleanVariable); // Output: boolean
     console.log(typeof arrayVariable); // Output: object
     console.log(typeof objectVariable); // Output: object
     console.log(typeof undefinedVariable); // Output: undefined
     console.log(typeof nullVariable); // Output: object

          //practice exercise 2.2
let Name = "My name is Syeda Maliha,";
let age = "I am 20 year old,";
let canCodeJavaScript = "and I can code JavaScribe";

document.write(Name + "" + age + "" + canCodeJavaScript);



        //practice exercise 2.3
 let a = +prompt("Enter your value", "Your value a");  
 let b = +prompt("Enter yuor value", "your value b");
 let c = a**2 + b**2;   
 console.log(c) 
 console.log(Math.sqrt(c))  


      //practice exercise 2.4
let p = 2;
let q = 4;
let r = 6;
let s = 8;

p += p;
console.log(p)

p /= r;
console.log(p)

r %= q;
console.log(r)

      //Chapter project
  //Miles-to-kilometers converter
  let x = +prompt("enter your miles value", "miles value is");
  let y = x * 1.60934 + "kilometer";
  console.log("miles convert into kilometer", y)

      //BMI calculator
let i = +prompt("put your height value in inche");
let j = +prompt("put your width value in pounds");
let k = i * 2.54 + "cm";
let l = j / 2.2046 + "kilo";
console.log("height",k);
console.log("width",l);