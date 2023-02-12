// step-1: add with event handler with the submit btn
document.getElementById('btn-submit').addEventListener('click', function (){
    // step-2: get the email address inside the input email field
    // always remember to use .value to get text from input field
    const inputField = document.getElementById('user-email');
    const email = inputField.value;
    // step-3: get password
    // 3.a: set id on the html element 
    // 3.b: get the element 
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   
    //DANGER: DO NOT VERIFY ON the client site

    // STEP-4: VERIFY EMAIL AND PASSWORD
    if(email == 'sontan@baap.com' && password == 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('wrong input email or password')
    }
})