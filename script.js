onload = () =>{
    document.body.classList.remove("container");
};

// Get the input elements from the HTML form
var username = document.getElementById("username");
var password = document.getElementById("password");

// Get the button element from the HTML form
var button = document.getElementById("login-button");

// Add a click event listener to the button
button.addEventListener("click", function() {
// Get the values from the input elements
var inputUsername = username.value;
var inputPassword = password.value;

// Check if the input values match the desired username and password
// In this case, the desired username and password are not specified
// so the user can enter any values they wish
if (inputUsername && inputPassword) {
// If the input values are not empty, display a success message
alert("Login successful!");
// Redirect the user to the "flower.html" page
window.location.href = "flower.html";
} else {
// If the input values are empty, display an error message
alert("Please enter a username and password. Please try again.");
}
});
var confirm = confirm("ga mau yang asli nih ?");
if(confirm){
alert("oke");
}else{
alert("oke, bunga coding aja");
}

