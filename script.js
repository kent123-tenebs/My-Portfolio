/* =====================================================
   PRELOADER
===================================================== */

console.log("JavaScript is successfully linked!");

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 800);

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "BSIT STUDENT",
    "HARDWORKING PERSON",
    "RESPECTFUL PERSON",
    "RESPONSIBLE PERSON"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

/* =====================================================
   ABOUT CARD FLIP
===================================================== */

const aboutCard = document.querySelector(".about-card");

function toggleAboutCard() {
    const isFlipped = aboutCard.classList.toggle("is-flipped");
    aboutCard.setAttribute("aria-pressed", String(isFlipped));
}

aboutCard.addEventListener("click", toggleAboutCard);

aboutCard.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAboutCard();
    }
});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));

});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");

    });

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

const skillBars =
    document.querySelectorAll(".skill-progress");


const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width = width;

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const cursorOutline =
    document.querySelector(".cursor-outline");


document.addEventListener("mousemove", event => {

   if (!cursor || !cursorOutline) {
       return;
   }

   cursor.style.left =
       event.clientX + "px";

   cursor.style.top =
       event.clientY + "px";


    cursorOutline.animate(
        {
            left: event.clientX - 17 + "px",
            top: event.clientY - 17 + "px"
        },
        {
            duration: 400,
            fill: "forwards"
        }
    );

});


/* =====================================================
   CURSOR HOVER EFFECT
===================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button, input, textarea"
    );


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        if (!cursorOutline) {
            return;
        }

        cursorOutline.style.width = "55px";
        cursorOutline.style.height = "55px";

    });


    element.addEventListener("mouseleave", () => {

        if (!cursorOutline) {
            return;
        }

        cursorOutline.style.width = "35px";
        cursorOutline.style.height = "35px";

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    formMessage.textContent =
        "Thank you! Your message has been received.";


    contactForm.reset();


    setTimeout(() => {

        formMessage.textContent = "";

    }, 4000);

});