const figure = document.querySelector("#figure");
const email_input = document.querySelector("#email-input");
const email_button = document.querySelector("#email-button");
const email_message = document.querySelector('#email-message');
const email_regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

// refresh page , input set empty value - Firefox 
document.addEventListener( "DOMContentLoaded", () => {
    email_input.value = "";
})

let img_device_set = () => {
    if( window.innerWidth > 991){
        figure_img.src = "../public/images/illustration-sign-up-desktop.svg";
        return;
    }
    figure_img.src = "../public/images/illustration-sign-up-mobile.svg";
}

let email_check_valid = ( text ) => {
    email_message.style.display = "inline-block";
    email_message.textContent = text;
    email_input.classList.add("email__invalid");
}

// --- ADD img ELEMENT UNDER FIRUGE ELEMENT ---------
const figure_img = document.createElement('img');
figure_img.className = "figure__img";
img_device_set();
figure.appendChild(figure_img);

// ADJUST figure_img RESOURCE
window.addEventListener( "resize" , () => {
    img_device_set();
})


// --- VALID EMAIL ----------------------------------
email_button.addEventListener( "click" , () => {
    // take email value
    let email_value = email_input.value;

    if( !email_value ){
        email_check_valid("Please enter email address.");
        return;
    }
    else if( email_regex.test( email_value ) == false ){
        email_check_valid("Valid email required");
        return;
    }
    console.log(email_value);
})

// recover email input css after error message
email_input.addEventListener( "focus" , () => {
    console.log("hehe");
    if ( email_input.classList.contains( "email__invalid" ) ){
        email_message.style.display = "none";
        email_input.classList.remove( "email__invalid" );
        return;
    }
})