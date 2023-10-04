const mode_toggle = document.querySelector("#modeContainer");
const mode_text = document.querySelector("#modeText");
const mode_icon = document.querySelector("#modeIcon");
let isDarkMode = false;

let enableDarkMode = () => {
    document.body.classList.add("darkmode");
    mode_text.textContent = 'LIGHT';
    mode_icon.src = './public/image/icon-sun.svg';
    isDarkMode = true;
}
let disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    mode_text.textContent = 'DARK';
    mode_icon.src = './public/image/icon-moon.svg';
    isDarkMode = false;
}

mode_toggle.addEventListener( "click" , () => {
    if( isDarkMode ){
        disableDarkMode();
    }else{
        enableDarkMode();
    }
})