const standard = document.getElementById("standard_js");
const gold = document.getElementById("gold_js");
const platinum = document.getElementById("platinum_js");
const custom = document.getElementById("custom_js");

const standard_scroll = document.getElementById("standard_scroll");
const gold_scroll = document.getElementById("gold_scroll");
const platinum_scroll = document.getElementById("platinum_scroll");

// this function is used to scroll page to specific element with ID
standard.addEventListener("click", function(){
    standard_scroll.scrollIntoView({block: "start", behavior: "smooth"});
})

gold.addEventListener("click", function(){
    gold_scroll.scrollIntoView({block: "start", behavior: "smooth"});
})

platinum.addEventListener("click", function(){
    platinum_scroll.scrollIntoView({block: "start", behavior: "smooth"});
})
