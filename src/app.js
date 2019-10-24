import './scss/style.scss';
import 'bootstrap';
import 'lightslider';
import './image';

import Swiper from 'swiper';
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerColumnFill: 'row',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });


$(document).ready(function(){

    var slider = $('#lightSlider').lightSlider({
        item:1,
        adaptiveHeight:false,
        slideMove:1,
        speed:750,
        slideMargin:-130,
        loop:false,
        rtl:false,
        vertical: false,
        slideWidth: 679,
        verticalHeight: 482,
        // prevHtml: 'block-product__nav-slide',
        controls: false,
    });
    $('#slide-ros').click(function(){
        slider.goToSlide(1);
    });
    $('#slide-sochi').click(function(){
        slider.goToSlide(2);
    });
    $('#slide-don').click(function(){
        slider.goToSlide(3);
    });
    $('#block-working__slider').lightSlider({
        item:1,
        adaptiveHeight:false,
        slideMove:1,
        speed:750,
        // slideMargin:-130,
        loop:false,
        rtl:false,
        vertical: false,
        verticalHeight: 403,
        slideWidth: 338,
        // controls: false,
        prevHtml: '',
        nextHtml: '',
    });


        //initialize swiper when document ready
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true
        })


});