document.addEventListener('DOMContentLoaded', function () {
    const name = localStorage.getItem('loggedInUserName');
    const display = document.getElementById('userNameDisplay');

    if (name && display) {
        display.textContent = name;
    } else {
        display.textContent = 'Guest';
    }

    const img = document.createElement('img');
    img.src = '/nature.png'; 
    img.alt = 'Nature';
    
    const container = document.getElementById("image-container");
    if (container) {
        container.appendChild(img);
    }
});
