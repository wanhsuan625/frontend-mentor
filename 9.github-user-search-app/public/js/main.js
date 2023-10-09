// VARIABLES =================================================
// Search bar variables
const search_input = document.querySelector("#searchInput");
const close_icon = document.querySelector("#closeIcon");
const error_message = document.querySelector("#errorMessage");
const search_button = document.querySelector("#searchButton");
// Individual variables
const avatar = document.querySelector("#avatar");
const username = document.querySelector("#username");
const userlink = document.querySelector("#userlink");
const joined_date = document.querySelector("#joinedDate");
const bio = document.querySelector("#bio");
// Github variables
const repo = document.querySelector("#repo");
const follower = document.querySelector("#follower");
const following = document.querySelector("#following");
// Social variables
const site = document.querySelector("#site");
const website = document.querySelector("#website");
const twitter = document.querySelector("#twitter");
const company = document.querySelector("#company");

// Search Bar ============================================
// clear input content
search_input.addEventListener( "input" , ()=> {
    close_icon.style.display = search_input.value === "" ? "none" : "inline";
    error_message.classList.add("hidden");
})
close_icon.addEventListener( "click" , ()=> {
    search_input.value = "";
    error_message.classList.add("hidden");
    close_icon.style.display = "none";
})

// GITHUB API ============================================
async function fetchData(user){
    const res = await fetch(`https://api.github.com/users/${user}`);
    const getUser = await res.json();   

    // user not exsits
    if( getUser.message ){
        error_message.classList.remove("hidden");
        return;
    }
    return getUser;
}

// transform date
let transformDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let inputDate = date.substring(0,10).split("-");
    let outputDate = inputDate[2] + " " + months[parseInt(inputDate[1]-1)] + " " + inputDate[0];
    return outputDate;
}

let getData = (user) => {
    fetchData(user)
        .then( data => {
        // individual information
        avatar.src = data.avatar_url;
        username.textContent = ( data.name === null ) ? data.login : data.name;
        userlink.textContent = "@" + data.login;
        joined_date.textContent = "Joined " + transformDate(data.created_at);

        // biography
        bio.textContent = (data.bio === null) ? "This profile has no bio" : data.bio;

        // github repository and following situation
        repo.textContent = data.public_repos;
        follower.textContent = data.followers;
        following.textContent = data.following;

        // social media
        let lack_of_information = ( variable , api_name ) => {
            if( data[api_name] === null ){
                variable.textContent = "No Available";
                variable.parentElement.style.opacity = 0.3;   // 用 parentElement 將整個區域做opacity的效果
            }else{
                variable.textContent = data[api_name];
                variable.parentElement.style.opacity = 1;
            }
        }
        lack_of_information( site , "location" );
        lack_of_information( website , "html_url" );
        website.href = data.html_url;
        lack_of_information( twitter , "twitter_username" );
        lack_of_information( company , "company" );
    })
};

search_button.addEventListener( "click" , () => {
    if(search_input.value === "" ) return;
    getData( search_input.value );
})
search_input.addEventListener( "keydown" , (e) => {
    if(search_input.value === "" ) return;
    if( e.key === "Enter" ) getData( search_input.value );
})

// Default
getData("wanhsuan625");