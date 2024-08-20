function changeContent() { // Change HTML Content
    document.getElementById("contentDemo").innerHTML = "Hello, World!";
}


function changeImageOn() { // Change HTML Attributes
    document.getElementById("imageDemo").src="/Javascript basic-advance/image/on.gif";
}

function changeImageOff() { // Change HTML Attributes
    document.getElementById("imageDemo").src="/Javascript basic-advance/image/off.gif";
}


function changeStyle() { // Change CSS Style
    const element = document.getElementById("styleDemo");
    element.style.color = "blue";
    element.style.fontSize = "20px";
    element.style.fontWeight = "bold";
}


function hideElement() { // Hide and Show Elements
    document.getElementById("visibilityDemo").style.display = "none";
}


function showElement() {
    document.getElementById("visibilityDemo").style.display = "block";
}

document.getElementById("eventButton").onclick = function() { // Handle Events
    alert("Button clicked!");
};

function fetchData() { // Communicate with Servers
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Example API
        .then(response => response.json())
        .then(data => {
            document.getElementById("serverOutput").innerHTML = `Title: ${data.title}`;
        })
        .catch(error => console.log('Error:', error));
}

function fetchApiData() { // Work with APIs
    fetch('https://jsonplaceholder.typicode.com/users/1') // Example API
        .then(response => response.json())
        .then(data => {
            document.getElementById("apiOutput").innerHTML = `Name: ${data.name}`;
        })
        .catch(error => console.log('Error:', error));
}
