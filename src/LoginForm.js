import './App.css';

function LoginForm() {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Email:",email)
    console.log("Password:",password)
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  } )
}

export default LoginForm;
