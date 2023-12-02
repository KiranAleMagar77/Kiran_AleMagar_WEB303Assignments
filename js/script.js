$(document).ready(function () {
    const usernameInput = $('#username');
    const passwordInput = $('#password');
    const confirmPasswordInput = $('#confirmPassword');
    const termsCheckbox = $('#termsCheckbox');
    const countrySelect = $('#countrySelect');
    const submitButton = $('#submitButton');
    const welcomeMessageContainer = $('#welcomeMessage');

    // Populate countries in the select dropdown
    countries.forEach(country => {
        const option = $('<option>');
        option.val(country.code);
        option.text(country.name);
        countrySelect.append(option);
    });

    // Event listeners for form inputs
    usernameInput.on('input', checkForm);
    passwordInput.on('input', checkForm);
    confirmPasswordInput.on('input', checkForm);
    termsCheckbox.on('change', checkForm);
    countrySelect.on('change', checkForm);

    // Event listener for form submission
    $('#registrationForm').submit(function (event) {
        event.preventDefault();
        if (checkForm()) {
            displayWelcomeMessage();
        }
    });

    function checkForm() {
        const isUsernameValid = validateRequiredField(usernameInput);
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const areTermsAccepted = termsCheckbox.prop('checked');
        const isCountrySelected = countrySelect.val() !== '';

        const isFormValid = isUsernameValid && isPasswordValid && isConfirmPasswordValid && areTermsAccepted && isCountrySelected;

        submitButton.prop('disabled', !isFormValid);

        return isFormValid;
    }

    function validatePassword() {
        const password = passwordInput.val();
        const valid = password.length >= 12;

        if (!valid) {
            setErrorMessage(passwordInput, 'Please make sure your password has at least 12 characters');
        } else {
            clearErrorMessage(passwordInput);
        }

        return valid;
    }

    function validateConfirmPassword() {
        const confirmPassword = confirmPasswordInput.val();
        const password = passwordInput.val();
        const valid = confirmPassword === password;

        if (!valid) {
            setErrorMessage(confirmPasswordInput, 'Passwords do not match');
        } else {
            clearErrorMessage(confirmPasswordInput);
        }

        return valid;
    }

    function validateRequiredField(inputField) {
        const value = inputField.val().trim();
        const valid = value !== '';

        if (!valid) {
            setErrorMessage(inputField, 'This field is required');
        } else {
            clearErrorMessage(inputField);
        }

        return valid;
    }

    function setErrorMessage(inputField, message) {
        clearErrorMessage(inputField);
        const errorContainer = $('<div>').addClass('error-message').text(message);
        inputField.parent().append(errorContainer);
    }

    function clearErrorMessage(inputField) {
        inputField.parent().find('.error-message').remove();
    }

    function displayWelcomeMessage() {
        const username = usernameInput.val().trim();
        const countrySelected = countrySelect.find('option:selected').text();

        const welcomeMessage = $('<h1>').text(`Welcome ${username}! The country you selected is ${countrySelected}`);
        welcomeMessageContainer.append(welcomeMessage).show();
    }
});
