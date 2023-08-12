const latest = document.getElementById("card_type_top");
const past = document.getElementById("card_type_bottom");
const select = document.getElementById("selection");

// this function is used to filter event section
select.addEventListener("change", function(){
    let selected = select.options[select.selectedIndex];

    if(selected.value == "latest"){
        latest.style.display = "flex";
        past.style.display = "none";
    } else {
        latest.style.display = "none";
        past.style.display = "flex";
    }
})

// this function is used to show all event
const all = document.getElementById("all");

all.addEventListener("click", function(event){
    event.preventDefault();
    latest.style.display = "flex";
    past.style.display = "flex";
})
