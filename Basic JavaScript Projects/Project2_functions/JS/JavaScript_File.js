//main.js

//a function that uses the *= operator
function myFunction() {
    var sentence = "I am leaning"; //creating the varaible
    sentence+= " a lot from this course!"; //using the *= operator to addd the variable
    document.getElementById("concatenate").innerHTML = sentence; //using document.ElementByID()
}