/*
    Name: Kumaarr, Kkshitij
    File Name: scripts.js
    Date: October 21, 2024
*/

//Hamburger Menu Function
function hamburger() {
    //Variable
    var menu = document.getElementById("menu-links");
    var mainContent = document.querySelector("main");
    var menuIcon = document.querySelector(".menu-icon");
    var backgroundImage = document.querySelector(".background_event");
    var body = document.body;
    var footer = document.querySelector(".footer");
    var subheading = document.querySelector(".subheading");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        mainContent.style.display = "block";
        
        if (subheading) {
            subheading.style.display = "block";
        }

        menuIcon.classList.remove("rotate");
        footer.style.position = "static";
        footer.style.display = "block";

        if (backgroundImage) {
            backgroundImage.style.display = "block";
        }

        body.style.backgroundColor = "";
    } else {
        menu.style.display = "block";
        mainContent.style.display = "none";
        
        if (subheading) {
            subheading.style.display = "none";
        }

        menuIcon.classList.add("rotate");
        footer.style.position = "fixed";
        footer.style.bottom = "0";
        footer.style.display = "block";

        if (backgroundImage) {
            backgroundImage.style.display = "none";
        }

        body.style.backgroundColor = "black";
    }
}

// Display Thank you Message Function - Form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const query = document.getElementById("query").value;
        const subscribe = document.getElementById("checkbox").checked; 

        thankYouMessage.style.display = "block";
        form.reset();
    });
});




