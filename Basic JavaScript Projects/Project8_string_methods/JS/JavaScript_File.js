//main.js

//Utilizing the .concat() Method
function full_sentence() {
    var part_1 = "Guess what day  ";
    var part_2 = "it is...  ";
    var part_3 = "April Fools!";
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//Utilizing the .slice() Method
function slice_Method() {
    var sentence = "Slice and Dice";
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}

//Utilizing the .toString() Method
function string_Method() {
    var myNumber = "999";
    document.getElementById("ToString").innerHTML = myNumber.toString;
}

//Utilizing the .tosPrecision() Method
function precision_Method() {
    var myNumber = "123.45678910111213";
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(5);

}

