//code goes here
let limitBottom = document.documentElement.offsetHeight - window.innerHeight;
var windowHeight = 500;

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > windowHeight) {
        navBar.style.fontSize = "8px";
        navBar.style.padding = "6px";
    } else {
        navBar.style.fontSize = "16px";
        navBar.style.padding = "12px";
    }
})