import './App.css';
function LoginForm() {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('email').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = {
        name: name,
        password: password,
        email: email
      };
    console.log("user",user)
    alert(`Logging in with:\nname: ${name}\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
   
  } )
}

export default LoginForm;