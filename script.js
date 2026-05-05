// 1. Select the button element using its ID
const likeButton = document.getElementById('likeBtn');

// 2. Attach the 'click' event listener
likeButton.addEventListener('click', function() {
    // 3. Showcase the alert on the screen
    alert('You liked this post! 👍');
    
    // Optional: Change the button text after clicking
    likeButton.textContent = 'Liked!';
    likeButton.style.backgroundColor = '#e74c3c';
    likeButton.style.color = 'white';
});