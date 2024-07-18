var view = document.getElementById("view");
var controls = document.getElementById("controls");
var controlsToggle = document.getElementById("controlsToggle");
var music = document.getElementById("music");

var bgBtn1 = document.getElementById("bgBtn1");
var bgBtn2 = document.getElementById("bgBtn2");

var musicBtn1 = document.getElementById("musicBtn1");
var musicBtn2 = document.getElementById("musicBtn2");

controlsToggle.addEventListener("click", () => {
    if (controls.classList.contains("hide")) {
        controls.classList.remove("hide");
        controlsToggle.innerText = "Đóng";
    }
    else {
        controls.classList.add("hide");
        controlsToggle.innerText = "Mở";
    }
});

bgBtn1.addEventListener("click", () => {
    view.style.backgroundImage = "url(images/background.png)";
});

bgBtn2.addEventListener("click", () => {
    view.style.backgroundImage = "url(images/background2.jpg)";
});

musicBtn1.addEventListener("click", () => {
    music.src = "music/1.mp3";
    music.play();
});

musicBtn2.addEventListener("click", () => {
    music.src = "music/2.mp3";
    music.play();
});