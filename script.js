let dubaiText = document.getElementById("dubaitext");
let burjk = document.getElementById("burjk");
let stars = document.getElementById("stars");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    dubaiText.style.left = value * -2 + "px";
    burjk.style.top = value * 1 + "px";
    stars.style.top = value * 1 + "px";
});

function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}
