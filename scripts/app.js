document.addEventListener("DOMContentLoaded", () => {
    const openMobil = document.getElementById("openMobil");
    const $contentMenu = document.getElementById("content");
    const $form = document.getElementById("form");
    const $sendButton = document.getElementById("sendButton");
    const $menuMobil = document.querySelector(".menu-mobil");
    const $formAlerts = document.getElementById("form_alerts");


    openMobil.addEventListener("click", () => {
        $contentMenu.classList.toggle("hidden");
    })

    $contentMenu.addEventListener("click", (e) => {
        if (e.target.matches(".menu-mobil_element_link a")) {
            $contentMenu.classList.add("fadeElement");
            setTimeout(() => {
                $contentMenu.classList.add("hidden");
                $contentMenu.classList.remove("fadeElement");
            }, 500);
        }
    })

    function noEmptyData(inputs) {
        if (inputs.length != 0) {
            return true;
        } else {
            return false;
        }
    }

    $sendButton.addEventListener("click", () => {
        if (noEmptyData($form.name.value) && noEmptyData($form.email.value) && noEmptyData($form.message.value)) {
            $formAlerts.classList.add("hidden");
        } else {
            $formAlerts.textContent = "no estan llenos todos los campos";
        }
    })

    $form.addEventListener("submit", (e) => {
        sendMenssage(e);
    });

    async function sendMenssage(e) {
        e.preventDefault()
        const info = new FormData(e.target)
        const response = await fetch(e.target.action, {
            method: $form.method,
            body: info,
            headers: {
                "Accept": "application/json"
            }
        })
        if (response.ok) {
            $formAlerts.textContent = "Me contactaré de inmediato con usted"
            $form.reset()
        }
    }
})