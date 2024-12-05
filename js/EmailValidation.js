function validateForm() {
  // Clear previous error messages and styles
  document.getElementById("emailError").innerText = "";
 
  // Reset input field styles
  const fields = ["email"];
  fields.forEach(field => document.getElementById(field).classList.remove("error-field"));

  let isValid = true;

  // Email Validation
  const email = document.getElementById("email");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


  if (!emailPattern.test(email.value)) {
    document.getElementById("emailError").innerText = "Please enter a valid email address.";
    email.classList.add("error-field");
    isValid = false;
  }

  

  return isValid;
}
