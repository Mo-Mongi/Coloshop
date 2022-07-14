$(".arrival ul li").click(function(){
    $(".arrival ul li").removeClass('active')
    $(this).addClass("active")
})


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    dots: false,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})