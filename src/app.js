import './scss/style.scss';
import 'bootstrap';
import 'lightslider';

$(document).ready(function(){

    $('#lightSlider').lightSlider({
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
        // controls: false,
        // prevHtml: 'a',
        // nextHtml: 'a',
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

});