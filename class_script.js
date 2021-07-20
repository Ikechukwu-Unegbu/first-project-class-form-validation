const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');
const email = document.getElementById('email');

form.addEventListener('submit',(event)=>{
  event.preventDefault();

  checkInputs();
});

function checkInputs(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = confirmPassword.value.trim();
  
  // console.log(usernameValue);
  // console.log(emailValue);
  // console.log(passwordValue);
  // console.log(confirmValue);

  if(usernameValue===''){
    setError(username, 'Username cannot be fucking empty.');
  }else{
    setSuccess(username)
  }
  
  if(emailValue===''){
    setError(email, 'Put a damn email, you donkey.');
  }else{
    setSuccess(email);
  }

  if(passwordValue==='' || passwordValue.length <6){
    let msg = '';
    (passwordValue==='')?msg='Password field is empty':msg ='Password cannot be less than six characters.';
    setError(passwordValue, msg);
  }else{
    setSuccess(password);
  }

  if(confirmValue===''|| confirmValue!==passwordValue){
    msg = '';
    (confirmValue==='')?msg="This field cannot be empty.":msg= "This must match with password";
    setError(confirmPassword, msg);
  }else{
    setSuccess(confirmPassword);
  }
}


function setError(tartgetElement, message){
  const parentEl = tartgetElement.parentElement;
  const smallEl = parentEl.querySelector('small');
  smallEl.innerText = message;
  parentEl.className = 'form-control failure';
}


function setSuccess(tartgetElement){
  const parentEl = tartgetElement.parentElement;
  parentEl.className = 'form-control success'
}