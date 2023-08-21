//Functions
function nameproperty() {
    console.log("Karachi hai jaani");
}
//nameproperty ()
function message() {
    console.log("Karachi ao kabhi");
}
message();
//simple function use
function mylove() {
    console.log("aaj ka mosam zabardast hai");
}
mylove();
function myshadi() {
    console.log("main kabhi bhi shadi nahi karunga");
}
myshadi();
function mujhypyarhwa() {
    console.log(true);
}
mujhypyarhwa();
function c(a, b) {
    var c = a + b;
    console.log("The sum of ".concat(a, " and ").concat(b, " is = ").concat(c));
}
c(2, 3);
//The sum of 2 and 3 is 5/*
function numbring(q, w) {
    var r = q - w;
    console.log("The sum of ".concat(q, " and ").concat(w, " is = ").concat(r));
}
numbring(10, 7);
//The sum of 10 and 7 is = 3
function x(c, v) {
    var n = (c + v);
    console.log("The sum of ".concat(c, " and ").concat(v, " is ").concat(n));
}
x(2, 3);
function h(x, b) {
    var d = x * b;
    //console.log(`${x} multiply by ${b}, answer will be = ${d}`)
    console.log(d); //we can use this method for shorthand
}
h(8, 5);
function j(l, k) {
    var r = l;
    var n = k;
    console.log("My favrt food is ".concat(l, " ").concat(k));
}
j("Aalu", "Biryani");
function true1(m, z) {
    var f = m;
    var g = z;
    console.log("Are you shadi shuda. ".concat(m, "/").concat(z));
}
true1(true, false);
function wrong(d) {
    var correct = d;
    console.log("I want to marry with you.".concat(d));
}
wrong(true);
function w(t, y) {
    var u = t * y;
    console.log(u); // we can use this method for shorthand
}
w(2, 3);
//The sum of 2 and 3 is = 6
function o(l, p) {
    var h = l / p;
    console.log(h);
}
o(50, 5);
//The sum of 50 and 5 is 10
function nameproperti(x, y) {
    var print = x + y;
    console.log(print); //ans will be Farhan19
    //console.log(`My name is ${x} and my age is ${y}`)
}
nameproperti("Farhan", "19"); //like that we can solve all assignment and logical operators.
//My name is Farhan and my age is 19 
function myNaam(nalo1) {
    var myName = nalo1;
    console.log("Munjo nalo ".concat(myNaam, " aahy."));
}
myNaam("Farhan Zafar Aziz Rajar");
//Munjo nalo Farhan Zafar Aziz Rajar aahy.
function n(a) {
    var b = a;
    console.log("You are married.".concat(b));
}
n(false);
//You are married.(false)
function xyz(q) {
    var y = q;
    console.log("You are married.".concat(q));
}
xyz("yes");
//You are married.yes
//parameter type Annotation
function funcName(name, Name) {
    console.log(name.toUpperCase(), Name.toLowerCase());
}
funcName("farhan", "AZIZ");
//FARHAN aziz
function again(Aalu) {
    console.log(Aalu.toUpperCase());
}
again('aalu biryani'); //AALU BIRYANI
//Arrow function
// arrow function always declare with variable
//and called with variable name
var arrowfunc = function () {
    console.log("Biryani");
};
arrowfunc();
//Ans will be Biryani
var newFunc = function () {
    console.log("Shami Kababs");
};
newFunc();
//Shami Kababs
var nahiii = function (a, b) {
    console.log(a + b);
};
nahiii(2, 3); //ans is 5
var que = function (s, r) { return s * r; };
var acha = que(3, 4);
console.log(acha);
//Ans will be 12
var wow = function (e, f) { return e / f; };
var sach = wow(25, 5);
console.log(sach), //Answer is 5
    /*let mutter=(a:string, b:string)=>{
        console.log(`Beta ${a} ${b} ly aana.`)
    }
    let eat =mutter("Mutter","5kg")
    console.log(eat);
    
    let var1 =function (nar:string, mar:string) => nar + mar;
    let var2 = var1("Uk","City");
    console.log(`${var1}} is a famous by there Desert`)
    //UK City is a famous by its Desert*/
    //2nd arrow function
    let;
sum2 = function (a, b) { return a + b; }; //can skip return
var plus = sum2(3, 7); //returns 10
console.log(plus);
//Multiplication in function 
var num = function (n1, n2) { return n1 * n2; };
var num1 = num(3, 4);
console.log(num1);
//Division in function
var sum_ = function (n2, n0) {
    return n2 / n0;
};
var nmbr = sum_(50, 5);
console.log(nmbr);
var funcproperty = function (str) { return (str.toUpperCase()); };
var a = funcproperty("pakistan zindabad");
console.log(a);
var name1 = function (nalo1) { return (nalo1.toUpperCase()); };
var name2 = name1("farhan ALI");
console.log(name2);
function myName(a, b) {
    console.log(a.toUpperCase(), b.toLowerCase());
}
myName("farhan", "AZIZ");
// if, else, else if statements
/*let per = 40;
if (per>=40){
console.log("pass")
}
else {
    console.log("fail")
}*/ //Ans is Pass bcz variable value is equal.
//else if example//
//promt and alert function always run in browser with the help of html file.
//we can not run javascript in terminal bcz it can not supports.
//examples in index1.ts file
