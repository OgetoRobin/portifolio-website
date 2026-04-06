document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("joinform");

    if (!form) {
        console.log("Form not found");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("Form submitted");

        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("name").value.trim();
        const phonenumber = document.getElementById("phonenumber").value.trim();
        const message = document.getElementById("message").value.trim();
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const error = document.getElementById("error");

        error.style.color = "red";
        error.textContent = "";

        // ✅ Name validation
        if (name === "") {
            error.textContent = "Enter a valid Name.";
            return;
        }

        // ✅ Email validation
        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Enter a valid email address.";
            return;
        }

        // ✅ Phone validation
        if (phonenumber.length < 10) {
            error.textContent = "Enter a valid phone number (at least 10 digits).";
            return;
        }

        // ✅ Area (message) validation
        if (message === "") {
            alert("Please specify at least one area of interest.");
            return;
        }

        // ✅ Password validation
        if (password1.length < 6 || !password1.includes("@")) {
            error.textContent = "Password must be at least 6 characters and include '@'.";
            return;
        }

        // ✅ Password match
        if (password1 !== password2) {
            alert("Passwords do not match.");
            return;
        }

        // ✅ EmailJS parameters
        const params = {
            name: name,
            email: email,
            message: message
        };

        console.log("Sending email...", params);

        // ✅ Send email
        emailjs.send("service_3eah78g", "template_q0gp09d", params)
        .then(function (response) {

            console.log("SUCCESS:", response);

            const successMsg = `Dear ${name}, your request has been received! Login instructions have been sent to ${email}.`;

            document.getElementById("successMessage").innerText = successMsg;
            document.getElementById("successPopup").style.display = "flex";

            // OPTIONAL: reset form after success
            form.reset();

        })
        .catch(function (error) {

            console.log("FAILED:", error);
            alert("Failed to send email. Check console (F12).");

        });

    
    });
});

// ✅ Close popup function
function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}
