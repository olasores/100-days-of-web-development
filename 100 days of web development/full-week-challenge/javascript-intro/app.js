/// ROUGH DRAFT OF JAVASCRIPT INTR u-'/0;=    O

// variables: let tells the browser to create a variable 
let greetingText = "Hi I am OLA";
let age = 32;
let hobbies = ["Sports", "Cooking", "Reading"];
//objects
let job = {
    title: "Developer",
    place: " New York",
    salary: 50000
};

let adultYears;

//name functions with what they are supposed to do
function calculateAdultYears() {
    // produces a new values.
    return age - 18
    adultYears = age - 18;
};

// function parameters userAge is only accesable in the function
function calculateAdultYears(userAge) {
     
}
// to execute a function 
calculateAdultYears();
alert(adultYears);

age = 45;
// print something on the console log is a method. 
console.log(0);


// accessing different objects
alert(job.place);
alert(hobbies);
//pointing at a specific number in an array
alert(hobbies[1]);
alert(greetingText);
alert(greetingText);
greetingText = "Hi I am really ola";
alert(greetingText);
alert(32);
// sending things to the browsers using alerts
alert("Hi, I\'m Ola!!!!!");
alert(age);


// a functiion in an object is called a method
let person = {
    name: "Max", // property 
    greet () {   // method
        alert("Hello!")
    }
}

