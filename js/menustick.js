$(window).on('resize', function() {
    var windowHeight = ($(window).height());
    var Height = "" + windowHeight;
    $("#banner-size").css("height", Height);
    // $(".header-info").css("height", Height);

    $(window).scroll(function() {
        if ($(window).scrollTop() > windowHeight)
            $(".menu").addClass("fixed");
        else
            $(".menu").removeClass("fixed");
    });
});





$(function() {
    // var menuOffset = $(".menu").offset().top;
    var windowHeight = ($(window).height());
    var Height = "" + windowHeight;
    $("#banner-size").css("height", Height);
    $(window).scroll(function() {
        if ($(window).scrollTop() > windowHeight)
            $(".menu").addClass("fixed");
        else
            $(".menu").removeClass("fixed");
    });
    $('a[href*=#]:not([href=#])').click(function(event) {
        event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $(".menu").outerHeight() - 10
        }, 1500);
    });
});
/*--------- toggle menu on click of list--------*/
$("#navbar-collapse-2 ul li a").click(function() {
    $("#navbar-collapse-2").toggleClass("in");
    $("#header-menu button").toggleClass("collapsed");
});

function mydiv() {
    var offsetHeight = document.getElementById('skill_column1').offsetHeight;
    var skill_column1 = offsetHeight;

    var offsetHeight = document.getElementById('skill_column2').offsetHeight;
    var skill_column2 = offsetHeight;

    var offsetHeight = document.getElementById('skill_column3').offsetHeight;
    var skill_column3 = offsetHeight;
    var temp = 0;
    if (skill_column1 >= skill_column2 && skill_column1 >= skill_column3) {
        temp = skill_column1;
    } else {
        if (skill_column2 >= skill_column1 && skill_column2 >= skill_column3) {
            temp = skill_column2;
        } else {
            if (skill_column3 >= skill_column1 && skill_column3 >= skill_column2) {
                temp = skill_column3;
            }
        }
    }
    temp = "" + temp;
    $('.skills').css('height', temp);
}