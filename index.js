const navBar = document.getElementById("navBar");
const whyCon = document.getElementById("why-con");
const btn = document.getElementsByTagName("button");

function showMobileNav() {
    if (navBar.className === "nav-bar") {
        navBar.className += " mobile";
    } else {
        navBar.className = "nav-bar";
    }
}