const search = document.getElementById("search_bar");

// this function is used to check the input entered in the search bar.
search.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        console.log("enter pressed");
        event.preventDefault();
        search_enter_pressed();
    }
})

// change place holder of search bar
function search_enter_pressed(){
    search.value = '';
    search.placeholder = "not found";
}

const pricing = document.getElementById("pricing");

// move page to "pricing.html" when user click on PRICING button
pricing.addEventListener("click", function(){
    window.location.href = "../html/pricing.html";
})

const newsletter = document.getElementById("newsletter");

newsletter.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        console.log("pressed");
        event.preventDefault();
        validationNews();
    }
})

// validate newsletter input form
function validationNews(){
    let inputVal = newsletter.value; let counter = 0;
    let warning = document.getElementById("email_info");

    for(let i = 0; i < inputVal.length; i++){
        if(inputVal[i] == '@'){
            counter += 1;
        }
    }
    if(counter != 1){
        warning.innerHTML = "Invalid Email";
    } else if(inputVal.slice(inputVal.length - 4) != ".com") {
        warning.innerHTML = "Invalid Email";
    } else {
        warning.innerHTML = "Thanks for subscribing to our newsletter";
        document.getElementById("newsletter").value = ' ';
        window.alert("enter to continue ...");
    }
}

// this function is used to show navigation bar when burger icon is clicked and show icon when screen is <= 480px
const media = window.matchMedia("(max-width: 480px)");
const burger = document.getElementById("burger_icon");
const nav = document.getElementById("nav_word");
let check = 0; // check the burger icon has been clicked for the first time or not.

media.addEventListener("change", function(){
    if(media.matches){
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
})

burger.addEventListener("click", function(){
    if(nav.style.display == "none" || check == 0){
        nav.style.display = "flex";
        check += 1;
    } else {
        nav.style.display = "none";
    }
})

