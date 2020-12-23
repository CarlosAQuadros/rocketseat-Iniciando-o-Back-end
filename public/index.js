
const button = document.querySelector(".moreAboutButton")

///modallll
var modal = document.querySelector("#modalOverlay")
var whiteModal = document.querySelector(".modal")

console.log(button);

button.addEventListener('click',function(){
console.log("clicado");


});

function openModal(){
    modal.classList.add("openModal")
    setTimeout(function(){
        modal.classList.add("defModal");
        modal.classList.remove("modalOverlay");
        modal.classList.remove("openModal");
}, 2100);
    setTimeout(function(){whiteModal.classList.add("whiteModal")}, 1500);
}

function closeModal(){

        modal.classList.remove("defModal");
        modal.classList.add("modalOverlay");
        whiteModal.classList.remove("whiteModal")
    
}

 