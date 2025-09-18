document.addEventListener('DOMContentLoaded', function () {
    const name = localStorage.getItem('loggedInUserName');
    const display = document.getElementById('userNameDisplay');

    if (name && display) {
        display.textContent = name;
      } else {
        display.textContent = 'Guest';
    }
});