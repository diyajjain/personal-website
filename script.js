const navbar = document.querySelector('.navbar')
const menuIcon = document.querySelector(".menu-icon")
const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links



window.addEventListener("scroll",()=> {
    if(window.innerWidth <= 820 && navbar.classList.contains("hamburger")) {
        navbar.classList.remove("sticky")
    } else {
        navbar.classList.toggle("sticky", window.scrollY > 0)
    }

    if(window.scrollY > 0) {
        menuIcon.classList.add("position")
    } else {
        menuIcon.classList.remove("position")
    }

    if(navbar.classList.contains("hamburger")) {
        menuIcon.classList.remove("position")
    }
    
})

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("hamburger")
    navbar.classList.remove("sticky")

    if (!navbar.classList.contains("hamburger") && window.scrollY !== 0) {
        navbar.classList.add("sticky")
        menuIcon.classList.add("position")
    } else {
        menuIcon.classList.remove("position")
    }
})


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("hamburger");
    });
});