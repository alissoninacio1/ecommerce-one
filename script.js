const bar = document.querySelector(".menu-icon");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}