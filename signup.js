 // Generate and send OTP
 function sendOTP() {
    const phone = document.getElementById("phone").value;
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid phone number. Please enter a valid 10-digit phone number.");
        return;
    }
    
    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    
    // Simulate sending OTP (in a real app, this would be sent via SMS)
    alert("OTP sent to " + phone + ": " + otp);
}

// Verify OTP
function verifyOTP() {
    const enteredOTP = document.getElementById("otp-input").value;
    const phone = document.getElementById("phone").value;
    
    // In a real app, you would compare the enteredOTP with the OTP sent to the user's phone
    // For this example, we'll simply show an alert if the OTP matches
    if (enteredOTP === "") {
        alert("Please enter OTP.");
    } else if (enteredOTP === "1234") { // Change this to the actual OTP sent to the user
        alert("OTP verified successfully. Signup completed for " + phone + ".");
    } else {
        alert("Incorrect OTP. Please try again.");
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
