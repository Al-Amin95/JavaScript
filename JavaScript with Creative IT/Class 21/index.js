let userName=document.getElementById("user");
userName.style.color="red";
console.log(userName);
console.log(userName.innerText);


let studentName=document.getElementsByClassName("student");
console.log(studentName);
console.log("Length: ",studentName.length);
console.log(studentName[0].innerHTML);
console.log(studentName[1].innerText);


let studentName1=document.querySelector(".student");
console.log(studentName1.innerText);

let studentName2=document.querySelector("#user");
console.log(studentName2.innerText);

let studentName3 = document.querySelectorAll(".student")[0];
studentName3.innerText = "before " + studentName3.innerText; 
console.log(studentName3.innerText); 

let studentName4 = document.querySelectorAll(".student")[1];
studentName4.innerText += " after"; 
console.log(studentName4.innerText);

studentName4.style.color="Green";
studentName4.style.fontSize="50px";
studentName4.style.backgroundColor="red";


//click()----event
let btn_click=document.getElementById("click_btn");

btn_click.addEventListener("click",function(){
    alert("Hello, Welcome to my world");
    document.body.style.backgroundColor="red";
})
console.log(btn_click);

//onclik()-----event
 
function changeBG(){
    document.body.style.backgroundColor="yellow";
}

let userInput = document.getElementById("userNameInput"); // Get the input element
let btn_inp = document.getElementById("user_input"); // Get the button element
let outputHeading = document.getElementById("input_id_1"); // Get the <h1> element

// Add an event listener to the button
btn_inp.addEventListener("click", function() {
    // Set the text content of the <h1> element to the value of the input
    outputHeading.textContent = userInput.value;
    // Optionally log the value
    console.log(userInput.value);
});

