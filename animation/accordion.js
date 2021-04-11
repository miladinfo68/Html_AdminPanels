$(() => {

    $(".Qcaption").on("click", function (e) {
        var Qcaption = $(this);
        var wrapper = Qcaption.parent().find('.questionWrapper');
        wrapper.slideToggle(); 
        wrapper.css({ "display": "flex" });
        var sign = Qcaption.find("div").eq(0);
        if (sign.hasClass("minus")) {
            sign.removeClass("minus").html("+");
        } else {
            sign.addClass("minus").html("-");
        }
    });

});