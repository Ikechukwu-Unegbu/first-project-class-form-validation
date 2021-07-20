//
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmp = document.getElementById('confirm');

form.addEventListener('submit', (event)=>{
  event.preventDefault();

  checkInputs();
})

function checkInputs(){
  const UsernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpValue = confirmp.value.trim();

  if(UsernameValue === ''){
    setErrorFor(username, 'Username cannot be blank');
  }else{
    setSuccessFor(username);
  }
  if(emailValue === ''){
    setErrorFor(email, 'email cannot be blank');
  }else{
    setSuccessFor(email);
  }
  if(passwordValue === ''){
    setErrorFor(password, 'password cannot be blank');
  }else{
    setSuccessFor(password);
  }
  if(confirmpValue === '' || confirmpValue!==passwordValue){
    setErrorFor(confirmp, 'this is either blank or didnt match password.');
  }else{
    setSuccessFor(confirmp);
  }
  console.log(confirmpValue!==passwordValue)
}

function setErrorFor(input, message){
   const formcontrol = input.parentElement;
   const small = formcontrol.querySelector('small');

   small.innerText = message;

   formcontrol.className = 'form-control failure';
}

function setSuccessFor(input){
  const formcontrol = input.parentElement;

  formcontrol.className = 'form-control success';
}