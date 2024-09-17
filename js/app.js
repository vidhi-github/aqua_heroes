document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;
    const improvement = document.getElementById('improvement').value;

    alert(`Thank you, ${username}! Your review with rating ${rating}/5 has been submitted.`);
    
    // You can add AJAX calls here to send the data to the backend or save in local storage.
});
