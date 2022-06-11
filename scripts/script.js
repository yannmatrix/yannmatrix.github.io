//code goes here
let limitBottom = document.documentElement.offsetHeight - window.innerHeight;

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 500) {
        navBar.style.fontSize = "8px";
        navBar.style.padding = "6px";
    } else {
        navBar.style.fontSize = "16px";
        navBar.style.padding = "12px";
    }
})