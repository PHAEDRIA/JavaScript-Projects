//main.js

window.alert(Math.random() * 100);

//a function that uses the *= addition function
function addition() {
    var add = 2 + 2; 
    document.getElementById("Math").innerHTML = "2 + 2 =" + add; //Print the result in HTML)
}

//a function that uses the *= subtraction function
function subtraction() {
    var sub = 5 - 2; 
    document.getElementById("Math").innerHTML = "5 - 2 =" + sub; //Print the result in HTML)
}

//a function that uses the *= multiplication function
function multiplication() {
    var mult = 6 * 8; 
    document.getElementById("Math").innerHTML = "6 x 8 =" + mult; //Print the result in HTML)
}

//a function that uses the *= division function
function division() {
    var divide = 6 / 8; 
    document.getElementById("Math").innerHTML = "48 / 6 =" + divide; //Print the result in HTML)
}

function random() {
    document.getElementById("Ran").innerHTML = Math.random()*10; //Print the result in HTML)
}

//a function that uses the *= operator // remainder function
function modulus_operator() {
    var modulus = 25 % 6; 
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus; //Print the result in HTML)
}

//a function that uses the *= Unary Operator function
function negation_operator() {
    var x = 10; 
    document.getElementById("Math").innerHTML = "48 / 6 =" - x; //Print the result in HTML)
}

//a function that uses the *= increment function
function Increment ()
    var value = document.getElementById("IncrementText").innerHTML; //saves the text of the HTML element to the  variable
    value++;
    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML

function Decrement ()
    var value = document.getElementById("DecrementText").innerHTML; //saves the text of the HTML element to the  variable
    value--;
    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML 

