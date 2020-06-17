$(document).ready(function() {
    $(".pro-bar").each(function(a, t) {
        var e = $(this),
            n = e.attr("data-pro-bar-percent"),
            r = e.attr("data-pro-bar-delay");
        e.hasClass("animated") || e.css({
            width: "0%"
        }), $(t).appear(function() {
            setTimeout(function() {
                e.animate({
                    width: n + "%"
                }, 2e3, "easeInOutExpo").addClass("animated")
            }, r)
        })
    })
});