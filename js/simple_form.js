/**
  * As a User need to follow pre-defined Mobile Format 
    - E.g. 91 9919819801 
    - Country code follow by space and 10 digit number
 */

//UC1- Validating First Name
const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener("input", function () {
  let nameRange = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (nameRange.test(text.value)) {
    textError.textContent = "";
  } else {
    textError.textContent = "Name is incorrect";
  }
});

/**
 * Update the salary value when scrolled from left to right and vice-versa
 */

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});
/**
 * To validate the email field using the REGEX expression
 */

 const email = document.querySelector('#email');
 const emailError = document.querySelector('.email-error');
 text.addEventListener('input', function() {
     let emailRegex = RegExp("^[A-Za-z0-9!#$%&*+\=?`{|}~^-]+(?:\.[A-Za-z!#$%&*+\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\.)+[a-zA-Z]{2,3}$");
     if(emailRegex.test(email.value))
         emailError.emailContent = "";
     else emailError.emailContent = "Email is Incorrect";
 });

 //UC3- Validating the phone number
 const tel = document.querySelector("#tel");
 const telError = document.querySelector(".tel-error");
 tel.addEventListener("input", function(){
   let telRegex = RegExp("[1-9]{2}\\s{1}[0-9]{10}");
   if(telRegex.test(tel.value)){
     telError.textContent = "";
   }else{
     telError.textContent = "phone number is incorrect";
   }
 });

 //UC4,5- Validating the password
 const password = document.querySelector("#pwd");
 const passwordError = document.querySelector(".password-error");
 password.addEventListener("input", function(){
   let passwordRegex = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$");
   if(passwordRegex.test(password.value)){
     passwordError.textContent = "";
   }else{
     passwordError.textContent = "password is incorrect";
   }
 });