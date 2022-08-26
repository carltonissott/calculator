
// overarching operation function
function operate(x){
    if (x == "1÷0"){
        displayValue = "Error"
        const screen = document.querySelector('.screen')
        screen.textContent = displayValue
    }
     else if(x.includes ("+")){
        const compute = displayValue.split("+")
        var displayValueNumber = compute.map(Number)
        displayValue = displayValueNumber[0]+displayValueNumber[1]
        displayValue= displayValue.toString()
        const screen = document.querySelector('.screen')
        screen.textContent = displayValue
    }
    else if (x.includes ("x")){
        const compute = displayValue.split("x")
        let displayValueNumber = compute.map(Number)
        displayValue = displayValueNumber[0]*displayValueNumber[1]
        const screen = document.querySelector('.screen')
        screen.textContent = displayValue
    }
    else if (x.includes ("-")){
        const compute = displayValue.split("-")
        var displayValueNumber = compute.map(Number)
        displayValue = displayValueNumber[0]-displayValueNumber[1]
        const screen = document.querySelector('.screen')
        screen.textContent = displayValue
    }
    else if (x.includes ("÷")){
        const compute = displayValue.split("÷")
        var displayValueNumber = compute.map(Number)
        displayValue = displayValueNumber[0]/displayValueNumber[1]
        const screen = document.querySelector('.screen')
        screen.textContent = displayValue
    }
    else {
        console.log("error")
    }
}
// sets intial display Value
let displayValue = ""

// function to type onto screen
function screenType(num){
    const screen = document.querySelector('.screen')
    displayValue = displayValue + num
    screen.textContent = displayValue
}

// button inputs

var n1 = document.querySelector("#n1");
n1.addEventListener('click', function (event) {
    screenType (1)
});
var n2 = document.querySelector("#n2");
n2.addEventListener('click', function (event) {
    screenType (2)
});
var n3 = document.querySelector("#n3");
n3.addEventListener('click', function (event) {
    screenType (3)
});
var n4 = document.querySelector("#n4");
n4.addEventListener('click', function (event) {
    screenType (4)
});
var n5 = document.querySelector("#n5");
n5.addEventListener('click', function (event) {
    screenType (5)
});
var n6 = document.querySelector("#n6");
n6.addEventListener('click', function (event) {
    screenType (6)
});
var n7 = document.querySelector("#n7");
n7.addEventListener('click', function (event) {
    screenType (7)
});
var n8 = document.querySelector("#n8");
n8.addEventListener('click', function (event) {
    screenType (8)
});
var n9 = document.querySelector("#n9");
n9.addEventListener('click', function (event) {
    screenType (9)
});
var n0 = document.querySelector("#n0");
n0.addEventListener('click', function (event) {
    screenType (0)
});

// adds operator to string

var add = document.querySelector(".plus");
add.addEventListener('click', function (event) {
    const screen = document.querySelector('.screen')
    displayValue = displayValue + "+"
    screen.textContent = displayValue
});
var multiply = document.querySelector(".multiply");
multiply.addEventListener('click', function (event) {
    const screen = document.querySelector('.screen')
    displayValue = displayValue + "x"
    screen.textContent = displayValue
});
var subtract = document.querySelector(".minus");
subtract.addEventListener('click', function (event) {
    const screen = document.querySelector('.screen')
    displayValue = displayValue + "-"
    screen.textContent = displayValue
});
var divide = document.querySelector(".divide");
divide.addEventListener('click', function (event) {
    const screen = document.querySelector('.screen')
    displayValue = displayValue + "÷"
    screen.textContent = displayValue
});

// calls operate function

var equal = document.querySelector(".equal");
equal.addEventListener('click', function (event) {
    operate(displayValue)
});

// resets display value to null
var reset = document.querySelector(".reset");
reset.addEventListener('click', function (event) {
    const screen = document.querySelector('.screen')
    displayValue=""
    screen.textContent = displayValue
});

