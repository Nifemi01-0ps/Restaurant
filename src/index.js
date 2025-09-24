alert("index.js is running");
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

function init() {
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const aboutBtn = document.querySelector("#about-btn");
    //  Default page
    loadHome();
    // Event listner 
    homeBtn.addEventListener("click", loadHome);
    menuBtn.addEventListener("click", loadMenu);
    aboutBtn.addEventListener("click", loadAbout);
}

init();
