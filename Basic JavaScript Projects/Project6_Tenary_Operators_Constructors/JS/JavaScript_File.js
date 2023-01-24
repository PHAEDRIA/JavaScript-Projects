//main.js

//A function with HT<L and JS using a ternary operation with input from the browser
function Ride_Function () {
    var Height = document.getElementById("Height").value;
    var Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//A cpmstructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Jack = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Jack = new Vehicle("Ford", "Pinto", 1971, "Mustardd");

//A function to  display the results of the contructor in an HTML element
function myFunction () {
    document.getElementById("keywords_and_constructors").innerHTML =
        "Erik drives a" +
        Erik.Vehicle_Color +
        "-colored " +
        Erik.Vehicle_Model +
        " manufactured in " +
        Erik.Vehicle_Year;
}

//A nested function
function add_string () {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding(world);
    document.getElementById("Nested_Function").innerHTML = start_string;
}
