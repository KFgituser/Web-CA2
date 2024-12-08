function validateSearch() {
    let isValid = true;

    // Clear previous error message
    const searchError = document.getElementById('searchError');
  
    // Get the input field and its value
    const search = document.getElementById('search');
    const searchValue = search.value.trim(); 

    // Pattern
    const eircodePattern = /^[A-Z]\d{2}\s?[A-Z0-9]{4}$/;
	const addressPattern = /^[a-zA-Z0-9\s,'-]*$/;
	
    // Check if the input is empty
    if (searchValue === '') {
        searchError.innerText = "Please enter an Eircode or an address.";
        search.classList.add("error-field");
        isValid = false;
    }
    // Check if the input is a valid Eircode or a valide adress
      if (!eircodePattern.test(searchValue) && !isNaN(searchValue)) {
            searchError.innerText = "Please enter a valid Eircode (e.g., A65 F4E2) or an address.";
            search.classList.add("error-field");
            isValid = false;
      }

    return isValid; // Return true if validation passes, false otherwise
}
