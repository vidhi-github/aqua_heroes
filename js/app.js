document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const username = document.getElementById('username').value.trim();
    const rating = document.getElementById('rating').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Validate username
    if (username === "") {
        errorMessage.textContent = "Username is required.";
        return;
    }

    // Validate rating
    if (rating === "" || isNaN(rating) || rating < 1 || rating > 5) {
        errorMessage.textContent = "Please provide a rating between 1 and 5.";
        return;
    }

    // Validate feedback
    if (feedback.length < 10) {
        errorMessage.textContent = "Feedback should be at least 10 characters long.";
        return;
    }

    // If all validations pass, clear the error message and allow form submission
    errorMessage.textContent = "";

    // Form data is valid, so you can proceed with submitting it or handle it with Ajax, etc.
    alert('Thank You for submitting the review!! Review submitted successfully!');
    event.target.submit(); // Submit the form
});
