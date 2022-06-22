let openMobil = document.getElementById("openMobil");
let contentMenu = document.getElementById("content");


openMobil.addEventListener("click", ()=>{
    console.log("abrir");

    contentMenu.classList.toggle("hidden");
})