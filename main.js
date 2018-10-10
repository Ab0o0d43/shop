$(document).ready(function(){
    $(".items").hover(function(){
        $(this).find(".overlay").fadeIn(200);
    },function(){
        $(this).find(".overlay").fadeOut(200); 
    }
    );
});
