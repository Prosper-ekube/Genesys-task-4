const navBar = document.getElementById("navBar");
const whyCon = document.getElementById("why-con");
/*const headingP = document.getElementById("heading__p").innerHTML;*
const firstSubP = document.getElementsById("first-sub__p").innerHTML;
const middleSubP = document.getElementById("middle-sub__p").innerHTML;
const lastSubP = document.getElementById("last-sub__p").innerHTML;

if (window.innerWidth < 426) {
    document.getElementById("heading__p").innerText = "An award-winning fintech"
}*/

function showMobileNav() {
    if (navBar.className === "nav-bar") {
        navBar.className += " mobile";
    } else {
        navBar.className = "nav-bar";
    }
}