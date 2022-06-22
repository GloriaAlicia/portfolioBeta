const openMobil = document.getElementById("openMobil");
const contentMenu = document.getElementById("content");
const $form = document.getElementById("form");
const $sendButton = document.getElementById("sendButton");


openMobil.addEventListener("click", ()=>{
    contentMenu.classList.toggle("hidden");
})
/***************validar */
function noEmptyData(inputs){
    if (inputs.length != 0){
        return  true;
     } else {
        return false
     }
}

$sendButton.addEventListener("click",()=>{
    if(noEmptyData($form.name.value) && noEmptyData($form.email.value) && noEmptyData($form.message.value)){
        alert("bien")
        // $sendButton.disabled = false;
    
    } else {
        alert("no estan llenos todos los campos")
        // $sendButton.disabled = true;
    }
})

$form.addEventListener("submit",(e)=>{
    sendMenssage(e);
});

async function sendMenssage(e){
    e.preventDefault()
    const info = new FormData(e.target)
    const response = await fetch(e.target.action,{
        method: $form.method,
        body: info,
        headers: {
            "Accept": "application/json"
        }
    })
    if(response.ok){
        alert("Gracias por contactar :)")
        $form.reset()
    }
}