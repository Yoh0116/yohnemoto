$(function(){
    $(".accordion p").click(function(){
        $(this).next("ul").slideToggle();
        $(this).toggleClass("open");
    });
});