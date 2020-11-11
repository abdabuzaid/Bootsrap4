/*global $, document, window, SmoothScroll*/


$(document).ready(function () {
    'use strict';
    
    /* Start Nice Scroll */
    $("html").niceScroll({
        cursorcolor: "Crimson",
        cursorwidth: "16px",
        cursorborder: "1px solid Crimson",
        cursoropacitymin: "0.3",
        cursoropacitymax: "0.8"
    });
    /* End Nice Scroll */
    
    /*Start Featured Work*/
    
    $('.featured-work ul li').on('click', function () {
       
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
        
            $('.imgs .col-sm').css('opacity', 1);
            
        } else {
            
            $('.imgs .col-sm').css('opacity', '0.2');
            
            $('.' + $(this).data('class')).parent().css('opacity', 1);
        }
        
    });

    /*End Featured Work*/

});


/* Start Scroll Top Top */
var scrollTop = document.getElementById("scroll-top");
window.onscroll = function () {
    'use strict';
    if (this.pageYOffset >= 600) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
};

scrollTop.onclick = function () {
    'use strict';
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800
    });


};
/* End Scroll To Top */