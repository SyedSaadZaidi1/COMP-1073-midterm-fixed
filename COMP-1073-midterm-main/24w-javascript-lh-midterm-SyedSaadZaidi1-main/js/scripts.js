// scripts.js

// Question 2
var myTest1 = "my test";

// Question 3
var myFirstName = "Syed Saad";
var question3Text = document.querySelector('#myFirstName');
question3Text.textContent = myFirstName;

// Question 4
var question4Button = document.querySelector(".question4Button");
var question4Text = document.querySelector(".question4Para");

function toggleLight() {
    if (question4Button.textContent === 'turn on') {
        question4Button.textContent = 'turn off';
        question4Text.textContent = 'The light is on.';
    } else {
        question4Button.textContent = 'turn on';
        question4Text.textContent = 'The light is off.';
    }
}
question4Button.addEventListener("click", toggleLight);

// Question 5
var question5a = String(1);
var question5b = 'I am writing Test1';
var question5c = question5a + question5b;

// Question 6
var question6 = "I will finish the test in 2 hours.";
question6 = question6.replace("in 2 hours.", "SOON!");
question6 = question6.replace("finish", "conclude");
console.log(question6);

// Question 7
var question7 = ['one', 'two', 'three', 'four', 'I', 'declare', 'thumb', 'war'];
var question7Answer = question7.join(', ') + "!";

// Question 8
var question8 = ['orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
question8.pop();
question8.unshift('red');

// Question 9
var timeOfDay;
var meal;
switch(timeOfDay) {
    case 'morning':
        meal = 'breakfast';
        break;
    case 'afternoon':
        meal = 'lunch';
        break;
    case 'evening':
        meal = 'dinner';
        break;
    default:
        meal = 'no meal';
}

// Question 10
var ingredients = ['flour', 'sugar', 'eggs', 'milk'];
var i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}

// Question 11
var question11Para = document.querySelector('.question11Para');
question11Para.textContent = greeting('Syed Saad');

function greeting(name) {
    return "Hello, " + name + ". How are you today?";
}

// Question 12
var icon = document.createElement('img');
icon.setAttribute("src", "img/img1.jpg");
document.querySelector('#question12').appendChild(icon);

// Question 13
const question13Btn = document.querySelector('#question13');

function question13Fun() {
     console.log(question13Btn.outerHTML);
}
question13Btn.addEventListener('click', question13Fun);

// Question 14
let question14 = ["flower", 25, [2, 3, 6], true];
console.log(question14[2][1]);

// Question 15
const question15BtnA = document.querySelector('#question15a');
const question15BtnB = document.querySelector('#question15b');
let intervalId;

function question15Fun() {
    intervalId = window.setInterval(sub, 1000);

    function sub() {
        console.log("I am infinite!");
    }
}

question15BtnA.addEventListener("click", question15Fun);
question15BtnB.addEventListener("click", function() {
    clearInterval(intervalId);
});

// Question 16
var employeeArray = ["200465123: Francoise Rautenstrauch", "200465124: Kendra Loud", "200465125: Lourdes Bauswell", "200465126: Hannah Edmison", "200465127: Tom Loeza"];
var employeeTableBody = document.querySelector('tbody');
employeeArray.forEach(function(employee) {
    var employeeData = employee.split(': ');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.textContent = employeeData[1];
    td2.textContent = employeeData[0];
    tr.appendChild(td1);
    tr.appendChild(td2);
    employeeTableBody.appendChild(tr);
});
