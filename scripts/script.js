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

function seePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.innerHTML = "visibility";
    } else {
        passwordInput.type = "password";
        passwordIcon.innerHTML = "visibility_off";
    }
}

function userArray() {
    if (userInput.value === "GhostxRonin" && passwordInput.value === "imthebestattowerfall22") {
        userName.innerHTML = "GhostxRonin";
        pfpImg.src = "img/resources/users/ghostxronin.png";
        loginButton.style.display = "none";
        toggleLogin();
    }

    if (userInput.value === "HinduNosan" && passwordInput.value === "50kgAllDay") {
        userName.innerHTML = "HinduNosan";
        pfpImg.src = "img/resources/users/hindunosan.png";
        loginButton.style.display = "none";
        toggleLogin();
    }

    if (userInput.value === "yxnyans" && passwordInput.value === "ihaveacrushonventi") {
        userName.innerHTML = "yxnyans";
        pfpImg.src = "img/resources/users/yanna.png";
        loginButton.style.display = "none";
        toggleLogin();
    }

    if (userInput.value === "Decipher" && passwordInput.value === "quandaledingleton") {
        userName.innerHTML = "Decipher";
        pfpImg.src = "img/resources/users/decipher.png";
        loginButton.style.display = "none";
        toggleLogin();
    }

    if (userInput.value === "DigitalExcalibur" && passwordInput.value === "ispitrizzlmao") {
        userName.innerHTML = "DigitalExcalibur";
        pfpImg.src = "img/resources/users/digitalexcalibur.png";
        loginButton.style.display = "none";
        toggleLogin();
    }

    if (userInput.value === "Zamurasashi" && passwordInput.value === "jiggitydiggitysquandaleousIII") {
        userName.innerHTML = "Zamurasashi";
        pfpImg.src = "img/resources/users/zamurasashi.png";
        loginButton.style.display = "none";
        toggleLogin();
    } else {
        toggleLogin();
    }
}

function toggleLogin() {
    loginHolder.classList.toggle("active");
}