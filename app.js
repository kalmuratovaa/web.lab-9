// const form = document.getElementById("form");
// const username = document.getElementById("user");
// const password = document.getElementById("pass");
// const rememberme = document.getElementById("check");
// const email = document.getElementById("email");

// form.addEventListener("Login" , (e) => {
//     e.preventDefault();
//     checkInputs();
// });
// function checkInputs(){
//     const usernameValue =  username.value.trim();
//     const passwordValue = password.value.trim();
//     const emailValue = email.value.trim();
//  if(usernameValue === ""){
//     setErrorFor(username, "Username can not be blank");
//  } else{
//     setSuccesFor(username);
//  }
//  if(emailValue === ""){
//     setErrorFor(email, "Email can not be blank");
//  } else if(!isEmail(emailValue)){
//     setSuccesFor(email, "Email is not valid");
//  } else {
//      setSuccesFor(email);
//  }
//  if(passwordValue === ""){
//     setErrorFor(password, "Passwordcan not be blank");
//  } else{
//     setSuccesFor(password);
//  }
// }
// function setErrorFor(input){
//     const formControl = input.parentElement;
//     const smmall = formControl.querySelector("small");
//     smmall.innerText = message;
//     formControl.className="group";
// }
// function setSuccesFor(input){
//     const formControl = input.parentElement;
//     formControl.className = "group";    
// }
$(function(){
   var $loginForm = $("#login");
   if ($loginForm.length){
     $loginForm.validate({
       rules:{
         username:{
           required: true
         },
         password:{
           required: true
         },
         email: { 
           required: true
         },
         control: { 
           required: true
         },
       },
       messages:{
         username:{
           required: "You cannot leave this field empty!"
         },
         password:{
           required: "You cannot leave this field empty!"
         },
         email:{
           required: "You cannot leave this field empty!"
         },
         control:{
           required: "You cannot leave this field empty!"
         },
       }
     })
   }
 })
// this btn
$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});

