
const share = document.getElementById("shere-btn1")
const share2 = document.getElementById("shared-btn2")
const seccionCompartir = document.getElementById("Seccion-Compartir")
const redesMovile = document.getElementById("redesSocialesMovile")
const redesPC = document.getElementById("redesSocialesPC")

const mediaQuery = window.matchMedia("(min-width:768px)") 

if (mediaQuery.matches) {
    share.addEventListener("click", () => {
        if (redesPC.classList != "hidden") {
            redesPC.classList.add("hidden");
        } else {
            redesPC.classList.remove("hidden");
        }
})

} else {
    share.addEventListener("click", () => {
        redesMovile.classList.remove("hidden");
        seccionCompartir.style.display = "none";
    })
    share2.addEventListener("click", () => {
        seccionCompartir.style.display = "flex";
        redesMovile.classList.add("hidden");
    })
}

