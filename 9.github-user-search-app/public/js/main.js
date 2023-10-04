const search_input = document.querySelector("#searchInput");
const close_icon = document.querySelector("#closeIcon");

// let mode_match = window.matchMedia("( prefers-color-scheme )");

// Search Bar - clear input content
search_input.addEventListener( "input" , ()=> {
    close_icon.style.display = search_input.value === "" ? "none" : "inline";
})

close_icon.addEventListener( "click" , ()=> {
    search_input.value = "";
    close_icon.style.display = "none";
})