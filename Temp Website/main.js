// Hamburguer Menu


    // // const mobileMenu = document.querySelector("#mobile_menu"); 
    // // const openMenu = document.querySelector("#opened_menu");


    // document.querySelectorAll('.🍔').forEach(item => {
    //     item.addEventListener('click', event => {
    //       console.log('clicked');
    //       item.nextElementSibling.classList.toggle('not_active');
    //       item.nextElementSibling.classList.toggle('active');
        
    //       if(item.nextElementSibling.classList.contains("active")){
            
    //         mobileMenu.style.transition = 'transform 0.6s ease-in-out';
    //         mobileMenu.style.transform = 'translateX(-375px)';
    //         mobileMenu.style.display = 'inline-block';
    //       }
    //       else return;
        
    //     });
    //   });

    // openMenu.addEventListener("click", function(){
    //     openMenu.parentElement.classList.toggle('not_active');
    //     openMenu.parentElement.classList.toggle('active');
    //     if(openMenu.parentElement.classList.contains("not_active")){
    //         mobileMenu.style.transform = 'translateX(0)';
    //         mobileMenu.style.display = 'none';
    //       }
    // })

    // stop scroll

$('.🍔').on('click', function(){
    $('body').toggleClass('active')
})

$('#opened_menu').on('click', function(){
    $('body').removeClass('active')
})



// Transparent to white background
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.header').css('background','#f5f3f4');
    $('.desktop_menu__list li a').css('color','#0b090A')
    } 
    else {
    $('.header').css('background','transparent');
    $('.desktop_menu__list li a').css('color','#f5f3f4');
    }
});

$(window).resize(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
        $('.header').css('background','rgb(244, 246, 247)');
        $('.desktop_menu__list li a').css('color','#0b090A');
        } 
        else {
        $('.header').css('background','transparent');
        $('.desktop_menu__list li a').css('color','#f5f3f4');
        }
    });
});


// Pallax Home Landing Background Image
const parallax = document.getElementById("home");

window.addEventListener("scroll", function(){
    var offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 1.0 + "px";

})

// Services Cards

const card = document.querySelectorAll(".card__inner");

card.forEach(item => {
    item.addEventListener('click', event => {
    item.classList.toggle('active');    
    });
});

// Carousel Slideshow

const slideshowSlide = document.querySelector("#slideshow_images");

const slideshowImages = document.querySelectorAll("#slideshow_images figure");

    // Buttons and Numbers

const prevButton = document.querySelector("#left_slide");
const nextButton = document.querySelector("#right_slide");
const firstNumber = document.querySelector("#first_number");
const secondNumber = document.querySelector("#second_number");

    // Count

let counter = 1;
const size = slideshowImages[0].clientWidth;


    // Move First Image to left

slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Button Listeners

nextButton.addEventListener("click", function(){
    if(counter >= slideshowImages.length - 1) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    var first = 1;
    if(counter >= 1 && counter <= 3){
        first = counter; 
    }

    console.log(counter);
    console.log(first);
    firstNumber.textContent = first;

})

prevButton.addEventListener("click", function(){
    if(counter <= 0) return;
    slideshowSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    var first = slideshowImages.length -2;
    if(counter >= 1 && counter <= 3){
        first = counter;
    }
    console.log(counter);
    console.log(first);
    firstNumber.textContent = first;

    

})
// make current image bigger than the other
// $('#right_slide').on('click', function(){
//     if(counter >= slideshowImages.length - 1) return;
//     $(slideshowImages[counter - 1]).removeClass('current');
//     $(slideshowImages[counter]).addClass('current');
// })

// // $('#left_slide').on('click', function(){
// //     $(slideshowImages[counter + 1]).removeClass('current');
// //     $(slideshowImages[counter]).addClass('current');
// // })

// $('#left_slide').on('click', function(){
//     if(counter <= 0) return;
//     $(slideshowImages[counter + 1]).removeClass('current');
//     $(slideshowImages[counter]).addClass('current');
//     if(counter === )
// })

    //Infinite Loop

slideshowSlide.addEventListener("transitionend", function(){
    if(slideshowImages[counter].id === "lastClone"){
        slideshowSlide.style.transition = "none";
        counter = slideshowImages.length - 2;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if(slideshowImages[counter].id === "firstClone"){
        slideshowSlide.style.transition = "none";
        counter = slideshowImages.length - counter;
        slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})

    // Image Count tracker

secondNumber.textContent = slideshowImages.length -2;

