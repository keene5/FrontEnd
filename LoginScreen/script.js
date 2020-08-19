const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const inputArray = [username, email, password, password2];




//Methods functions

function isEmpty(str) {
    console.log('isempty');
    return !str.trim().length;
}

//Check required fields

function checkRequiredFields(inputArray){
    inputArray.forEach(function(input){
        if(isEmpty(input.value)){
            console.log('hello');
            showError(input, `${input.id} is required`);
        }
        else{
            showSuccess(input);
        }
    })
}


function showError(input, message){
    console.log('errorFunction');
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    //Place Error on page
    small.innerText = message;
}

function showSuccess(input){
    console.log('SuccessFunction');
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    // Clears error
    small.innerText = '';
}


// Event Listeners
form.addEventListener('submit',function(e){
    // Prevents default submit when no data entered
    e.preventDefault();
    //clearFormsControl();

    checkRequiredFields(inputArray);
});
