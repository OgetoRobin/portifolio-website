document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("joinform");

    if (!form) {
        console.log("Form not found");
        return;
    }

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
        error.textContent = "";

        // ✅ Validation
        if (name === "") {
            error.textContent = "Enter a valid Name.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Enter a valid email address.";
            return;
        }

        if (phonenumber.length < 10) {
            error.textContent = "Enter a valid phone number.";
            return;
        }

        if (message === "") {
            alert("Please specify your area of interest.");
            return;
        }

        if (password1.length < 6 || !password1.includes("@")) {
            error.textContent = "Password must be at least 6 characters and include '@'.";
            return;
        }

        if (password1 !== password2) {
            alert("Passwords do not match.");
            return;
        }

        const params = { name, email, message };

        // ✅ Show loader
        document.getElementById("loader").style.display = "flex";

        // 1️⃣ Send admin email
        emailjs.send("service_3eah78g", "template_q0gp09d", params)

        .then(function (response) {

            console.log("Admin email sent:", response);

            // 2️⃣ Send auto-reply
            return emailjs.send("service_3eah78g", "template_autoreply123", params);

        })

        .then(function (response) {

            console.log("Auto-reply sent:", response);

            setTimeout(function () {

                document.getElementById("loader").style.display = "none";

                const successMsg = `Dear ${name}, your request has been received! Check ${email} for confirmation.`;

                document.getElementById("successMessage").innerText = successMsg;
                document.getElementById("successPopup").style.display = "flex";

                form.reset();

            }, 2000);

        })

        .catch(function (error) {

            document.getElementById("loader").style.display = "none";

            console.log("FAILED:", error);
            alert("Failed to send email. Check console.");

        });

    });

});

// ✅ Close popup
function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}
