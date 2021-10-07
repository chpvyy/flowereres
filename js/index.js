// Toggle mobile menu
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Close the mobile menu on select
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change background navbar on scroll
function scrollHeader() {
    const header = document.querySelector("#header")
    // 100 is view port height
    if (this.scrollY >= 100) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Swiper product
var swiper = new Swiper(".product__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });

// Playing video
const videoFile = document.querySelector("#video-file"),
      videoButton = document.querySelector('#video-button'),
      videoIcon = document.querySelector('#video-icon')

function playPause() {
    if (videoFile.paused) {
        videoFile.play();

        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        videoFile.pause();

        videoIcon.classList.add('ri-play-line')
        videoIcon.classList.remove('ri-pause-line')
    }
}

videoButton.addEventListener('click', playPause)

// change icon at the end of video
function finalVideo() {
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
}

videoFile.addEventListener('ended', finalVideo);

// show button scroll to top
function scrollTop() {
    const scrollTop = document.querySelector('#scroll-up')
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll')
    else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

// Scroll to active section
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(curr => {
        const sectionHeight = curr.offsetHeight
        const sectionTop = curr.offsetTop - 50
        let sectionId = curr.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Animation on scroll
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
           .product__container,
           .experience__data, .experience__overlay,
           .prod__card,
           .sponsor__content,
           .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data,
           .video__description
           .contact__description`,{
    origin: 'left'
})

sr.reveal(`.about__img-overlay,
           .video__content,
           .contact__form `, {
    origin: 'right',
    interval: 100,
})