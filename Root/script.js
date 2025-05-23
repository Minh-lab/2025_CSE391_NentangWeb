let email = document.querySelector("#email");
let password = document.querySelector("#password");
let formInput = document.querySelector("#input");

formInput.addEventListener('submit', (e)=>{
    e.preventDefault();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    if(emailValue === '' || emailValue === null){
        setError(email, "Invalid Email!");
    }
    else
        setSuccess(email)

    
    if(passwordValue === '' || passwordValue === null)
        setError(password, "Invalid Password!");
    else
        setSuccess(password)
})


function setError(input, message){
    let formControl = input.parentElement;
    formControl.classList.remove("success");
    formControl.classList.add("error");
    formControl.querySelector(".bi-exclamation-lg").style.visibility = "visible";
    let errorInform = formControl.querySelector(".errorInform");
    errorInform.textContent = message;
    errorInform.style.display = "block"
}

function setSuccess(input){
    let formControl = input.parentElement;  
    formControl.classList.remove("error");
    formControl.classList.add("success");
    formControl.querySelector(".bi-check2").style.visibility = "visible";
    formControl.querySelector(".bi-exclamation-lg").style.visibility = "hidden";
    let errorInform = formControl.querySelector(".errorInform");
    errorInform.style.display = "none"
}