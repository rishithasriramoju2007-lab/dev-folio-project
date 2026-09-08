const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values when Submit is clicked
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /.+@.+\..+/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Message validation
    if (message.length < 10) {
        messageError.textContent =
            "Message must be at least 10 characters long.";
        isValid = false;
    }

    // Successful submission
    if (isValid) {
        console.log("Form submitted successfully!");
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});