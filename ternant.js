document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("tenantForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const phone1 = document.getElementById("phone1").value.trim();
        const idnumber = document.getElementById("idnumber").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmpassword").value;
        const error = document.getElementById("error");
       // const successpopup = document.getElementById("successpopup").style.display="flex";
        




        error.style.color = "red";

        if (email === "" || phone1 === "" || idnumber === "" || password === "" || confirmPassword === "") {
           alert("please fill in all the filleds!")
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Enter a valid email address.";
            return;
        }

        if (phone1.length < 10) {
            error.textContent = "Phone number must be at least 10 digits.";
            return;

            
        }

        if (idnumber.length < 6) {
            error.textContent = "Enter a valid ID number.";
            return;
        }

        if (password.length < 6) {
            error.textContent = "Password must be at least 6 characters.";
            return;
        }
       

        if (password !== confirmPassword) {
            alert( "Passwords do not match.");
            return;
        }
         document.getElementById("loader").style.display="flex";
          setTimeout(function(){
        document.getElementById("loader").style.display="none"; 

        let message = `Dear Tenant, your registration is successful! We have sent a login instructions to ${email}. Please check your email to continue registration.`;  
              document.getElementById("successMessage").innerText = message;

document.getElementById("successPopup").style.display = "flex";

          } ,5000)

          
   
 

       // error.style.color = "green";
       // error.textContent = "Validation successful. Processing login...";

        
        // Example redirect
        // window.location.href = "tenant-dashboard.html";
    });
});
function showSuccess() {
    document.getElementById("successPopup").style.display = "flex";
}

function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}



document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

         const email = document.getElementById("email").value.trim();
        
        const idnumber = document.getElementById("idnumber").value.trim();
        const password = document.getElementById("password").value;
       
        const error = document.getElementById("error");

         if (email === "" || idnumber === "" || password === "" ) {
         error.textContent = "Please fill in all above filleds.";
         error.style.color = "red";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Enter a valid email address.";
            return;
        }
          if (idnumber.length < 6) {
            error.textContent = "Enter a valid ID number.";
            return;
          }
        if (password.length < 6) {
            error.textContent = "Incorect Password.";
            error.style.color = "red";
            return;
        }

       
 document.getElementById("successPopup").style.display = "flex";



         });
});
function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}


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

    let message = `Dear ${name} your request to join Us has been received! We have sent login instructions to ${email}. Please check your email. Thank you.`;  

    document.getElementById("successMessage").innerText = message;
    document.getElementById("successPopup").style.display = "flex";

}, function(error) {
    alert("Failed to send email. Try again.");
      
    })
        
    
    });
});

function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}











