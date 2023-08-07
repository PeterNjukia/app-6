document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.getElementById("loginContainer");
    const registerContainer = document.getElementById("registerContainer");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const message = document.getElementById("message");

    // Show login form and hide register form
    // const showLoginForm = () => {
    //     loginContainer.style.display = "block";
    //     registerContainer.style.display = "none";
    // };

    // Show register form and hide login form
    const showRegisterForm = () => {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    };

    // Event listener for login form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        loginUser(email, password);
    });

    // Event listener for register form submission
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        registerUser(name, email, password);
    });

    // Function to display success or error message
    const showMessage = (msg, isError = false) => {
        message.textContent = msg;
        message.style.display = "block";
        if (isError) {
            message.classList.add("error");
        } else {
            message.classList.remove("error");
        }
        setTimeout(() => {
            message.style.display = "none";
        }, 3000);
    };

    // Function to login a user
    const loginUser = (email, password) => {
        // You will need to implement the login logic here using fetch or other methods
        // For demonstration purposes, let's assume a user with email "test@test.com" and password "password" can login successfully.
        if (email === "test@test.com" && password === "password") {
            showMessage("Login successful!");
        } else {
            showMessage("Invalid email or password", true);
        }
    };

    // Function to register a user
    const registerUser = (name, email, password) => {
        // You will need to implement the registration logic here using fetch or other methods
        // For demonstration purposes, let's assume the registration is successful.
        showMessage("Registration successful!");
        showLoginForm();
    };

    // Show login form by default
    showLoginForm();
});
