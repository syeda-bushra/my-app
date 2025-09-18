document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

  const users = [
    { name: 'Bushra', email: 'syedabush2022@gmail.com', password: '12345!' },
    { name: 'Dua', email: 'duaezainab123@gmail.com', password: '54321' },
    { name: 'Huda', email: 'noorhuda@gmail.com', password: '12345' },
    { name: 'Tooba', email: 'toobareej123@gmail.com', password: '9876' },
    { name: 'Sidra', email: 'sidramzan123@gmail.com', password: '6789' },
  ];


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!name || !email || !password){
      alert(`All fields are mandatory`);
      return;
    }

    const nameonly = /^[A-Za-z ]+$/;
    if (!nameonly.test(name)){
      alert(`Name must contain only alphabets`);
      return;
    }

    const emailonly = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailonly.test(email)){
      alert(`Please enter a valid email address`);
      return;
    }
  

    const user = users.find(
      (u) => u.email === email && u.password === password);

    if (user) {
      alert(`Login successful! Welcome, ${user.name}`);
      localStorage.setItem('loggedInUserName', user.name);
      window.location.href = 'dashboard.html';
      
    } else {
      alert('Login Failed! Incorrect email or password.');
    }

    loginForm.reset();
  });
});
