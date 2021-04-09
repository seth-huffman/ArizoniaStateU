
var current = document.querySelector(".current");

current.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});