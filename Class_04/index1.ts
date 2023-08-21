
let ans =prompt("where does you live?");
let answer = "Sindhri";
if (ans == answer) {
    alert("correct!");
} else if (ans == "Sindh") {
    alert("close")
}  else {
    alert("wrong")
}

let naam =prompt("Username?")
let ansr = "farhan_aziz460";
if (naam==answer) {
alert ("correct!")
}
else if (naam == "random") {
alert ("close")
}  else {
    alert("wrong")
}

let password =prompt("Enter your password")
    let mesge = "123445";
    if (password==mesge) {
    alert ("correct!")
    }
  else if (password=="5689") {
    alert ("close")
  } else {
    alert ("wrong")
  }
 let id =prompt("Enter your email address")
let type = "mraziz@gmail.com";
if (id == type){
alert ("correct!")
}
 else if (id == "aziz"){
 alert ("close")
 } else {
    alert ("wrong!")
 }

//Nested if, else /Example
//Ticketing system
let country =prompt("where do you live?");
//Number() function is used to convert the string to number
let age =Number(prompt("what  is your age?"));
//if codition is false then else come in browser
if (country === "Pakistan") {
if (age >= 18) {
    console.log("Here is your ticket");
} else {
    console.error("Age restrictionse")
}
} else {
    console.log("Invalid country")
}