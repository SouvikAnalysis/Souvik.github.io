/*==================================================
                MOBILE MENU
==================================================*/

const hamburger = document.getElementById("hamburger");

const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

    hamburger.classList.toggle("active");

});



document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

        hamburger.classList.remove("active");

    });

});





/*==================================================
                THEME TOGGLE
==================================================*/

const themeToggle=document.getElementById("theme-toggle");

const body=document.body;

const icon=themeToggle.querySelector("i");



function setTheme(theme){

    if(theme==="light"){

        body.classList.add("light-theme");

        icon.className="fa-solid fa-sun";

    }

    else{

        body.classList.remove("light-theme");

        icon.className="fa-solid fa-moon";

    }

}



const savedTheme=localStorage.getItem("theme");

if(savedTheme){

    setTheme(savedTheme);

}



themeToggle.addEventListener("click",()=>{

    const light=body.classList.toggle("light-theme");



    if(light){

        icon.className="fa-solid fa-sun";

        localStorage.setItem("theme","light");

    }

    else{

        icon.className="fa-solid fa-moon";

        localStorage.setItem("theme","dark");

    }

});





/*==================================================
                SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );



        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





/*==================================================
                ACTIVE NAVIGATION
==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(

".nav-links a,.mobile-menu a"

);



window.addEventListener("scroll",()=>{

    let current="";



    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;



        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });



    navLinks.forEach(link=>{

        link.classList.remove("active");



        if(

        link.getAttribute("href")==="#"+current

        ){

            link.classList.add("active");

        }

    });

});





/*==================================================
                BACK TO TOP
==================================================*/

const backToTop=document.getElementById(

"backToTop"

);



window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.style.display="flex";

    }

    else{

        backToTop.style.display="none";

    }

});



backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});





/*==================================================
                HEADER SHADOW
==================================================*/

const header=document.querySelector(".header");



window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.boxShadow=

        "0 10px 30px rgba(0,0,0,.18)";

    }

    else{

        header.style.boxShadow="none";

    }

});
/*==================================================
                TYPING ANIMATION
==================================================*/

const typingElement = document.getElementById("typing-text");

const typingTexts = [

    "Data Analyst",

    "Business Intelligence Analyst",

    "Power BI Developer",

    "SQL Developer"

];

let textIndex = 0;

let charIndex = 0;

let deleting = false;



function typingEffect(){

    const currentText = typingTexts[textIndex];



    if(!deleting){

        typingElement.textContent = currentText.substring(0,charIndex);

        charIndex++;



        if(charIndex > currentText.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent = currentText.substring(0,charIndex);

        charIndex--;



        if(charIndex < 0){

            deleting = false;

            textIndex++;

            if(textIndex >= typingTexts.length){

                textIndex = 0;

            }

        }

    }



    setTimeout(

        typingEffect,

        deleting ? 45 : 100

    );

}



typingEffect();





/*==================================================
                COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");



function animateCounter(counter){

    const target = parseFloat(

        counter.dataset.target

    );



    let count = 0;



    const increment = target / 80;



    const updateCounter = () => {



        if(count < target){

            count += increment;



            if(target % 1 !== 0){

                counter.textContent =

                count.toFixed(1) + "+";

            }

            else{

                counter.textContent =

                Math.ceil(count) + "+";

            }



            requestAnimationFrame(updateCounter);

        }

        else{

            if(target % 1 !== 0){

                counter.textContent =

                target.toFixed(1) + "+";

            }

            else{

                counter.textContent =

                target + "+";

            }

        }

    };



    updateCounter();

}





/*==================================================
                COUNTER OBSERVER
==================================================*/

const counterObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

},

{

    threshold:0.6

}

);



counters.forEach(counter=>{

    counterObserver.observe(counter);

});





/*==================================================
                SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(

".stat-card, .info-card, .skill-card, .timeline-item, .project-card, .certificate-card, .contact-card"

);



revealElements.forEach(el=>{

    el.classList.add("hidden");

});



const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);



revealElements.forEach(el=>{

    revealObserver.observe(el);

});





/*==================================================
                BUTTON RIPPLE EFFECT
==================================================*/

const buttons = document.querySelectorAll(".btn");



buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");



        const rect = this.getBoundingClientRect();



        const size = Math.max(

            rect.width,

            rect.height

        );



        ripple.style.width = size + "px";

        ripple.style.height = size + "px";



        ripple.style.left =

        e.clientX - rect.left - size/2 + "px";



        ripple.style.top =

        e.clientY - rect.top - size/2 + "px";



        ripple.classList.add("ripple");



        this.appendChild(ripple);



        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});





/*==================================================
                PAGE LOADER
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
/*==================================================
                PROJECT IMAGE MODAL
==================================================*/

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.getElementById("closeModal");

const previewButtons = document.querySelectorAll(".preview-btn");

previewButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const image = button.dataset.image;

        modalImage.src = image;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});



closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

    document.body.style.overflow = "";

});



modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

        document.body.style.overflow="";

    }

});





/*==================================================
                ESC KEY CLOSE MODAL
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("active");

        document.body.style.overflow="";

    }

});





/*==================================================
                EMAILJS
==================================================*/

// Replace with your EmailJS credentials

const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";

const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";



emailjs.init({

    publicKey: EMAILJS_PUBLIC_KEY

});



const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");



contactForm.addEventListener("submit",function(e){

    e.preventDefault();



    const submitButton = contactForm.querySelector("button");



    submitButton.disabled = true;

    submitButton.innerHTML =

    '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';



    emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        {

            from_name:document.getElementById("name").value,

            from_email:document.getElementById("email").value,

            subject:document.getElementById("subject").value,

            message:document.getElementById("message").value

        }

    )



    .then(()=>{

        formStatus.style.color="#22c55e";

        formStatus.textContent="Message sent successfully!";



        contactForm.reset();

    })



    .catch(()=>{

        formStatus.style.color="#ef4444";

        formStatus.textContent="Unable to send message. Please try again.";

    })



    .finally(()=>{

        submitButton.disabled=false;

        submitButton.innerHTML=

        '<i class="fa-solid fa-paper-plane"></i> Send Message';

    });

});





/*==================================================
                PRELOAD IMAGES
==================================================*/

["images/swiggy.png","images/pge.png"].forEach(src=>{

    const img=new Image();

    img.src=src;

});





/*==================================================
                ACTIVE YEAR
==================================================*/

const copyright=document.querySelector(".copyright");



if(copyright){

    copyright.innerHTML=

    `© ${new Date().getFullYear()} Souvik Ghosh. All Rights Reserved.`;

}





/*==================================================
                CONSOLE MESSAGE
==================================================*/

console.log(

"%cPortfolio Developed by Souvik Ghosh",

"color:#38bdf8;font-size:18px;font-weight:bold;"

);



console.log(

"%cData Analyst | Power BI Developer | SQL",

"color:#94a3b8;font-size:14px;"

);





/*==================================================
                END
==================================================*/
