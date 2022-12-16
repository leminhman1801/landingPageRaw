//------------------------
const SLIDE_COOLDOWN = 1000;

const carouselSlide = document.querySelector('.js-slide-container')
const carouselImg   = document.querySelectorAll('.slide-img')

const prevBtn = document.querySelector('.js-left-btn')
const nextBtn = document.querySelector('.js-right-btn')

let counter = 1;
let lastImgIndex;
let firstImgIndex;
let size = 0;
let canDoSlide = true;

CarouselSlideValid();
InitEventListener();

function CarouselSlideValid(){
    if (carouselImg[0] != null) {
        size = carouselImg[0].clientWidth;
    }
    else console.log("carouseImg[0] = null")
    CarouselInit()
}
function CarouselInit(){
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    lastImgIndex = carouselImg.length - 2;
    firstImgIndex = 1;
}
function InitEventListener(){
    nextBtn.addEventListener('click',()=>{
        if (!canDoSlide) return;
        Slide(true);
        CountDownSlide();
    });

    prevBtn.addEventListener('click',()=>{
        if (!canDoSlide) return;
        Slide(false);
        CountDownSlide();
    });

    carouselSlide.addEventListener('transitionend', carouselMeaning)
}
function pullLeft() {
    if (!canDoSlide) return;
    Slide(true);
    CountDownSlide()
}
setInterval (pullLeft,3000)
function CountDownSlide()
{
    canDoSlide = false;
    setTimeout(()=>{canDoSlide = true;}, SLIDE_COOLDOWN);
}
function Slide(isSlideToRight)
{
    // slideValue = isSlideToRight ? 1 : -1;
    // or
    slideValue = 1;
    if (!isSlideToRight)
        slideValue = -1;

    if (counter <= 0) return;

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter = counter + slideValue;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
function carouselMeaning (){
    if (carouselImg[counter].id === 'lastClone') {
        counter = lastImgIndex;
    }
    if (carouselImg[counter].id === 'firstClone') {
        
        counter = firstImgIndex;
    }   
        carouselSlide.style.transition = 'none';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}


// Modal 
const modal = document.querySelector('.js-modal')
const hideModalInfo = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

hideModalInfo.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)
modalContainer.addEventListener('click', nonePropagation)

function closeModal () {
    modal.classList.add('close')

}
function nonePropagation(event) {
    event.stopPropagation()
}
