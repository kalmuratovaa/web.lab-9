const form = document.getElementById("form");
const username = document.getElementById("user");
const password = document.getElementById("pass");
const rememberme = document.getElementById("check");
const email = document.getElementById("email");

form.addEventListener("Login" , (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernameValue =  username.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();
 if(usernameValue === ""){
    setErrorFor(username, "Username can not be blank");
 } else{
    setSuccesFor(username);
 }
 if(emailValue === ""){
    setErrorFor(email, "Email can not be blank");
 } else if(!isEmail(emailValue)){
    setSuccesFor(email, "Email is not valid");
 } else {
     setSuccesFor(email);
 }
 if(passwordValue === ""){
    setErrorFor(password, "Passwordcan not be blank");
 } else{
    setSuccesFor(password);
 }
}
function setErrorFor(input){
    const formControl = input.parentElement;
    const smmall = formControl.querySelector("small");
    smmall.innerText = message;
    formControl.className="group";
}
function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = "group";    
}
