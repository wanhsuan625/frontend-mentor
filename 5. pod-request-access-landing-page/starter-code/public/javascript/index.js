const email_input = document.querySelector("#email-input");
const message = document.querySelector("#message");
const email_button = document.querySelector("#email-button");
const email_regex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

let message_style = ( element, display, text, color ) =>{
    element.style.display = display;
    element.textContent = text;
    element.style.color = color;
};

// INPUT EFFECT
email_input.addEventListener("input", () => {
    let email_value = email_input.value;
    message.style.display = "none";
})

// BUTTON EFFECT
email_button.addEventListener("click", () => {
    let email_value = email_input.value;

    if ( email_value != "" && email_regex.test(email_value)){
        // Check email can match regression
        message_style( message, "block", "Verificate Successfully!" , "#54E6AF");            
        return;
    }
        message_style( message, "block", "Oops! Please check your email", "#FB3E3E");
})  
