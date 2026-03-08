function openVoting() {
    document.getElementById("votingPopup").style.display = "flex";
}

function closeVoting() {
    document.getElementById("votingPopup").style.display = "none";
    document.getElementById("response").innerText = "";
}

function verifyVoter() {
    let regNo = document.getElementById("regNo").value;
    let name = document.getElementById("studentName").value;
    let response = document.getElementById("response");

    if (regNo === "" || name === "") {
        alert("Registration Number and Name are required!");
    } else if (regNo.length < 5) {
         alert(" Invalid Registration Number!");
    } else {
       
         alert  ( "Verification successful! You can proceed to vote.");
    }
}
