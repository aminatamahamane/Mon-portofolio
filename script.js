$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar et scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll button  script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll et slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    let menubtn = document.querySelectorAll(a.menu-btn);
    for(let links = 0; links < menubtn.length;links++){
        menubtn[links].addEventListener('click',function(){
            for (let out = 0; out < menubtn.length;out++){
                menubtn[out].classList.remove("active");;
            }
            this.classList.add("active");
        });
    }

    $('.navbar .menu li a').click(function(){
        // appliqué smooth scroll au  menu items une fois cliqué 
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
   // $('.menu-btn').click(function(){
      //  $('.navbar .menu').toggleClass("active");
       // $('.menu-btn i').toggleClass("active");
   // });

    // typing texte animation script
    var typed = new Typed(".typing", {
        strings: [ "Developpeur", "Designer", "Administrateur Réseaux"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developpeur", "Designer", "Administrateur Réseaux"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});