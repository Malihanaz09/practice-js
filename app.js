alert("welcome to my website");

//  var a = 5;
//  var b = 10;
//  var c = a+b;
// alert(c);
   
console.log("Hello World!")

// var p = 20;
// var q = 10; 
// var r = (p-q);
// console.log(r);

// var x = "syeda";
// var y = "maliha";
// var z = x+y;
// alert(z);


var x = "syeda";
var y = 20;
var z = x+y;
console.log(z);

// var x = 20;
// var y = "10";
// var z = x/y;
// alert(z);

// var a = 6;
// var b = 8;
// var c = 10;
// var d = a+c*b-c;
// alert(d);

// var a = 5;
// var b = a++ + ++a - a + a++ - ++a + a; 
//      // 5     12     7   12    7    12
// alert(b);

var a = +prompt("Enter yuor email", "your email is");

// var x = "enter your value";
// var y = "your value is";
// var z = +prompt(x,y);
// var a = z + 10
// document.write("the output is" + ""+ a);

// var age = +prompt("enter your age");
// var gender = prompt("enter your genter");
// if (age > 18 && gender == "male") {
//      alert("you are allowed to ride")
// }
// else{
//      alert("you are not allowed")
// }


// var age = +prompt("enter your age");
// var gender = prompt("enter you gender");
// var city = prompt("enter your city");
// if (age > 20 || gender == "male" && city === "karachi") {
//      alert("you are allowed")
// }
// else{
//      alert("you are not allowed")
// }

// var a = 10;
// var b = 5;
// if (a !==12) {
//      document.write("correct")
// }
// else{
//      document.write("incorrect")  
// }

// var percent = +prompt("Enter your percent");
// if (percent >= 80 &&  percent <= 100) {
//      alert("A+")
// }
// else if (percent >= 70 &&  percent <= 80){
//      alert("A")
// }
// else if (percent >= 60 &&  percent <= 70){
//      alert("B")
// }
// else if (percent >= 50 &&  percent <= 60){
//      alert("C")
// }
// else if (percent >= 40 &&  percent <= 50){
//      alert("D")
// }
// else if (percent >= 30 &&  percent <= 40){
//      alert("E")
// }
// else if (percent >= 0 &&  percent <= 33){
//      alert("F")
// }
// else{
//      alert("you didnot write correct percentage")
// }

var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain"]

console.log(students[3])

var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain"]
students.pop()

console.log(students)

var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain"]
students.push("yusra" , "manahil")

console.log(students)

var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain"]
students.shift()

console.log(students)

var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain"]
students.unshift("ali")

console.log(students)

var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain" , "yusra" , "manahil"]
students.splice(1 , 2 , "bilal")

console.log(students)


var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain" , "yusra" , "manahil"]
students.splice(1 , 4)

console.log(students)

var students = ["maliha", "waleed", "ahmar", "mahnoor", "zain" , "yusra" , "manahil"]
var copyStudents = students.slice(1 , 6)

console.log(students)
console.log(copyStudents)

// for(var i = 0; i < 2; i++){
//     alert("Hello dear Maliha here")
// }
// document.write("2" + "x" + "1" + "=" + 2*1 + "<br>")
// document.write("2" + "x" + "2" + "=" + 2*2 + "<br>")
// document.write("2" + "x" + "3" + "=" + 2*3 + "<br>")
 
for (var i = 1; i <= 10; i++)
document.write("2" + "x" + i + "=" + 2*i + "<br>")
 

var names = ["maliha", "waleed", "ahmar"];

for(var i = 0; i < names.length; i++){
    console.log(names[i])
}
















