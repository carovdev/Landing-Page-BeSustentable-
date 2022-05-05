$(document).ready(function(){

    AOS.init();


    $('.image-slider').slick({
    centerMode: true,
    autoplay :true,
    autoplaySpeed :1000,
    speed :3000,
    slidesToShow: 3,
    slidesToScroll: 1
    });
    })