//main.js

//a function that uses the *= addition function
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound; //Delete KVP from dictionary before its displayed
    document.getElementById("Dictionary").innerHTML = Animal.Sound;

}

