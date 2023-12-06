// Add an event listener to the form with the id 'feedbackForm' when it is submitted
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form elements
    const name = document.getElementById('name').value; // Get the value of the 'name' input field
    const email = document.getElementById('email').value; // Get the value of the 'email' input field
    const rating = document.getElementById('rating').value; // Get the value of the 'rating' input field
    const comments = document.getElementById('comments').value; // Get the value of the 'comments' input field

     // Display the submitted information on the page
     const feedbackInfo = document.getElementById('feedbackInfo'); // Get the element to display feedback information
     feedbackInfo.innerHTML = `
         <h3>Submitted Information:</h3>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Rating:</strong> ${rating}</p>
         <p><strong>Comments:</strong> ${comments}</p>
     `; // Display submitted information as HTML

    // Display a confirmation message
    document.getElementById('feedbackMessages').innerHTML = '<p>Thank you for your feedback!</p>'; // Display a thank you message
});
