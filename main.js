/*
	WEB 303 Assignment 1 - jQuery
	Kiran Ale Magar (0824147)
*/
$(document).ready(function(){ 

		// Function to calculate the amount to spend on tech
		function calculateTechAmount() {
			// Get the values of the salary and percentage fields
			var yearlySalary = $('#yearly-salary').val(); 
			var percent = $('#percent').val();
	
			// Calculate the amount to spend on tech
			var amount = (yearlySalary * percent) / 100;
	
			// Round the calculated amount to dollars and cents
			var roundedTechAmount = amount.toFixed(2);
	
			// Update the amount span with the calculated value
			$('#amount').text('$' + roundedTechAmount);
		}
	
		// Attach the keyup event handler to the salary and percent fields
		$('#yearly-salary, #percent').on('keyup', calculateTechAmount);
	
		// Initialize the amount when the page loads
		calculateTechAmount();


});
