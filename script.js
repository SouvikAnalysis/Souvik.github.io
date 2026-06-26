/* ==========================================================
   PORTFOLIO JAVASCRIPT
   Part 1
========================================================== */


/* ==========================================================
   MOBILE MENU
========================================================== */

const hamburger = document.querySelector(".hamburger");

const mobileMenu = document.querySelector(".mobile-menu");


if (hamburger && mobileMenu) {

    hamburger.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


/* Close Mobile Menu After Clicking */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});





/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});






/* ==========================================================
   ACTIVE NAVBAR LINK
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});






/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

    }

    else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});






/* ==========================================================
   STICKY HEADER SHADOW
========================================================== */

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

    }

    else {

        header.style.boxShadow = "none";

    }

});
/* ==========================================================
   DARK / LIGHT THEME
========================================================== */

const themeToggle = document.getElementById("theme-toggle");

const body = document.body;


/* Load Saved Theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light-theme");

    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

}

else {

    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

}


/* Toggle Theme */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-theme");


    if (body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

    }

    else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

    }

});
/* ==========================================================
   TYPING ANIMATION
========================================================== */

const typingText = document.getElementById("typing-text");

const words = [

    "Data Analyst",

    "Power BI Developer",

    "Business Intelligence Analyst",

    "SQL Developer",

    "Dashboard Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    }

    else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();







/* ==========================================================
   COUNTER ANIMATION
========================================================== */

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const text = counter.innerText;

        const number = parseFloat(text);

        const hasPlus = text.includes("+");

        const decimal = text.includes(".");

        let count = 0;

        const speed = number / 60;

        const update = () => {

            count += speed;

            if (count < number) {

                counter.innerText =
                    decimal
                    ? count.toFixed(1)
                    : Math.floor(count);

                if (hasPlus) {

                    counter.innerText += "+";

                }

                requestAnimationFrame(update);

            }

            else {

                counter.innerText = text;

            }

        };

        update();

    });

}







/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealItems = document.querySelectorAll(

    ".about-content," +
    ".about-info," +
    ".stat-card," +
    ".skill-card," +
    ".timeline-item," +
    ".project-card," +
    ".certificate-card," +
    ".achievement-card," +
    ".contact-card," +
    ".contact-form"

);


const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);


revealItems.forEach(item => {

item.classList.add("hidden");

revealObserver.observe(item);

});







/* ==========================================================
   START COUNTER WHEN SECTION IS VISIBLE
========================================================== */

const statistics = document.querySelector(".statistics");

if(statistics){

const statsObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

}

});

},

{

threshold:0.5

}

);

statsObserver.observe(statistics);

}

/* ==========================================================
   EMAILJS INITIALIZATION
========================================================== */

/*
-------------------------------------------------------------
Replace these values after creating your EmailJS account.

Public Key
Service ID
Template ID
-------------------------------------------------------------
*/

emailjs.init("YOUR_PUBLIC_KEY");



/* ==========================================================
   CONTACT FORM
========================================================== */

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");


if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const submitButton=this.querySelector("button");

submitButton.disabled=true;

submitButton.innerHTML=

'<i class="fas fa-spinner fa-spin"></i> Sending...';

const templateParams={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

subject:document.getElementById("subject").value,

message:document.getElementById("message").value

};

emailjs.send(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

templateParams

)

.then(function(){

formStatus.innerHTML=

"✅ Message sent successfully!";

formStatus.style.color="#22c55e";

contactForm.reset();

})

.catch(function(error){

console.log(error);

formStatus.innerHTML=

"❌ Failed to send message. Please try again.";

formStatus.style.color="#ef4444";

})

.finally(function(){

submitButton.disabled=false;

submitButton.innerHTML=

'<i class="fas fa-paper-plane"></i> Send Message';

setTimeout(()=>{

formStatus.innerHTML="";

},5000);

});

});

}




/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log(

"%cPortfolio Developed by Souvik Ghosh",

"color:#38bdf8;font-size:18px;font-weight:bold;"

);

console.log(

"%cThank you for visiting my portfolio!",

"color:#22c55e;font-size:14px;"

);




/* ==========================================================
   PAGE LOADED
========================================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
