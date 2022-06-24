document.body.addEventListener("change",(e)=>{
    const choose = document.querySelector("input[name='slider']:checked");
    const $hangman = document.getElementById("contentHangmanGame");
    const $notes = document.getElementById("contentNotes");

    if(e.target.matches("[name='slider']")){
        if(choose.value == "hangmanGame"){
            $hangman.classList.remove("hidden");
            $notes.classList.add("hidden");
        }
        if(choose.value == "notes"){
            $notes.classList.remove("hidden");
            $hangman.classList.add("hidden");
        }
    }
})