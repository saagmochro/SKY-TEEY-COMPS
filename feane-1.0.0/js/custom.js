// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelectorAll(".displayYear").forEach(function(el) {
        el.innerHTML = currentYear;
    });
}

getYear();

// WhatsApp form submission
$(document).ready(function() {
    $('#whatsappBtn').on('click', function(e) {
        e.preventDefault();
        
        var name = $('#inputName').val() || 'Not provided';
        var phone = $('#inputPhone').val() || 'Not provided';
        var email = $('#inputEmail').val() || 'Not provided';
        var location = $('#inputLocation').val() || 'Not provided';
        var service = $('#inputService').val() || 'Not selected';
        
        // Construct WhatsApp message
        var message = 'Hello Skyteey Cyber,%0A%0A';
        message += 'I am interested in your services.%0A%0A';
        message += 'Name: ' + name + '%0A';
        message += 'Phone: ' + phone + '%0A';
        message += 'Email: ' + email + '%0A';
        message += 'Location: ' + location + '%0A';
        message += 'Service: ' + service + '%0A%0A';
        message += 'Please get back to me.';
        
        // Redirect to WhatsApp
        var whatsappUrl = 'https://wa.me/254711753614?text=' + message;
        window.open(whatsappUrl, '_blank');
    });
});

// Ensure navbar toggler is visible on mobile
$(document).ready(function() {
    function checkMobileMenu() {
        if ($(window).width() <= 992) {
            $('.custom_nav-container .navbar-toggler').css({
                'display': 'flex',
                'visibility': 'visible',
                'opacity': '1'
            });
        } else {
            $('.custom_nav-container .navbar-toggler').css({
                'display': 'none',
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    }
    
    // Run on load and resize
    checkMobileMenu();
    $(window).on('resize', checkMobileMenu);

    // Toggle menu overlay when navbar toggler is clicked
    $('.navbar-toggler').on('click', function() {
        $('.menu-overlay').toggleClass('active');
    });

    // Close overlay when clicking outside the menu
    $('.menu-overlay').on('click', function() {
        $('.navbar-toggler').trigger('click');
        $(this).removeClass('active');
    });

    // Fixed header on scroll - appears when scrolling down, disappears when at top
    var lastScroll = 0;
    $(window).on('scroll', function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 50) {
            if (currentScroll > lastScroll) {
                // Scrolling down - show header
                $('.header_section').addClass('scrolled');
            } else {
                // Scrolling up - keep header visible once scrolled
                $('.header_section').addClass('scrolled');
            }
        } else {
            // At top - hide header
            $('.header_section').removeClass('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Back to Top Button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// WhatsApp Form Handler
$(document).ready(function() {
    $('#whatsappForm').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var service = $('#service').val();
        var location = $('#location').val();
        
        // Build the WhatsApp message
        var message = "Hello Skyteey Cyber,%0A%0A";
        message += "I'm interested in your services.%0A%0A";
        message += "Details:%0A";
        message += "- Name: " + name + "%0A";
        if (phone) message += "- Phone: " + phone + "%0A";
        if (email) message += "- Email: " + email + "%0A";
        if (service) message += "- Service: " + service + "%0A";
        if (location) message += "- Location: " + location + "%0A";
        
        // Redirect to WhatsApp with pre-filled message
        var whatsappUrl = "https://wa.me/254711753614?text=" + message;
        window.open(whatsappUrl, '_blank');
    });
});