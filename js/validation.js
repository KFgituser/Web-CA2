
    function validateForm() {
      let isValid = true;

	// Clear previous error messages
      document.getElementById("nameError").innerText = "";
	  document.getElementById('emailError').textContent = ' ';
	  document.getElementById('phoneError').textContent = ' ';
	  document.getElementById('addressError').textContent = ' ';
      document.getElementById('eircodeError').textContent = ' ';
	
      //  pattern
	const emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	const phonePattern = /^(?:\+353|00353|0)?[1-9]\d{6,9}$/;
	const eircodePattern = /^[A-Z]\d{2}\s?[A-Z0-9]{4}$/;

	 // Name Validation
	  const name = document.getElementById("name");
	  if (name.value.trim() === "") {
		document.getElementById("nameError").innerText = "Please enter your name.";
		name.classList.add("error-field");
		isValid = false;
	  }
	   // Validate Email
      const email = document.getElementById('email');
	  if (email === '') {
       document.getElementById('emailError').innerText  = 'Email is required.';
       email.classList.add("error-field");
	   isValid = false;
      } else if (! emailPattern.test(email)) {
        document.getElementById('emailError').innerText  = 'Invalid email format. Example: user@example.com';
		email.classList.add("error-field");
		isValid = false;
      }
	 
	 // Validate Phone
	 const phone = document.getElementById('phone');
	 if (phone === '') {
        document.getElementById('phoneError').innerText = 'Phone number is required.';
        phone.classList.add("error-field");
	    isValid = false;
      } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Invalid phone number. Example: 0871234567 or +353871234567.';
		phone.classList.add("error-field");
		isValid = false;
      }


      // Validate Address
    const address = document.getElementById('address');
      if (address === '') {
        document.getElementById('addressError').tinnerText  = 'Address is required.';
       address.classList.add("error-field");
	   isValid = false;
      } 


      // Validate Eircode format
      const eircode = document.getElementById('eircode');
	 
	  if (eircode === '') {
        document.getElementById('eircodeError').innerText  = 'Eircode is required.';
        eircode.classList.add("error-field");
		isValid = false;
      } else if (!eircodePattern.test(eircode)) {
        document.getElementById('eircodeError').innerText  = 'Invalid Eircode format. Example: A65 F4E2';
         eircode.classList.add("error-field");
		isValid = false;
      }
     
	 return isValid; // Return false if validation fails
    }