// Example 1: Changing Content
function changeContent() {
    document.getElementById("demo1").innerHTML = "Content Changed!";
}

// Example 2: Handling Events
document.getElementById("eventButton").onclick = function() {
    alert("Button was clicked!");
};

// Example 3: Form Validation
function validateForm() {
    const x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

// Example 4: Manipulating Arrays
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange");
document.getElementById("arrayOutput").textContent = fruits.join(", ");

// Example 5: Basic DOM Manipulation
function createNewElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph.";
    document.getElementById("newElementContainer").appendChild(newElement);
}

// Example 6: Control Structures
const time = new Date().getHours();
let greeting = time < 12 ? "Good morning" : "Good afternoon";
document.getElementById("timeGreeting").textContent = greeting;

// Example 7: Functions
function greet(name) {
    return "Hello, " + name;
}
document.getElementById("functionOutput").textContent = greet("Alice");

// Example 8: Working with Objects
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("objectOutput").textContent = person.fullName();

// Example 9: Interacting with APIs
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => document.getElementById("apiData").textContent = data.title)
    .catch(error => console.error('Error:', error));

// Example 10: Timers
setTimeout(() => {
    document.getElementById("timerMessage").textContent = "This message was delayed by 3 seconds";
}, 3000);

// Example 11: Handling Errors
function triggerError() {
    try {
        nonExistentFunction();
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Example 12: Local Storage
localStorage.setItem("username", "JohnDoe");
document.getElementById("storedUsername").textContent = localStorage.getItem("username");

// Example 13: Creating Animations
function startAnimation() {
    let position = 0;
    const box = document.getElementById("box");
    const interval = setInterval(() => {
        if (position >= 300) {
            clearInterval(interval);
        } else {
            position++;
            box.style.left = position + 'px';
        }
    }, 10);
}

// Example 14: Using Promises
const myPromise = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});

myPromise.then(message => {
    document.getElementById("promiseOutput").textContent = message;
}).catch(error => {
    document.getElementById("promiseOutput").textContent = error;
});

// Example 15: Event Propagation
document.getElementById("child").addEventListener("click", (e) => {
    console.log("Child clicked!");
    e.stopPropagation(); 
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked!");
});

// Example 16: Working with Dates and Times
const now = new Date();
document.getElementById("currentDate").textContent = now.toDateString();

// Example 17: Regular Expressions
const email = "test@example.com";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
document.getElementById("regexOutput").textContent = regex.test(email);

// Example 18: JSON Parsing
const jsonString = '{"name":"John", "age":30}';
const obj = JSON.parse(jsonString);
document.getElementById("jsonOutput").textContent = obj.name;

// Example 19: Creating Classes
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    present() {
        return "I have a " + this.brand;
    }
}

const myCar = new Car("Toyota");
document.getElementById("classOutput").textContent = myCar.present();

// Example 20: Responsive Web Design
window.addEventListener("resize", () => {
    const responsiveMessage = document.getElementById("responsiveMessage");
    if (window.innerWidth < 600) {
        responsiveMessage.style.color = "blue";
    } else {
        responsiveMessage.style.color = "black";
    }
});
