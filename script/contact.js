// variable that used to store input field value
const names = document.getElementById("names");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const phone_specific = document.getElementById("specific_phone");
const email_specific = document.getElementById("specific_email");
const age = document.getElementById("slider");
const desc = document.getElementById("message");
const checkbox = document.getElementById("accept");

// variable to store paragraph tag from input that will be used for warning message
const error_info = document.getElementById("error_info");
const submit = document.getElementById("send_button");
const valueAge = document.getElementById("ageValue");

// form
const form = document.getElementById("input_form_contact");

form.addEventListener("input", function(){
    let prefered = document.getElementById("prefered_contact");
    if(phone_specific.checked == false && email_specific.checked == false){
        prefered.innerHTML = "* please ensure that at least one field is filled.";
    } else {
        prefered.innerHTML = " ";
    }
})

submit.addEventListener("click", function(event){
    event.preventDefault();
    validateFunction();
})

names.addEventListener("input", function(){
    let temp = nameValidation();
})

email.addEventListener("input", function(){
    let temp = emailValidation();
})

phone.addEventListener("input", function(){
    let temp = phoneValidation();
})

age.addEventListener("input", function(){
    valueAge.innerHTML = age.value;
})

function validateFunction(){
    let empty = false;
    // this selection is used to validate whether the fields of information have already been filled or not.
    if(names.value == '' || email.value == '' || phone.value == '' || Number(age.value) != Number(valueAge.innerHTML) || desc.value == '' || checkbox.checked == false || (phone_specific.checked == false && email_specific.checked == false)){
        error_info.innerHTML = "* all fields of information are required";
        empty = true;
    }

    // condition when all field is filled
    console.log(empty);
    let checkName = nameValidation();
    let checkEmail = emailValidation();
    let checkAge = ageValidation();
    let checkPhone = phoneValidation();
    let checkAccept = acceptValidation();

    if(checkName == true && checkEmail == true && checkPhone == true && checkAge == true && checkAccept == true && empty == false){
        // document.getElementById("input_form_contact").reset();
        window.alert("Thank you for your understanding, and we apologize for any inconvenience caused. We will make sure to contact you as soon as possible.")
        return;
    } else if(empty == true){
        error_info.innerHTML = "* please check required field again.";
    }
}

// 1. this function is used to check name must consist at least 3 characters
function nameValidation(){
    let nameString = String(names.value);
    let warning = document.getElementById("name_warning");

    if(nameString.length < 3){
        warning.innerHTML = "* name must consist at least 3 characters."
        return false;
    }
    warning.innerHTML = " ";
    return true;
}

/*
    2. this function is used to validate an email address, checking if it
    ends with ".com", contains at least one "@" character, and ensures that there
    are no special characters such as "! # $ % *" except for "." and "_"
.*/
function emailValidation(){
    let emailString = String(email.value);
    let warning = document.getElementById("email_warning");
    let counter = 0;
    for(let i = 0; i < emailString.length; i++){
        let temp = emailString[i];
        if((temp.toUpperCase() >= 'A' && temp.toUpperCase() <= 'Z') || emailString[i] == '_' || emailString[i] == '.' || (emailString[i] >= '0' && emailString[i] <= '9')){
            continue;
        } else if(emailString[i] == '@'){
            counter += 1;
            if(counter > 1 || emailString[i - 1] == '.'){
                counter += 2;
                break;
            }
        } else {
            console.log(counter);
            counter += 5;
            break;
        }
    }

    if(counter == 0){
        warning.innerHTML = "* '@' is required";
        return false;
    } else if(counter == 1 && emailString.length > 8){
        if(emailString.slice(emailString.length - 4) == ".com" && emailString[emailString.length - 5] != '.' && emailString[emailString.length - 5] != '@'){
            warning.innerHTML = " ";
            return true;
        }
    }
    warning.innerHTML = "* email format is wrong, must end with '.com'";
    return false;
}

// 3. this function is used to check whether the phone number has followed the specified input format or not.
function phoneValidation(){
    let counter = 0;
    let alpha = 0;
    let text = String(phone.value);
    let warning = document.getElementById("phone_warning");
    console.log(text[0], text[1]);
    if(text[0] != '0' || text[1] != '8'){
        console.log("phone number doesn't start with '08");
        warning.innerHTML = "* phone number must start with 08, it might be a space";
        return false;
    }

    for(let i = 0; i < text.length; i++){
        if(text[i] == '-'){
            counter += 1;
        } else if(!(text[i] >= '0' && text[i] <= '9')){
            alpha += 1;
        }
    }

    if(alpha != 0 || counter != 2 || text[4] != '-' || text[9] != '-'){
        warning.innerHTML = "* phone number only contain digit / invalid format / without space.";
        return false;
    }
    warning.innerHTML = " ";
    return true;
}

// 4. this function is used to validate the age, determine whether the user has modified the slider range or not.
function ageValidation(){
    var warning = document.getElementById("age_warning");
    if(Number(age.value) != Number(valueAge.innerHTML)){
        warning.innerHTML = "* please update your age."
        return false;
    } else if(age.value < 18){
        warning.innerHTML = "* app is not intended for children under 13"
        return false;
    }
    warning.innerHTML = "";
    return true;
}

// 5. this function is used to validate if user already check on agreement field or not
function acceptValidation(){
    var warning = document.getElementById("accept_warning");
    if(checkbox.checked == false){
        warning.innerHTML = "* you are required to check agreement field.";
        return false;
    }
    warning.innerHTML = "";
    return true;
}
