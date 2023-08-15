const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// show error message
function showError(input, message){
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control error';
  const small = formcontrol.querySelector('small');
  small.innerText = message;

}

//showSuccess  message
function showSuccess(input){
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control success';
}




// email vaild 
function vaildEmail (input){
  const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value.trim())){
    showSuccess(input);
   }
   else{
    showError(input, 'Email is not valid');
   }
}

// check required
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim()=== ''){
      showError(input, `${input.id} is required`)
    }
    else{
      showSuccess(input);
    }
  })
}

// check input length
function checkLength(input , min, max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} Charcters`);
  }
  else if (input.value.length > max){
    showError(input, `${getFieldName(input)} must be at less than ${max} Charcters`);
  }
  else{
    showSuccess(input);
  }
}

// get field name 
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// get password check

 function checkPassword (input){
 
  const regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
  if(regularExpression.test(input.value.trim())){
    showSuccess(input);
   }
   else{
    showError(input, 'Password is not valid');
   }
 }

// event listeners

form.addEventListener('submit' ,function(e) {
  e.preventDefault();

  
checkRequired([username, email, password,]);
checkLength(username, 3, 10);
checkLength(password, 8,15);


vaildEmail(email);

checkPassword(password);
  
});

