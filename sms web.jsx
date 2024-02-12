// Ensure you include the Twilio JavaScript library in your HTML file
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

function sendSMS() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;

    // Your Twilio API credentials
    const accountSid = 'your_account_sid';
    const authToken = 'your_auth_token';
    const fromNumber = 'your_twilio_phone_number';

    // Twilio API endpoint
    const apiUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    // Data to be sent in the request
    const data = {
        To: phoneNumber,
        From: fromNumber,
        Body: message,
    };

    // Send SMS using Twilio API
    $.ajax({
        url: apiUrl,
        type: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
        },
        data: data,
        success: function(response) {
            console.log('SMS sent successfully:', response);
            alert('SMS sent successfully!');
        },
        error: function(error) {
            console.error('Error sending SMS:', error);
            alert('Error sending SMS. Please try again.');
        }
    });
}