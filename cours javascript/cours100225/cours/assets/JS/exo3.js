const btn = document.querySelector(".btn")
const p= document.querySelector(".paragraphe")

btn.addEventListener("click", () => {
    p.classList.toggle("p1");
});

p.addEventListener("mouseenter", () => {
    // p.style.margintop = ("100px")
    p.classList.toggle("p2");
});
