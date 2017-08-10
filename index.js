

$("#header-block").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    },  1500);
});

$(".navbar-nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    },  1500);
});


function parallex() {
    ypos = window.pageYOffset;
    var img = document.getElementById("img-container");
    var maxTop = Math.min(80, ypos*0.15);
    img.style.top =  maxTop + 'px';
}

window.addEventListener('scroll', parallex); 