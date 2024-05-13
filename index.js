
const buttonShare = document.getElementById("share-btn")
const buttonShare2 = document.getElementById("shere-btn-2")
const redesSociales = document.getElementById("redesSociales")


buttonShare.addEventListener("click", () => {
    redesSociales.classList.toggle("hidden");
    
    if (!redesSociales.classList.contains("hidden")) {
        buttonShare.classList.add("active");
    } else {
        buttonShare.classList.remove("active");
    }
})

buttonShare2.addEventListener("click", () => {
    redesSociales.classList.toggle("hidden");
    buttonShare.classList.remove("active");
})

