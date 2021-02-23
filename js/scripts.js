
(function($) {
  "use strict"; // Start of use strict
  
  //Esconder barra menu al hacer scroll abajo
  var position = $(window).scrollTop(); 
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
      //$(".navbar").css("top", "-200px");
      //console.log('scroll abajo');
    } else {
      //$(".navbar").css("top", "0px");
      //console.log('scroll arriba');
    }
    position = scroll;
  });

  //cargamos participación
  $('#participa').load('participa.html');

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#services').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando imagen #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">La imagen #%curr%</a> no puede ser cargada.'
    }
  });

  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Cargando imagen #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">La imagen #%curr%</a> no puede ser cargada.'
    }
  });

})(jQuery); // End of use strict


// Cookies

window.addEventListener('load', function(){
  window.cookieconsent.initialise({
   revokeBtn: "<div class='cc-revoke'></div>",
   type: "opt-in",
   theme: "classic",
   palette: {
       popup: {
           background: "#6c757d",
           opacity: "0.5",
           text: "#fff"
        },
       button: {
           background: "#fe5",
           text: "#000"
        }
    },
   content: {
       message: "Nuestra Web utiliza cookies para que tengas la mejor experiencia de usuario.",
       link: "Cookies",
       allow: "Permitir",
       deny: "Cancelar",
       href: "https://2gdpr.com/cookies"
    },
    onInitialise: function(status) {
      if(status == cookieconsent.status.allow) myScripts();
    },
    onStatusChange: function(status) {
      if (this.hasConsented()) myScripts();
    }
  })
});


function myScripts() {

   // Paste here your scripts that use cookies requiring consent. See examples below

}