$(document).ready(function () {
    $(".header__burger, .header__link").on("click", function () {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});