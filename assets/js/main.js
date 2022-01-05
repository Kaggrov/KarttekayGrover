// Pre loader
function loader(){
    document.querySelector('.loader').classList.add('fade');
}
function fade(){
    setInterval(loader,1500);
}
window.onload = fade;



// ************Reveal Anime Scrolling********
const screv = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
screv.reveal('.home__social',{delay: 200}); 
screv.reveal('.home__img',{delay: 100}); 
screv.reveal('.home__data .home__title',{delay: 100}); 

screv.reveal('.home .image',{delay: 300}); 
screv.reveal('.home__title > p',{interval: 200}); 
screv.reveal('.scrbutton',{interval: 100}); 



/* SCROLL ABOUT */
// screv.reveal('.about__subtitle');
// screv.reveal('.about__description'); 
// screv.reveal('.about__info'); 



/* SCROLL SKILLS */
// screv.reveal('.skills__header',{interval: 200}); 


/* SCROLL EDUCATION */
// screv.reveal('.education .box',{interval: 200}); 


 

/* SCROLL EXPERIENCE */
// screv.reveal('.experience .timeline',{delay: 400});
// screv.reveal('.experience .timeline .container1',{interval: 400}); 

/* SCROLL CONTACT */

// Soft Scrolling
$(document).ready(function(){
$('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },500, 'linear')
})
});



/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggle(){
    let itemClass = this.parentNode.className;

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className= 'skills__content skills__close';
       
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((x) =>{
    x.addEventListener('click',toggle)
})


/*==================== Projects slider ====================*/
let swiper = new Swiper(".projec__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });




/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 80) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})






// Typed.js effect 

var typed = new Typed(".Typed-text", {
    strings: ["Backend development using NodeJS", "FrontEnd Development using React", "Competitive Programming"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 800,
  });




particlesJS("particles-js", 
{"particles":
{"number":
{"value":182,"density":
{"enable":true,"value_area":800}
}
,"color":{"value":"#1f2d98"},
"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
"polygon":{"nb_sides":5},
"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
"line_linked":{"enable":true,"distance":150,"color":"#280b0b","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},
"onclick":{"enable":false,"mode":"repulse"},
"resize":true},
"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
"repulse":{"distance":200,"duration":0.4},
"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
{ count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; 
requestAnimationFrame(update);;


