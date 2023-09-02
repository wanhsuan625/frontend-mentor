const figure = document.querySelector('#figure');

let img_device_settin = () => {
    if( window.innerWidth > 991){
        figure_img.src = "../public/images/illustration-sign-up-desktop.svg";
        return;
    }
    figure_img.src = "../public/images/illustration-sign-up-mobile.svg";
}

// --- ADD img ELEMENT UNDER FIRUGE ELEMENT ---------
const figure_img = document.createElement('img');
figure_img.className = "figure__img";
img_device_settin();
figure.appendChild(figure_img);

// --- ADJUST figure_img RESOURCE -------------------
window.addEventListener( "resize" , () => {
    img_device_settin();
})