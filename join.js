document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("joinform");
form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("name").value.trim();
        const phonenumber = document.getElementById("phonenumber").value.trim();
        const message = document.getElementById("message").value.trim();
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const error = document.getElementById("error");

        error.style.color = "red";

        // Check empty fields
        
            
        if (name==="") {
    error.textContent = "Enter a valid Name.";
            return;
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Your email is required.";
            return;
        }

        // Phone validation
        if (phonenumber.length < 10) {
            error.textContent="Enter a valid Number! Phone number must be at least 10 digits.";
            return;
        }

        // area validation
        if (message === "") {
            alert("Please specify at least one area of interest then you proceed.");
            return;
        }

        // Password validation
        if (password1.length < 6 || !password1.includes("@")) {
            error.textContent = "Create a strong Password with at least 6 characters and include '@'.";
            return;
        }

        // Match passwords
        if (password1 !== password2) {
            alert("Passwords do not match.");
            return;
        }
const params = {
    name: name,
    email: email,
    message: message

 };

  emailjs.send("service_3eah78g", "template_iq81db7", params)
    .then(function(response) {
        
        let message = `Dear ${name} your request to join Us has be received! We have sent a login instructions to ${email}. Please check your email to start our session.Thank you.`;  
              document.getElementById("successMessage").innerText = message;
        // SUCCESS
        document.getElementById("successPopup").style.display = "flex";
    
      
    })
        
      
    });
});

function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}




