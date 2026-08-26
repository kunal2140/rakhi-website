function nextPage(number) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById("page" + number).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* NO BUTTON RUNS AWAY */

const noButton = document.getElementById("noButton");

if (noButton) {

    noButton.addEventListener("click", function() {

        const maxX = window.innerWidth - 130;
        const maxY = window.innerHeight - 80;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noButton.style.position = "fixed";
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
        noButton.style.zIndex = "999";
    });
}


/* GIFTS */

const messages = [

    "🎀 Gift 1: You deserve unlimited chocolate! 🍫",

    "❤️ Gift 2: I'll always be there to annoy you! 😂",

    "🌸 Gift 3: You are genuinely one of my favourite people! 🫶"

];

let openedGift = 0;

function openGift(number) {

    const message = document.getElementById("giftMessage");

    message.innerHTML = messages[number];

    openedGift++;

    if (openedGift >= 1) {

        document
            .getElementById("continueButton")
            .classList.remove("hidden");

    }
}
