const $CARDS = document.querySelectorAll(".card")

$CARDS.forEach(card => {
    card.addEventListener("mouseover", (e)=>{
        console.log(e);
        if (e.isTrusted) {
            card.classList.toggle("active")
        }
    })
})
