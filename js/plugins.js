//Carousel 
$(document).ready(function () {

    $('.carousel').carousel({
        interval: 0
    });
});

//Page loading

$(window).load(function () {

    //    Show The Scroll
    $("body").css("overflow", "auto");

    //    Loading Elements

    $(".loading .sk-cube-grid").fadeOut(1000, function () {


        $(this).parent().fadeOut(1000, function () {


            $(this).remove();
        })
    })

})


$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
